import * as viewProjects from "./actions/viewProjects.js";
import { projectsMenuBtn } from "./util/common.js";

export function initApp() {
  projectsMenuBtn.addEventListener("click", viewProjects.clickHandler);
}
