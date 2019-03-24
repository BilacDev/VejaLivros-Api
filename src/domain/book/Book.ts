import { ObjectId } from "mongodb";

export class Book {
  public static readonly collection: string = "books";
  public id: ObjectId;
  public name: string;
  public year: string;
  public author: string;

  constructor(id: ObjectId, name: string, year: string, author: string) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.author = author;
  }
}
