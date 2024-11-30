import { projectListSection, projectSection } from "../util/common.js";

export function clickHandler() {
  if (this.dataset.projects === "open") handleOpening(this);
  else handleClosing(this);
}

function handleOpening(target) {
  projectSection.dataset.active = "false";
  projectListSection.dataset.active = "true";
  target.dataset.projects = "close";
}

function handleClosing(target) {
  projectListSection.dataset.active = "false";
  projectSection.dataset.active = "true";
  target.dataset.projects = "open";
}
