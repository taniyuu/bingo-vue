console.log('hello')
const { CanvasRenderService } = require('chartjs-node-canvas');
const fs = require('fs').promises;
const purefs = require('fs')
const jimp = require("jimp");
const data = require('../src/assets/data.json');
const docDir = '../docs/img'

main()

async function main(){
  const meta = await func1()
  func2(meta)
}

/**
 * 背景色を白にして、jpegに変換する
 */
function func2(meta){
  console.log(meta)
  jimp.read(`${meta.dir}/${meta.file}.png`)
    .then(image => {
      // 背景色を白にする
      image.background(0xffffffff).write(`${meta.dir}/${docDir}/${meta.file}.jpg`)
    })
  /*jimp.read(`${meta.dir}/${meta.file}.png`).then(image => {
    image.getBuffer(jimp.MIME_JPEG, (e,d)=>{
      purefs.writeFileSync(`${meta.dir}/${meta.file}.jpg`,d);
    })
  })*/
}

/**
 * canvasからpngを作る
 */
async function func1(){
    const renderService = new CanvasRenderService(800, 600);
    const options = {
        type: 'line',
        data: {
          labels: Object.keys(data.data),
          datasets: [{
            label: data.label,
            backgroundColor: data.backgroundColor,
            borderColor:data.borderColor,
            data: Object.values(data.data),
            fill: false
          }]
        },
        options: data.options
      };
    // pngデータ？
    const buffer = await renderService.renderToBuffer(options)
    const fileName = "test"
    await fs.writeFile(`${__dirname}/${fileName}.png`,buffer);
    return {dir:__dirname,file:fileName}
    /*pngToJpeg({quality: 100})(buffer).then(
      output => purefs.writeFileSync(`${__dirname}/test.jpeg`, output)
    );*/
}