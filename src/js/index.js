import init from "./myLists";
import { loadDataFromLocalStorage } from "./storeData";
import { setDefaultList } from "./defaultToDo";
import "../style.css";

setDefaultList();
loadDataFromLocalStorage();
init();
