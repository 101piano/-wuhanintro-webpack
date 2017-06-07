const webpack=require('webpack');
const path=require('path');

module.exports={
  entry: './js/src/index.js',
  output: {
    path: path.resolve(__dirname,'./js/bin'),
    filename: 'index.bundle.js',
  },
  module: {
    rules: [
      {
        test:/\.css$/,    //文件的文件名是不是满足这个正则
        use: [
          {loader:'style-loader'},
          {loader:'css-loader'}
        ]
      }
    ]
  },
  plugins:[
  
  ]

 
}
