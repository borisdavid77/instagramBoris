/* eslint-disable react/jsx-no-constructed-context-values */
import "./wdyr";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import FirebaseContext from "./context/firebase";
import { firebase, FieldValue } from "./lib/firebase";
import "./styles/app.css";

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

// Client side rendered app: ract (cra)
// => database which is Firebase
// => react-loading-skeleton
// => tailwind

// Folder structure
// src =>
// => components
// => constants
// => context
// => helpers
// => hooks
// => pages
// => lib (firebase is going to live in here)
// => services (firebase functions in here)
// => styles (talwind's folder(app/talwind))

// => photos sHsSAnIuNFvNvDxjqxUH
// => users alIK3dcXkKbSt6xS25z0
// => user ID JaOIZxH3h7QS0KOUXe8VCuHEfdI3
