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
        test:/\.css$/,    
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
