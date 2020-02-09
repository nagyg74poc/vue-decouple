const path = require('path');

module.exports = {
    watch: true,
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        // 'store/store':'./src/store/index.ts',
        'main':'./src/main.ts',
        // 'components/text/text.component':'./src/components/text/text.component.ts',
        // 'components/player/player.component':'./src/components/player/player.component.ts',
        // 'components/history/history.component':'./src/components/history/history.component.ts'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    },
    output: {
        library: 'myVapp',
        // libraryTarget: 'umd',
        path: path.resolve(__dirname, 'src'),
        filename: '[name].js'
    }
};