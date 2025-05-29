export class Article {
  #likeCount = 0;

  constructor({ title, content, writer = '익명' }) {//writer 반환 X
    this.title = title;
    this.content = content;
    this.writer = writer;
    this.createdAt = new Date();
  }

  like() {
    this.#likeCount++;
  }

  getLikeCount() {
    return this.#likeCount;
  }
}