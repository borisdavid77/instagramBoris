<<<<<<< HEAD
/* eslint-disable react/jsx-no-constructed-context-values */
import "./wdyr";
=======
>>>>>>> 7ae4ad4a182b28aa5d9d73ad9f3d040d6bc884b0
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import FirebaseContext from "./context/firebase";
import { firebase, FieldValue } from "./lib/firebase";
import "./styles/app.css";

ReactDOM.render(
<<<<<<< HEAD
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
=======
  <FirebaseContext.Provider value={(firebase, { FieldValue })}>
>>>>>>> 7ae4ad4a182b28aa5d9d73ad9f3d040d6bc884b0
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
