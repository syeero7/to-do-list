import "../style.css";
import { initApp } from "./ui.js";
import { loadFromLocalStorage } from "./localStorage.js";
import { setDefaultProject } from "./defaultProject.js";

setDefaultProject();
loadFromLocalStorage();
initApp();
