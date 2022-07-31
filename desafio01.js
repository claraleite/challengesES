class Book {
    constructor(title, description, author) {
        this.title = title
        this.description = description
        this.author = author
    }

    addId(id) {
        this.id = id
    }
}
    
class Library {
    constructor() {
        this.books = []
    }

    addBook(bookInfo) {
        var stringChosen = ""
        const hugeString = "abcdefghijklmnopqrstuv1234567890-=+[];?><!@#$%&*:.,"
        // console.log(hugeString.length)
        const numbersArray = [...Array(3).keys()]
        for (var number in numbersArray) {
            const numberChosen = Math.floor(Math.random() * 50)
            // console.log(numberChosen)
            const idChosen = hugeString.substr(numberChosen, 1)
            stringChosen += idChosen

        }
        bookInfo.addId(stringChosen)

        console.log(bookInfo)

        this.books.push(bookInfo)

        console.log(this.books)

        return bookInfo


    }

    getBooks() {
        return this.books
    }

    removeBookById(id) {
        var index = 0
        while (this.books[index].id != id) {
            index += 1
        }
        const deletedBook = this.books[index]
        this.books.splice(index, 1)

        // console.log(deletedBook);
        return deletedBook
    }

    getBookById(id) {
        var index = 0
        while (this.books[index].id != id) {
            index += 1
        }
        const foundBook = this.books[index]


        console.log(foundBook);
        return foundBook
    }

    updateBookById(id, info) {
        var index = 0
        const infoTitle = info.title
        console.log(infoTitle);
        const infoDescription = info.description
        const infoAuthor = info.author

        while (this.books[index].id != id) {
            index += 1
        }
        var updatedBook = this.books[index]
        updatedBook.title = infoTitle
        updatedBook.description = infoDescription
        updatedBook.author = infoAuthor

        console.log(updatedBook);
        return updatedBook
    }
}


//console.log(stringChosen)


const lib = new Library()
const bookToAdd = new Book("Livro1", "Descrição1", "Autor1")
const newBookToAdd = new Book("Livro2", "Descrição2", "Autor2")
const newestBookToAdd = new Book("Livro3", "Descrição3", "Autor3")


lib.addBook(bookToAdd)
const testingId = lib.addBook(newBookToAdd)
// lib.removeBookById(testingId.id)
lib.getBookById(testingId.id)
lib.updateBookById(testingId.id, newestBookToAdd)
