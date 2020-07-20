import React from "react";
import BookContextProvider from "./contexts/BookContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <BookContextProvider>
        <Navbar />
      </BookContextProvider>
    </div>
  );
}

export default App;
