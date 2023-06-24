const { storage } = require("../data/storage");

class Store {
  static async listProducts() {
    // list all items in the transactions array
    const products = storage.get("products").value();
    return products;
  }

  static async fetchProductById(productId) {
    // fetch a single transaction
    const product = storage
      .get("products")
      .find({ id: Number(productId) })
      .value();
    return product;
  }
}

module.exports = Store;
