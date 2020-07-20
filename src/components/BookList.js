import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "../components/BookDetails";
import "../App.css";

export default function BookList() {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to ReadableStream. Hello free time :)</div>
  );
}
