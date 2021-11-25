const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  reactStrictMode: true,
  env: {
    "BASE_URL": "http://localhost:3000",
    "MONGODB_URL": "mongodb+srv://adm:qawsedrftgyhujikolpç@ecommercedb.axp8r.mongodb.net/ecommercedb?retryWrites=true&w=majority"
  }
})
