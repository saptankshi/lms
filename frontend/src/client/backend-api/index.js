const { BookApi } = require("./book")
const { UserApi } = require("./user")
const { AdminApi } = require('./admin');

const BackendApi = {
  book: BookApi,
  user: UserApi,
  admin: AdminApi
}

module.exports = { BackendApi }

