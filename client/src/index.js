import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

const container = document.getElementById("root");

const root = createRoot(container);
root.render(<App tab="home"/>);

