import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";

import { makeServer } from "./server";
import AuthContextProvider from "./frontend/contexts/AuthContextProvider";
import PostsContextProvider from "./frontend/contexts/PostsContextProvider.js";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <PostsContextProvider>
          <App />
        </PostsContextProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>
);
