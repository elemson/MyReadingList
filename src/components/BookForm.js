import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

export default function NewBookForm() {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    console.log(title, author);
    setTitle("");
    setAuthor("");
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          value={author}
          placeholder="book author"
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input type="submit" value="add book" />
      </form>
    </div>
  );
}
