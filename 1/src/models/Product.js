export class Product {
  #favoriteCount = 0;

  constructor({ name, description, price, tags, images }) {//리턴값에 id도 포함됨.
    this.name = name;
    this.description = description;
    this.price = price;
    this.tags = tags;
    this.images = images;
  }

  favorite() {
    this.#favoriteCount++;
  }

  getFavoriteCount() {
    return this.#favoriteCount;
  }
 }