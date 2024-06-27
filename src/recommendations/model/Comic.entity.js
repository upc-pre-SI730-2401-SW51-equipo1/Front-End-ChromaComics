export class Comic {
    constructor(id, bookTitle, description, genre, author) {
        this.id = id;
        this.bookTitle = bookTitle;
        this.description = description;
        this.genre = genre;
        this.author = author;
    }

    static fromDisplayableComic(displayableComic) {
        return new Comic(
            displayableComic.id,
            displayableComic.bookTitle,
            displayableComic.description,
            displayableComic.genre,
            displayableComic.author
        );
    }

    static toDisplayableComic(comic) {
        return {
            id: comic.id,
            bookTitle: comic.bookTitle,
            description: comic.description,
            genre: comic.genre,
            author: comic.author
        };
    }
}
