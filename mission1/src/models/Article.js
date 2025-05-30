export class Article {
  #title;
  #content;
  #writer;
  #likeCount = 0;
  #createdAt;

  constructor({ title, content, writer = '익명', createdAt }) {//writer 반환 X
    this.title = title;
    this.content = content;
    this.writer = writer;
    this.createdAt = createdAt ? new Date(createdAt) : new Date();
  }

  get title() {
    return this.#title;
  }
  set title(i) {
    this.#title = i;
  }

  get content() {
    return this.#content;
  }
  set content(i) {
    this.#content = i;
  }

  get writer() {
    return this.#writer;
  }
  set writer(i) {
    this.#writer = i;
  }

  get createdAt() {
    return this.#createdAt;
  }
  set createdAt(i) {
    this.#createdAt = new Date(i);
  }

  like() {
    this.#likeCount++;
  }

  getLikeCount() {
    return this.#likeCount;
  }
}