import "./App.css";
import React from "react";
import { useState } from "react";

// 2.1...Task: craete a text editor with three buttons:
function Editor() {
  function handleBoldClick() {
    alert("Bold text");
  }

  function handleItalicClick() {
    alert("Italic text");
  }

  function handleSaveClick() {
    alert("Save draft");
  }
  return (
    <>
      <button onClick={handleBoldClick}>Bold text</button>
      <button onClick={handleItalicClick}>Italic text</button>
      <button onClick={handleSaveClick}>Save draft</button>
      <hr />
    </>
  );
}

// 2.2...Task: Create a simple image gallery component.............
function Gallery() {
  const images = [
    "https://i.imgur.com/Mx7dA2Y.jpg",
    "https://i.imgur.com/aTtVpES.jpg",
    "https://i.imgur.com/2heNQDcm.jpg",
  ];

  const [index, setIndex] = useState(0);

  function handleNextClick() {
    setIndex((index + 1) % images.length);
    if (index === images.length - 1) {
      setIndex(0);
    }
  }

  function handlePrevClick() {
    setIndex((index - 1 + images.length) % images.length);
    if (index === 0) {
      setIndex(images.length - 1);
    }
  }

  return (
    <div>
      <img src={images[index]} alt="Gallery" width="250" height="250" />
      <div>
        <button onClick={handlePrevClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
      <hr />
    </div>
  );
}


//2.3-4...Task: Create a RequestTracker component..................
function RequestTracker() {
  const [pending, setPending] = useState(0);

  function handleBuy() {
    setPending(pending => pending + 1);
    setPending(pending => pending + 1);
    setPending(pending => pending + 1);
  }

  function handleSell() {
    setPending(pending => pending - 1);
  }

  return(
    <>
      <p>Pending requests: {pending}</p>
      <button onClick={handleBuy}>Buy</button>
      <button onClick={handleSell}>Sell</button>
      <hr />
    </>
  );
}


//2.5..Task: Build a multi-field form for editing user information. 
function UserForm(){
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@react.com",
  });

  function handleFirstNameChange(event) {
    setPerson({
      ...person,
      firstName: event.target.value,
    });
  }

  function handleLastNameChange(event) {
    setPerson({
      ...person,
      lastName: event.target.value,
    });
  }

  function handleEmailChange(event) {
    setPerson({
      ...person,
      email: event.target.value,
    });
  }

  return(
    <>
      <label>
        First Name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last Name:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Email:
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
      <p>Full Name: {person.firstName} {person.lastName}</p>
      <p>Email: {person.email}</p>
      <hr />
    </>
  );
}

export default function App() {
  return (
    <div>
      {/* 2.1...Task: craete a text editor with three buttons: */}
      <Editor />
      {/* 2.2...Task: Create a simple image gallery component............. */}
      <Gallery />
      {/* 2.3-4...Task: Create a RequestTracker component...... */}
      <RequestTracker />
      {/* 2.5...Task: Build a multi-field form for editing user information.  */}
      <UserForm />
    </div>
  );
}
