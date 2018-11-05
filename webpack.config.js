var path = require("path");
var webpack = require("webpack");
var fs = require("fs");
var glob = require("glob");


//取文件后缀名
function GetFileExt(filepath) {
    if (filepath) {
        if (filepath.indexOf("/") > 0) {
            return filepath.substring(filepath.lastIndexOf("/") + 1);
        } else {
            return filepath;
        }
    }
}
//取文件名不带后缀
function GetFileNameNoExt(filepath) {
    var fp = GetFileExt(filepath);
    return fp.substring(0, fp.lastIndexOf("."));
}

//获取一个初始化的webpack设置
function GetSetting() {
    return {
        entry: {
        },//入口
        output: {//出口
            path: __dirname + "/build/",
            filename: "[name].js",
            library: "tools",
            publicPath: '/',
            libraryTarget: "umd"
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["react", "env"],
                            "plugins": [
                                ["import", {
                                    'libraryName': 'antd-mobile',
                                    'style': 'css',
                                }]
                            ]
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.ts$/,
                    loader: "ts-loader"
                }
            ]
        },
        externals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'react-router-dom': 'ReactRouterDOM'
        },
        resolve: {
            alias: {
                'Forreacttest': path.resolve(__dirname, 'forreacttest/'),
                'component': path.resolve(__dirname, 'component/'),
            }
        },
        plugins: [
            // new webpack.optimize.UglifyJsPlugin({
            //     compress: {
            //         warnings: false,
            //         drop_console: false,
            //       }
            // })
        ]
    };
};
function setEntry(_path, _setting) {
    var files = glob.sync(_path);
    files.forEach(function (file) {
        _setting.entry[GetFileNameNoExt(file)] = file;
    });
}

var setting = [];

var blogsetting = GetSetting();
blogsetting.output.filename = "views/blog/[name].js";
setEntry("./content/src/blog/*.js", blogsetting);
//setting.push(blogsetting);

var comsetting = GetSetting();
setEntry("./content/src/zsphelper.js", comsetting);
comsetting.output.filename = "[name].js";
//setting.push(comsetting);

var comsetting = GetSetting();
//comsetting.entry.common= ["react","react-dom"];
setEntry("./content/src/common.js", comsetting);
//comsetting.output.chunkFilename="[name].js";
comsetting.output.filename = "[name].min.js";
//setting.push(comsetting)

var forreacttest = GetSetting();
forreacttest.output.path = __dirname + '/forreacttest/';
forreacttest.output.filename = '[name].js';
setEntry('./forreacttest/*.jsx', forreacttest);
//setting.push(forreacttest);

var reactcomsetting = {
    entry: ['./forreacttest/react.js', './forreacttest/reactdom.js'
        , './forreacttest/react-router.js'],
    output: {
        path: __dirname + '/forreacttest/',
        filename: 'reactcom.js'
    }
};
//setting.push(reactcomsetting);

reactcomsetting = {
    entry: {
        vendor: ['react', 'react-dom']
    },
    output: {
        path: __dirname + '/forreacttest',
        filename: "[name].[chunkHash:8].js",
        chunkFilename: "[name].[chunkHash:8].js",
    },
    plugins: [
    ]
}
//setting.push(reactcomsetting);

var bluedsetting=GetSetting()
bluedsetting.output={
        path:__dirname+"/blued",
        filename:"[name].js",
}
setEntry("./blued/index.jsx",bluedsetting);
setting.push(bluedsetting);

module.exports = setting;