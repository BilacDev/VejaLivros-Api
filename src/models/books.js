//Import the mongoose module
var mongoose = require('mongoose');

var booksSchema = new mongoose.Schema({
    author: String
}, { strict: false, versionKey: false});

var books = mongoose.model('books', booksSchema);

module.exports = {
    find: (query) => {
        return new Promise(function (resolve, reject) {
            books.find(query, function (err, books) {
                resolve(books);
            });
        });
    },
    save: (data) => {
        return new Promise(function (resolve, reject) {
            books.create(data, function (err, books) {
                resolve(books);
            });
        });
    },
    update: (_id, data) => {        
        return new Promise(function (resolve, reject) {
            books.updateOne({ "_id": _id }, data, {multi: true } , function (err, books) {
                resolve(books);
            });
        });
    }
}