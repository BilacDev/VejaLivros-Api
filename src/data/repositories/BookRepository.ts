import { Collection, Db, ObjectId } from "mongodb";
import { Book } from "../../domain/book/Book";

export class BookRepository {
  private readonly collection: Collection;

  constructor(connection: Db) {
    // tslint:disable-next-line:no-console
    console.log(connection);
    this.collection = connection.collection(Book.collection);
  }

  public async save(book: Book): Promise<void> {
    const existingBook = await this.collection.find({ _id: book.id })
      .limit(1)
      .count()
      .then((count) => count > 0);

    if (existingBook) {
      return this.update(book);
    }

    await this.collection.insert({
      _id: book.id,
      name: book.name,
      year: book.year,
      author: book.author
    });
  }

  public async findById(id: string | ObjectId): Promise<Book | null> {
    return this.collection.findOne({ _id: new ObjectId(id) })
      .then((document) => {
        if (!document) {
          return null;
        }

        return new Book(document._id, document.name, document.year, document.author);
      });
  }

  private async update(book: Book) {
    await this.collection.update({ _id: book.id }, {
      $set: { name: book.name, year: book.year, author: book.author }
    });
  }
}
