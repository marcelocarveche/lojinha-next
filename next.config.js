const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  reactStrictMode: true,
  env: {
    "BASE_URL": "http://localhost:3000",
    "MONGODB_URL": "mongodb+srv://adm:qawsedrftgyhujikolpç@ecommercedb.axp8r.mongodb.net/ecommercedb?retryWrites=true&w=majority",
    "ACCESS_TOKEN_SECRET": "kd`cxy=>[BCd~9(5UKyE*m;8Pxx`G.F?P#z&Tz)",
    "REFRESH_TOKEN_SECRET": "<bMUx9)%aaN+h@k+S9(a`A<<CD3b!w!Z%4VyGV!57:U>s7q5K{/2pc6B/L]M:5E';NC@-v"
  }
})
