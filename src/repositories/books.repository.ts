class BookRepository {
  data: any[] = [];

  constructor() {
  }

  create(book: {id: number, title: string}) {
    this.data.push(book);
  }

  findAll() {
    return this.data
  }

  findOne(bookid: number) {
    return this.data.find({id} => id === bookid);
  }

  update(bookid: number, book: {title: string}) {
    const index = this.data.findIndex({id} => id === bookid);
    this.data[index] = {
      id: bookid,
      title: book.title
    };
  }

  delete(bookid: number) {
    const index = this.data.findIndex({id} => id === bookid);
    delete this.data[index];
  }
}

export const bookRepository = new BookRepository();
