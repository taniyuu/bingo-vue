const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
    publicPath: '/',
    outputDir: "docs",
    configureWebpack: () => {
        if (process.env.NODE_ENV === 'production') {
            return {
                plugins: [
                    new PrerenderSPAPlugin({
                        staticDir: path.join(__dirname, 'docs'),
                        routes: [ '/', '/condition' ],
                        /*renderer: new Renderer({
                            // document.dispatchEvent(new Event('custom-render-trigger'))
                            // されるまで読み込みを待つ
                            renderAfterDocumentEvent: 'custom-render-trigger'
                        })*/
                    })
                ]
            }
        }
    }
}