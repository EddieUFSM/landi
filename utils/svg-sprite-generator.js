const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')

const iconsFolderPath = path.join(__dirname, '../icons')
const outputFileName = path.join(__dirname, '../icons/sprites.svg')

let svgContent = '<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">'

// Função para remover comentários de um elemento HTML
function removeComments(html) {
  return html.replace(/<!--[\s\S]*?-->/g, '')
}

// Função recursiva para percorrer todas as subpastas dentro de iconsFolderPath
function processFolder(folderPath) {
  fs.readdirSync(folderPath).forEach(item => {
    const itemPath = path.join(folderPath, item)
    const stats = fs.statSync(itemPath)
    if (stats.isDirectory()) {
      processFolder(itemPath) // Se o item for uma pasta, chama a função recursivamente
    } else if (path.extname(item) === '.svg') {
      const svgData = fs.readFileSync(itemPath, 'utf8')
      const svgWithoutComments = removeComments(svgData) // Remove os comentários do SVG
      const $ = cheerio.load(svgWithoutComments, { xmlMode: true })
      const svgSymbol = $('svg').html()
      const viewBox = $('svg').attr('viewBox') // Pega a viewBox do SVG
      const svgId = path.basename(item, '.svg') // ID baseado no nome do arquivo SVG sem extensão
      svgContent += `<symbol id="${svgId}" viewBox="${viewBox}">${svgSymbol}</symbol>`
    }
  })
}

processFolder(iconsFolderPath) // Inicia o processo com a pasta raiz de ícones

svgContent += '</svg>'

fs.writeFileSync(outputFileName, svgContent, 'utf8')

console.log(`Arquivo ${outputFileName} criado com sucesso!`)
