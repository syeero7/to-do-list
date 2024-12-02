import "../style.css";
import { initApp } from "./ui.js";
import { loadFromLocalStorage } from "./localStorage.js";

loadFromLocalStorage();
initApp();
