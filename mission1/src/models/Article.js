export class Article {
  #title;
  #content;
  #writer;
  #likeCount = 0;

  constructor({ title, content, writer = '익명' }) {//writer 반환 X
    this.title = title;
    this.content = content;
    this.writer = writer;
    this.createdAt = new Date();
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

  like() {
    this.#likeCount++;
  }

  getLikeCount() {
    return this.#likeCount;
  }
}