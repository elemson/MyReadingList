import React, { useState, createContext } from "react";
import { uuid } from "uuidv4";

export const BookContext = createContext();

function BookContextProvider(props) {
  const [books, setBooks] = useState([
    { title: "name of the wind", author: "aptrick rothfuss", id: uuid() },
    { title: "the final empire", author: "brandon sanderson", id: uuid() },
  ]);
  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;
