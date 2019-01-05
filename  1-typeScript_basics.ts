
function GetAllBooks() {
    let books = [
        { title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { title: 'A Farewll to Arms', author: 'Ernest hemingway', available: false, category: Category.Fiction },
        { title: 'I kNow Why the Caged Bird Sings', author: 'May Anelou', available: true, category: Category.Poetry },
        { title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction },
        { title: 'History titile', author: 'History', available: true, category: Category.History },
    ];
    return books;
}

function LogFirstAvailable(books): void {
    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';
    for (let currentBook of books) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }

    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable)
}
enum Category { Biography, Fiction, Poetry, History, Children }
function GetBookTitlesByCategory(categoryFilter: Category): Array<string> {
    console.log('Getting books in category: ' + Category[categoryFilter])
    const allBooks = GetAllBooks();
    const filteredTitles: string[] = [];
    for (let currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title)
        }
    }
    return filteredTitles;
}
function LogBookTitles(titles: string[]): void {
    for (let title of titles) {
        console.log(title)
    }
}

const poetryBooks = GetBookTitlesByCategory(Category.Fiction);
LogBookTitles(poetryBooks)