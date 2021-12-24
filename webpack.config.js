
const path = require('path');
 
module.exports = {
  entry: './test2.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
    }
}
