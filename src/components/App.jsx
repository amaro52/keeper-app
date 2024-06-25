import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

const App = () => {
  // create notes for all the cards
  const createNotes = (noteItem) => {
    return (
      <Note
        key={noteItem.key}
        title={noteItem.title}
        content={noteItem.content}
      />
    );
  };

  return (
    <div>
      <Header />
      {notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;
