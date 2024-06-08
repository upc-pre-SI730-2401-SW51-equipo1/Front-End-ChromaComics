export class Comic {
    constructor(id, title, issue, year, publisher, writer, categoryId, image) {
        this.id = id;
        this.title = title;
        this.issue = issue;
        this.year = year;
        this.publisher = publisher;
        this.writer = writer;
        this.categoryId = categoryId;
        this.image = image;
    }

    static fromDisplayableComic(displayableComic) {
        return new Comic(
            displayableComic.id,
            displayableComic.title,
            displayableComic.issue,
            displayableComic.year,
            displayableComic.publisher,
            displayableComic.writer,
            displayableComic.categoryId,
            displayableComic.image
        );
    }

    static toDisplayableComic(comic) {
        return {
            id: comic.id,
            title: comic.title,
            issue: comic.issue,
            year: comic.year,
            publisher: comic.publisher,
            writer: comic.writer,
            categoryId: comic.categoryId,
            image: comic.image
        };
    }
}