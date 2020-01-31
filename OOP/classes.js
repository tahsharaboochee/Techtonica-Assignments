class Event {
  constructor(ticketType, price, priceRange) {
    this.ticketType = ticketType;
    this.price = price;
    this.priceRange = priceRange;
    this.ticketPrices = {}
  }


class Borrower {
  constructor(id, firstName, middleInitial, lastName, phoneNumber) {
    this.id = id;
    this.firstName = firstName;
    this.middleInitial = middleInitial;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.libraryBooks = []; // list of books checked out from library
  }
  checkOut(book) {
    this.libraryBooks.push(book);
    let borrowedDate = new Date();
    let dueDate = book.calculateDueDate(borrowedDate);
    return dueDate;
  }
  getLastBook(){
    return this.libraryBooks[this.libraryBooks.length - 1].summary();
  }
}
class Book {
  constructor(id, title, authorFirstName, authorLastName) {
    this.id = id;
    this.title = title;
    this.authorFirstName = authorFirstName;
    this.authorLastName = authorLastName;
    this.renewalLimit = 5;
  }
  summary() {
    return this.title + " (" + this.authorLastName + ", " + this.authorFirstName + ")";
  }
  calculateDueDate(borrowedDate) {
    return borrowedDate.setDate(borrowedDate.getDate() + 21);  // 21 days is 3 weeks
  }
}

class AudioBook extends Book {
  constructor(id, title, authorFirstName, authorLastName, lengthInMinutes) {
    super(id, title, authorFirstName, authorLastName);
    this.lengthInMinutes = 90;
    this.renewalLimit = 1;
  }
  calculateDueDate(borrowedDate) {
    return borrowedDate.setDate(borrowedDate.getDate() + 14);  // 14 days is 2 weeks
  }
}


 let book1 = new Book(12345, "Why Didn't They Ask Evans?", "Agatha", "Christie");
 let book2 = new Book(12346, "The Long Goodbye", "Raymond", "Chandler");
 let book3 = new Book(12347, "Decline and Fall", "Evelyn", "Waugh");
 let MaryCrowley = new Borrower("1234567", "Mary", "E", "Crowley", "(555)123-4567");
 let JohnDoe = new Borrower("7654321", "John", "N", "Doe", "(111)222-3333");
 let myAudioBook = new AudioBook(55234, "Principles of OO Design", "Barbara", "Liskov", 206);
 let myAudioBook = new AudioBook(55234, "Principles of OO Design", "Barbara", "Liskov", 206);
JohnDoe.checkOut(book1);
JohnDoe.checkOut(book2);
JohnDoe.checkOut(book3);
 console.log(MaryCrowley.getLastBook());