if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://Hoang:123456@ds013475.mlab.com:13475/vidjot-app'}
}
else{
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}
