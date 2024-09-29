/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/

;// CONCATENATED MODULE: ./src/images/add.svg
const add_namespaceObject = __webpack_require__.p + "13719e5c2bc251f13050.svg";
;// CONCATENATED MODULE: ./src/images/cancel.svg
const cancel_namespaceObject = __webpack_require__.p + "58c32b358c25c0131b54.svg";
;// CONCATENATED MODULE: ./src/images/check.svg
const check_namespaceObject = __webpack_require__.p + "3da205ef201af6b8f4ec.svg";
;// CONCATENATED MODULE: ./src/images/close.svg
const close_namespaceObject = __webpack_require__.p + "cd12d939b69dd352612a.svg";
;// CONCATENATED MODULE: ./src/images/delete.svg
const delete_namespaceObject = __webpack_require__.p + "c6b612e2a667d6a6ad4e.svg";
;// CONCATENATED MODULE: ./src/images/edit.svg
const edit_namespaceObject = __webpack_require__.p + "925a0b1a3765d518bf2d.svg";
;// CONCATENATED MODULE: ./src/images/more.svg
const more_namespaceObject = __webpack_require__.p + "0b09336c76d9e829f541.svg";
;// CONCATENATED MODULE: ./src/images/open.svg
const open_namespaceObject = __webpack_require__.p + "a09f65dce03a7c21a415.svg";
;// CONCATENATED MODULE: ./src/images/tag.svg
const tag_namespaceObject = __webpack_require__.p + "078f077bb484a51e3726.svg";
;// CONCATENATED MODULE: ./src/js/common.js
const renameListDialog = document.querySelector("#renameListDlg");
const deleteListDialog = document.querySelector("#deleteListDlg");
const addTaskDialog = document.querySelector("#addTaskDlg");
const editTaskDialog = document.querySelector("#editTaskDlg");
const viewTaskDialog = document.querySelector("#viewTaskDlg");
const subtaskDialog = document.querySelector("#subtaskDlg");

const toDoListForm = document.querySelector("#toDoListForm");
const listNameInput = document.querySelector("#addToDoList");

const renameListForm = document.querySelector("#renameListForm");
const renameListInput = document.querySelector("#renameList");

const deleteListTitle = document.querySelector(".deleteListTitle");

const addTaskForm = document.querySelector("#addTaskForm");
const taskTitleInput = document.querySelector("#taskTitle");
const taskDescInput = document.querySelector("#taskDescription");
const taskDueDateInput = document.querySelector("#taskDueDate");
const taskPrioritySelect = document.querySelector("#taskPriority");
const taskNoteInput = document.querySelector("#taskNote");

const editTaskForm = document.querySelector("#editTaskForm");
const editTaskTitleInput = document.querySelector("#editTaskTitle");
const editTaskDescInput = document.querySelector("#editTaskDescription");
const editTaskDueDateInput = document.querySelector("#editTaskDueDate");
const editTaskPriority = document.querySelector("#editTaskPriority");
const editTaskNoteInput = document.querySelector("#editTaskNote");

const addSubtaskForm = document.querySelector("#addSubtaskForm");
const subtaskInput = document.querySelector("#addSubtask");

const viewTaskTitle = document.querySelector("[data-task-title]");
const viewTaskDesc = document.querySelector("[data-task-description]");
const viewTaskDueDate = document.querySelector("[data-task-due-date]");
const viewTaskPriority = document.querySelector("[data-task-priority]");
const viewTaskNote = document.querySelector("[data-task-note]");
const viewTaskStatus = document.querySelector("[data-task-status]");

const myLists = document.querySelector("#myLists");
const toDoList = document.querySelector("#toDoList");
const subtasks = document.querySelector("#subtasks");

const selectedList = document.querySelector("#selectedList");
const addTaskButton = document.querySelector(".addTaskContainer>button");











function generateNewId() {
  return Date.now().toString();
}

function removeElements(parentElement) {
  while (parentElement.firstChild) {
    parentElement.firstChild.remove();
  }
}

;// CONCATENATED MODULE: ./src/js/createListEl.js


function createListElements(toDoList) {
  const listContainer = document.createElement("div");
  listContainer.dataset.listId = toDoList.id;

  const para = document.createElement("p");
  para.textContent = toDoList.name;
  para.classList.add("listName");

  const editBtn = document.createElement("button");
  editBtn.classList.add("editBtn");

  const editImg = document.createElement("img");
  editImg.src = edit_namespaceObject;
  editImg.alt = "edit";

  editBtn.appendChild(editImg);
  listContainer.append(para, editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");

  const deleteImg = document.createElement("img");
  deleteImg.src = delete_namespaceObject;
  deleteImg.alt = "delete";

  deleteBtn.appendChild(deleteImg);
  listContainer.appendChild(deleteBtn);

  myLists.appendChild(listContainer);
}

;// CONCATENATED MODULE: ./src/js/classes/lists.js
class Lists {
  #Lists;

  constructor() {
    if (Lists.instance == null) {
      this.#Lists = [];
      Lists.instance = this;
    }

    return Lists.instance;
  }

  addList(newList) {
    this.#Lists.push(newList);
  }

  deleteList(listId) {
    this.#Lists = this.#Lists.filter((list) => list.id != listId);
  }

  getLists() {
    return this.#Lists;
  }
}

const lists = new Lists();
Object.freeze(lists);
/* harmony default export */ const classes_lists = (lists);

;// CONCATENATED MODULE: ./src/js/classes/task.js
class Task {
  #id;
  #title;
  #description;
  #dueDate;
  #priority;
  #note;
  #complete;
  #subtasks;

  constructor() {
    this.#id = null;
    this.#title = null;
    this.#description = null;
    this.#dueDate = null;
    this.#priority = null;
    this.#note = null;
    this.#complete = false;
    this.#subtasks = [];
  }

  set id(newId) {
    this.#id = newId;
  }

  get id() {
    return this.#id;
  }

  set title(newTitle) {
    this.#title = newTitle;
  }

  get title() {
    return this.#title;
  }

  set description(newDescription) {
    this.#description = newDescription;
  }

  get description() {
    return this.#description;
  }

  set dueDate(newDueDate) {
    this.#dueDate = newDueDate;
  }

  get dueDate() {
    return this.#dueDate;
  }

  set priority(newPriority) {
    this.#priority = newPriority;
  }

  get priority() {
    return this.#priority;
  }

  set note(newNote) {
    this.#note = newNote;
  }

  get note() {
    return this.#note;
  }

  set status(newTaskStatus) {
    this.#complete = newTaskStatus;
  }

  get status() {
    return this.#complete;
  }

  addSubtask(subtask) {
    this.#subtasks.push(subtask);
  }

  deleteSubtask(subtaskId) {
    this.#subtasks = this.#subtasks.filter(
      (subtask) => subtask.id != subtaskId,
    );
  }

  getSubtasks() {
    return this.#subtasks;
  }
}

;// CONCATENATED MODULE: ./node_modules/date-fns/_lib/addLeadingZeros.js
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}

;// CONCATENATED MODULE: ./node_modules/date-fns/constants.js
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;

/**
 * @constant
 * @name constructFromSymbol
 * @summary Symbol enabling Date extensions to inherit properties from the reference date.
 *
 * The symbol is used to enable the `constructFrom` function to construct a date
 * using a reference date and a value. It allows to transfer extra properties
 * from the reference date to the new date. It's useful for extensions like
 * [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as
 * a constructor argument.
 */
const constructFromSymbol = Symbol.for("constructDateFrom");

;// CONCATENATED MODULE: ./node_modules/date-fns/constructFrom.js


/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from "./constructFrom/date-fns";
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date>(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use constructor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   );
 * }
 */
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);

  if (date && typeof date === "object" && constructFromSymbol in date)
    return date[constructFromSymbol](value);

  if (date instanceof Date) return new date.constructor(value);

  return new Date(value);
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_constructFrom = ((/* unused pure expression or super */ null && (constructFrom)));

;// CONCATENATED MODULE: ./node_modules/date-fns/toDate.js


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument, context) {
  // [TODO] Get rid of `toDate` or `constructFrom`?
  return constructFrom(context || argument, argument);
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_toDate = ((/* unused pure expression or super */ null && (toDate)));

;// CONCATENATED MODULE: ./node_modules/date-fns/formatISO.js



/**
 * The {@link formatISO} function options.
 */

/**
 * @name formatISO
 * @category Common Helpers
 * @summary Format the date according to the ISO 8601 standard (https://support.sas.com/documentation/cdl/en/lrdict/64316/HTML/default/viewer.htm#a003169814.htm).
 *
 * @description
 * Return the formatted date string in ISO 8601 format. Options may be passed to control the parts and notations of the date.
 *
 * @param date - The original date
 * @param options - An object with options.
 *
 * @returns The formatted date string (in local time zone)
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18T19:00:52Z'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601, short format (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { format: 'basic' })
 * //=> '20190918T190052'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, date only:
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'date' })
 * //=> '2019-09-18'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, time only (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'time' })
 * //=> '19:00:52Z'
 */
function formatISO(date, options) {
  const date_ = toDate(date, options?.in);

  if (isNaN(+date_)) {
    throw new RangeError("Invalid time value");
  }

  const format = options?.format ?? "extended";
  const representation = options?.representation ?? "complete";

  let result = "";
  let tzOffset = "";

  const dateDelimiter = format === "extended" ? "-" : "";
  const timeDelimiter = format === "extended" ? ":" : "";

  // Representation is either 'date' or 'complete'
  if (representation !== "time") {
    const day = addLeadingZeros(date_.getDate(), 2);
    const month = addLeadingZeros(date_.getMonth() + 1, 2);
    const year = addLeadingZeros(date_.getFullYear(), 4);

    // yyyyMMdd or yyyy-MM-dd.
    result = `${year}${dateDelimiter}${month}${dateDelimiter}${day}`;
  }

  // Representation is either 'time' or 'complete'
  if (representation !== "date") {
    // Add the timezone.
    const offset = date_.getTimezoneOffset();

    if (offset !== 0) {
      const absoluteOffset = Math.abs(offset);
      const hourOffset = addLeadingZeros(Math.trunc(absoluteOffset / 60), 2);
      const minuteOffset = addLeadingZeros(absoluteOffset % 60, 2);
      // If less than 0, the sign is +, because it is ahead of time.
      const sign = offset < 0 ? "+" : "-";

      tzOffset = `${sign}${hourOffset}:${minuteOffset}`;
    } else {
      tzOffset = "Z";
    }

    const hour = addLeadingZeros(date_.getHours(), 2);
    const minute = addLeadingZeros(date_.getMinutes(), 2);
    const second = addLeadingZeros(date_.getSeconds(), 2);

    // If there's also date, separate it with time with 'T'
    const separator = result === "" ? "" : "T";

    // Creates a time string consisting of hour, minute, and second, separated by delimiters, if defined.
    const time = [hour, minute, second].join(timeDelimiter);

    // HHmmss or HH:mm:ss.
    result = `${result}${separator}${time}${tzOffset}`;
  }

  return result;
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_formatISO = ((/* unused pure expression or super */ null && (formatISO)));

;// CONCATENATED MODULE: ./node_modules/date-fns/addDays.js



/**
 * The {@link addDays} function options.
 */

/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 * @param options - An object with options
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(date, amount, options) {
  const _date = toDate(date, options?.in);
  if (isNaN(amount)) return constructFrom(options?.in || date, NaN);

  // If 0 days, no-op to avoid changing times in the hour before end of DST
  if (!amount) return _date;

  _date.setDate(_date.getDate() + amount);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_addDays = ((/* unused pure expression or super */ null && (addDays)));

;// CONCATENATED MODULE: ./node_modules/date-fns/addMonths.js



/**
 * The {@link addMonths} function options.
 */

/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be added.
 * @param options - The options object
 *
 * @returns The new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 *
 * // Add one month to 30 January 2023:
 * const result = addMonths(new Date(2023, 0, 30), 1)
 * //=> Tue Feb 28 2023 00:00:00
 */
function addMonths(date, amount, options) {
  const _date = toDate(date, options?.in);
  if (isNaN(amount)) return constructFrom(options?.in || date, NaN);
  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  const dayOfMonth = _date.getDate();

  // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.
  const endOfDesiredMonth = constructFrom(options?.in || date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    _date.setFullYear(
      endOfDesiredMonth.getFullYear(),
      endOfDesiredMonth.getMonth(),
      dayOfMonth,
    );
    return _date;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_addMonths = ((/* unused pure expression or super */ null && (addMonths)));

;// CONCATENATED MODULE: ./node_modules/date-fns/add.js





/**
 * The {@link add} function options.
 */

/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes, and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes, and seconds to the given date.
 *
 * @typeParam DateType - The `Date` type the function operates on. Gets inferred from passed arguments. Allows using extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param duration - The object with years, months, weeks, days, hours, minutes, and seconds to be added.
 * @param options - An object with options
 *
 * @returns The new date with the seconds added
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */
function add(date, duration, options) {
  const {
    years = 0,
    months = 0,
    weeks = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
  } = duration;

  // Add years and months
  const _date = toDate(date, options?.in);
  const dateWithMonths =
    months || years ? addMonths(_date, months + years * 12) : _date;

  // Add weeks and days
  const dateWithDays =
    days || weeks ? addDays(dateWithMonths, days + weeks * 7) : dateWithMonths;

  // Add days, hours, minutes, and seconds
  const minutesToAdd = minutes + hours * 60;
  const secondsToAdd = seconds + minutesToAdd * 60;
  const msToAdd = secondsToAdd * 1000;

  return constructFrom(options?.in || date, +dateWithDays + msToAdd);
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_add = ((/* unused pure expression or super */ null && (add)));

;// CONCATENATED MODULE: ./node_modules/date-fns/isEqual.js


/**
 * @name isEqual
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The dates are equal
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * const result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0),
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */
function isEqual(leftDate, rightDate) {
  return +toDate(leftDate) === +toDate(rightDate);
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_isEqual = ((/* unused pure expression or super */ null && (isEqual)));

;// CONCATENATED MODULE: ./node_modules/date-fns/_lib/normalizeDates.js


function normalizeDates(context, ...dates) {
  const normalize = constructFrom.bind(
    null,
    context || dates.find((date) => typeof date === "object"),
  );
  return dates.map(normalize);
}

;// CONCATENATED MODULE: ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js


/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const _date = toDate(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}

;// CONCATENATED MODULE: ./node_modules/date-fns/startOfDay.js


/**
 * The {@link startOfDay} function options.
 */

/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_startOfDay = ((/* unused pure expression or super */ null && (startOfDay)));

;// CONCATENATED MODULE: ./node_modules/date-fns/differenceInCalendarDays.js





/**
 * The {@link differenceInCalendarDays} function options.
 */

/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - The options object
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );

  const laterStartOfDay = startOfDay(laterDate_);
  const earlierStartOfDay = startOfDay(earlierDate_);

  const laterTimestamp =
    +laterStartOfDay - getTimezoneOffsetInMilliseconds(laterStartOfDay);
  const earlierTimestamp =
    +earlierStartOfDay - getTimezoneOffsetInMilliseconds(earlierStartOfDay);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a day is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInDay);
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_differenceInCalendarDays = ((/* unused pure expression or super */ null && (differenceInCalendarDays)));

;// CONCATENATED MODULE: ./node_modules/date-fns/differenceInCalendarMonths.js


/**
 * The {@link differenceInCalendarMonths} function options.
 */

/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */
function differenceInCalendarMonths(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );

  const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
  const monthsDiff = laterDate_.getMonth() - earlierDate_.getMonth();

  return yearsDiff * 12 + monthsDiff;
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_differenceInCalendarMonths = ((/* unused pure expression or super */ null && (differenceInCalendarMonths)));

;// CONCATENATED MODULE: ./node_modules/date-fns/getQuarter.js


/**
 * The {@link getQuarter} function options.
 */

/**
 * @name getQuarter
 * @category Quarter Helpers
 * @summary Get the year quarter of the given date.
 *
 * @description
 * Get the year quarter of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The quarter
 *
 * @example
 * // Which quarter is 2 July 2014?
 * const result = getQuarter(new Date(2014, 6, 2));
 * //=> 3
 */
function getQuarter(date, options) {
  const _date = toDate(date, options?.in);
  const quarter = Math.trunc(_date.getMonth() / 3) + 1;
  return quarter;
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_getQuarter = ((/* unused pure expression or super */ null && (getQuarter)));

;// CONCATENATED MODULE: ./node_modules/date-fns/differenceInCalendarQuarters.js



/**
 * The {@link differenceInCalendarQuarters} function options.
 */

/**
 * @name differenceInCalendarQuarters
 * @category Quarter Helpers
 * @summary Get the number of calendar quarters between the given dates.
 *
 * @description
 * Get the number of calendar quarters between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar quarters
 *
 * @example
 * // How many calendar quarters are between 31 December 2013 and 2 July 2014?
 * const result = differenceInCalendarQuarters(
 *   new Date(2014, 6, 2),
 *   new Date(2013, 11, 31)
 * )
 * //=> 3
 */
function differenceInCalendarQuarters(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );

  const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
  const quartersDiff = getQuarter(laterDate_) - getQuarter(earlierDate_);

  return yearsDiff * 4 + quartersDiff;
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_differenceInCalendarQuarters = ((/* unused pure expression or super */ null && (differenceInCalendarQuarters)));

;// CONCATENATED MODULE: ./node_modules/date-fns/_lib/defaultOptions.js
let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

;// CONCATENATED MODULE: ./node_modules/date-fns/startOfWeek.js



/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = getDefaultOptions();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = toDate(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_startOfWeek = ((/* unused pure expression or super */ null && (startOfWeek)));

;// CONCATENATED MODULE: ./node_modules/date-fns/differenceInCalendarWeeks.js





/**
 * The {@link differenceInCalendarWeeks} function options.
 */

/**
 * @name differenceInCalendarWeeks
 * @category Week Helpers
 * @summary Get the number of calendar weeks between the given dates.
 *
 * @description
 * Get the number of calendar weeks between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of calendar weeks
 *
 * @example
 * // How many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 3
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5),
 *   { weekStartsOn: 1 }
 * )
 * //=> 2
 */
function differenceInCalendarWeeks(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );

  const laterStartOfWeek = startOfWeek(laterDate_, options);
  const earlierStartOfWeek = startOfWeek(earlierDate_, options);

  const laterTimestamp =
    +laterStartOfWeek - getTimezoneOffsetInMilliseconds(laterStartOfWeek);
  const earlierTimestamp =
    +earlierStartOfWeek - getTimezoneOffsetInMilliseconds(earlierStartOfWeek);

  return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInWeek);
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_differenceInCalendarWeeks = ((/* unused pure expression or super */ null && (differenceInCalendarWeeks)));

;// CONCATENATED MODULE: ./node_modules/date-fns/differenceInCalendarYears.js


/**
 * The {@link differenceInCalendarYears} function options.
 */

/**
 * @name differenceInCalendarYears
 * @category Year Helpers
 * @summary Get the number of calendar years between the given dates.
 *
 * @description
 * Get the number of calendar years between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options

 * @returns The number of calendar years
 *
 * @example
 * // How many calendar years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInCalendarYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * );
 * //=> 2
 */
function differenceInCalendarYears(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );
  return laterDate_.getFullYear() - earlierDate_.getFullYear();
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_differenceInCalendarYears = ((/* unused pure expression or super */ null && (differenceInCalendarYears)));

;// CONCATENATED MODULE: ./node_modules/date-fns/_lib/getRoundingMethod.js
function getRoundingMethod(method) {
  return (number) => {
    const round = method ? Math[method] : Math.trunc;
    const result = round(number);
    // Prevent negative zero
    return result === 0 ? 0 : result;
  };
}

;// CONCATENATED MODULE: ./node_modules/date-fns/differenceInHours.js




/**
 * The {@link differenceInHours} function options.
 */

/**
 * @name differenceInHours
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of hours
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * const result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */
function differenceInHours(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );
  const diff = (+laterDate_ - +earlierDate_) / millisecondsInHour;
  return getRoundingMethod(options?.roundingMethod)(diff);
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_differenceInHours = ((/* unused pure expression or super */ null && (differenceInHours)));

;// CONCATENATED MODULE: ./node_modules/date-fns/differenceInMilliseconds.js


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 *
 * @returns The number of milliseconds
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */
function differenceInMilliseconds(laterDate, earlierDate) {
  return +toDate(laterDate) - +toDate(earlierDate);
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_differenceInMilliseconds = ((/* unused pure expression or super */ null && (differenceInMilliseconds)));

;// CONCATENATED MODULE: ./node_modules/date-fns/differenceInMinutes.js




/**
 * The {@link differenceInMinutes} function options.
 */

/**
 * @name differenceInMinutes
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the signed number of full (rounded towards 0) minutes between the given dates.
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of minutes
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * const result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 *
 * @example
 * // How many minutes are between 10:01:59 and 10:00:00
 * const result = differenceInMinutes(
 *   new Date(2000, 0, 1, 10, 0, 0),
 *   new Date(2000, 0, 1, 10, 1, 59)
 * )
 * //=> -1
 */
function differenceInMinutes(dateLeft, dateRight, options) {
  const diff =
    differenceInMilliseconds(dateLeft, dateRight) / millisecondsInMinute;
  return getRoundingMethod(options?.roundingMethod)(diff);
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_differenceInMinutes = ((/* unused pure expression or super */ null && (differenceInMinutes)));

;// CONCATENATED MODULE: ./node_modules/date-fns/differenceInSeconds.js



/**
 * The {@link differenceInSeconds} function options.
 */

/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of seconds
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */
function differenceInSeconds(laterDate, earlierDate, options) {
  const diff = differenceInMilliseconds(laterDate, earlierDate) / 1000;
  return getRoundingMethod(options?.roundingMethod)(diff);
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_differenceInSeconds = ((/* unused pure expression or super */ null && (differenceInSeconds)));

;// CONCATENATED MODULE: ./node_modules/date-fns/intlFormatDistance.js











/**
 * The {@link intlFormatDistance} function options.
 */

/**
 * The unit used to format the distance in {@link intlFormatDistance}.
 */

/**
 * @name intlFormatDistance
 * @category Common Helpers
 * @summary Formats distance between two dates in a human-readable format
 * @description
 * The function calculates the difference between two dates and formats it as a human-readable string.
 *
 * The function will pick the most appropriate unit depending on the distance between dates. For example, if the distance is a few hours, it might return `x hours`. If the distance is a few months, it might return `x months`.
 *
 * You can also specify a unit to force using it regardless of the distance to get a result like `123456 hours`.
 *
 * See the table below for the unit picking logic:
 *
 * | Distance between dates | Result (past)  | Result (future) |
 * | ---------------------- | -------------- | --------------- |
 * | 0 seconds              | now            | now             |
 * | 1-59 seconds           | X seconds ago  | in X seconds    |
 * | 1-59 minutes           | X minutes ago  | in X minutes    |
 * | 1-23 hours             | X hours ago    | in X hours      |
 * | 1 day                  | yesterday      | tomorrow        |
 * | 2-6 days               | X days ago     | in X days       |
 * | 7 days                 | last week      | next week       |
 * | 8 days-1 month         | X weeks ago    | in X weeks      |
 * | 1 month                | last month     | next month      |
 * | 2-3 months             | X months ago   | in X months     |
 * | 1 quarter              | last quarter   | next quarter    |
 * | 2-3 quarters           | X quarters ago | in X quarters   |
 * | 1 year                 | last year      | next year       |
 * | 2+ years               | X years ago    | in X years      |
 *
 * @param laterDate - The date
 * @param earlierDate - The date to compare with.
 * @param options - An object with options.
 * See MDN for details [Locale identification and negotiation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation)
 * The narrow one could be similar to the short one for some locales.
 *
 * @returns The distance in words according to language-sensitive relative time formatting.
 *
 * @throws `date` must not be Invalid Date
 * @throws `baseDate` must not be Invalid Date
 * @throws `options.unit` must not be invalid Unit
 * @throws `options.locale` must not be invalid locale
 * @throws `options.localeMatcher` must not be invalid localeMatcher
 * @throws `options.numeric` must not be invalid numeric
 * @throws `options.style` must not be invalid style
 *
 * @example
 * // What is the distance between the dates when the fist date is after the second?
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0)
 * )
 * //=> 'in 1 hour'
 *
 * // What is the distance between the dates when the fist date is before the second?
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0)
 * )
 * //=> '1 hour ago'
 *
 * @example
 * // Use the unit option to force the function to output the result in quarters. Without setting it, the example would return "next year"
 * intlFormatDistance(
 *   new Date(1987, 6, 4, 10, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   { unit: 'quarter' }
 * )
 * //=> 'in 5 quarters'
 *
 * @example
 * // Use the locale option to get the result in Spanish. Without setting it, the example would return "in 1 hour".
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   { locale: 'es' }
 * )
 * //=> 'dentro de 1 hora'
 *
 * @example
 * // Use the numeric option to force the function to use numeric values. Without setting it, the example would return "tomorrow".
 * intlFormatDistance(
 *   new Date(1986, 3, 5, 11, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   { numeric: 'always' }
 * )
 * //=> 'in 1 day'
 *
 * @example
 * // Use the style option to force the function to use short values. Without setting it, the example would return "in 2 years".
 * intlFormatDistance(
 *   new Date(1988, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   { style: 'short' }
 * )
 * //=> 'in 2 yr'
 */
function intlFormatDistance(laterDate, earlierDate, options) {
  let value = 0;
  let unit;

  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );

  if (!options?.unit) {
    // Get the unit based on diffInSeconds calculations if no unit is specified
    const diffInSeconds = differenceInSeconds(laterDate_, earlierDate_); // The smallest unit

    if (Math.abs(diffInSeconds) < secondsInMinute) {
      value = differenceInSeconds(laterDate_, earlierDate_);
      unit = "second";
    } else if (Math.abs(diffInSeconds) < secondsInHour) {
      value = differenceInMinutes(laterDate_, earlierDate_);
      unit = "minute";
    } else if (
      Math.abs(diffInSeconds) < secondsInDay &&
      Math.abs(differenceInCalendarDays(laterDate_, earlierDate_)) < 1
    ) {
      value = differenceInHours(laterDate_, earlierDate_);
      unit = "hour";
    } else if (
      Math.abs(diffInSeconds) < secondsInWeek &&
      (value = differenceInCalendarDays(laterDate_, earlierDate_)) &&
      Math.abs(value) < 7
    ) {
      unit = "day";
    } else if (Math.abs(diffInSeconds) < secondsInMonth) {
      value = differenceInCalendarWeeks(laterDate_, earlierDate_);
      unit = "week";
    } else if (Math.abs(diffInSeconds) < secondsInQuarter) {
      value = differenceInCalendarMonths(laterDate_, earlierDate_);
      unit = "month";
    } else if (Math.abs(diffInSeconds) < secondsInYear) {
      if (differenceInCalendarQuarters(laterDate_, earlierDate_) < 4) {
        // To filter out cases that are less than a year but match 4 quarters
        value = differenceInCalendarQuarters(laterDate_, earlierDate_);
        unit = "quarter";
      } else {
        value = differenceInCalendarYears(laterDate_, earlierDate_);
        unit = "year";
      }
    } else {
      value = differenceInCalendarYears(laterDate_, earlierDate_);
      unit = "year";
    }
  } else {
    // Get the value if unit is specified
    unit = options?.unit;
    if (unit === "second") {
      value = differenceInSeconds(laterDate_, earlierDate_);
    } else if (unit === "minute") {
      value = differenceInMinutes(laterDate_, earlierDate_);
    } else if (unit === "hour") {
      value = differenceInHours(laterDate_, earlierDate_);
    } else if (unit === "day") {
      value = differenceInCalendarDays(laterDate_, earlierDate_);
    } else if (unit === "week") {
      value = differenceInCalendarWeeks(laterDate_, earlierDate_);
    } else if (unit === "month") {
      value = differenceInCalendarMonths(laterDate_, earlierDate_);
    } else if (unit === "quarter") {
      value = differenceInCalendarQuarters(laterDate_, earlierDate_);
    } else if (unit === "year") {
      value = differenceInCalendarYears(laterDate_, earlierDate_);
    }
  }

  const rtf = new Intl.RelativeTimeFormat(options?.locale, {
    numeric: "auto",
    ...options,
  });

  return rtf.format(value, unit);
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_intlFormatDistance = ((/* unused pure expression or super */ null && (intlFormatDistance)));

;// CONCATENATED MODULE: ./src/js/createTaskEl.js



function createTaskElements(task) {
  const taskContainer = document.createElement("div");
  taskContainer.dataset.taskId = task.id;

  const para = document.createElement("p");
  para.dataset.taskPriority = task.priority;
  if (task.status) para.classList.add("completed");

  const label = document.createElement("label");
  label.htmlFor = task.id;

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = task.id;
  input.checked = task.status;

  const title = document.createElement("span");
  title.textContent = task.title;
  title.dataset.taskTitle = "";

  const dueDate = document.createElement("span");
  dueDate.classList.add("dueDate");

  // task.dueDate === today
  dueDate.textContent = isEqual(
    new Date().toISOString().slice(0, 10),
    task.dueDate,
  )
    ? "today"
    : intlFormatDistance(task.dueDate, new Date());
  //distance between task.dueDate and today

  const tagImg = document.createElement("img");
  tagImg.classList.add("tagImg");
  tagImg.src = tag_namespaceObject;
  tagImg.alt = task.priority;

  const dropdownDiv = document.createElement("div");
  dropdownDiv.classList.add("dropdownMore");

  const moreBtn = document.createElement("button");
  moreBtn.classList.add("moreBtn");

  const moreImg = document.createElement("img");
  moreImg.src = more_namespaceObject;
  moreImg.alt = "more";

  const moreButtons = createDropdownButtons();

  label.append(input, title);
  para.append(label, dueDate, tagImg);
  moreBtn.appendChild(moreImg);
  dropdownDiv.append(moreBtn, moreButtons);
  taskContainer.append(para, dropdownDiv);
  toDoList.appendChild(taskContainer);
}

function createDropdownButtons() {
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("btnContainer");

  const openBtn = document.createElement("button");
  openBtn.classList.add("openBtn");

  const openImg = document.createElement("img");
  openImg.src = open_namespaceObject;
  openImg.alt = "open";

  const addBtn = document.createElement("button");
  addBtn.classList.add("addBtn");

  const addImg = document.createElement("img");
  addImg.src = add_namespaceObject;
  addImg.alt = "add";

  const editBtn = document.createElement("button");
  editBtn.classList.add("editBtn");

  const editImg = document.createElement("img");
  editImg.src = edit_namespaceObject;
  editImg.alt = "edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");

  const deleteImg = document.createElement("img");
  deleteImg.src = delete_namespaceObject;
  deleteImg.alt = "delete";

  openBtn.appendChild(openImg);
  addBtn.appendChild(addImg);
  editBtn.appendChild(editImg);
  deleteBtn.appendChild(deleteImg);
  containerDiv.append(openBtn, addBtn, editBtn, deleteBtn);

  return containerDiv;
}

;// CONCATENATED MODULE: ./src/js/taskStatus.js



function updateTaskStatus(listId, taskId, target) {
  const list = classes_lists.getLists().find((list) => list.id == listId);
  const task = list.getList().find((task) => task.id == taskId);

  if (task == null) return;

  task.status = target.checked;

  saveToLocalStorage();

  target.checked
    ? target.closest("p").classList.add("completed")
    : target.closest("p").classList.remove("completed");
}

;// CONCATENATED MODULE: ./src/js/deleteTask.js




function deleteTask(listId, taskId) {
  const list = classes_lists.getLists().find((list) => list.id == listId);
  list.deleteTask(taskId);

  refreshToDoList();
  saveToLocalStorage();
}

;// CONCATENATED MODULE: ./src/js/editTask.js






function showEditTaskDialog(listId, taskId) {
  setTaskInputValues(listId, taskId);
  addEventListenerToEditTaskForm();
  setEditTaskDueDateInputAttributes();

  editTaskDialog.dataset.taskId = taskId;

  editTaskDialog.showModal();
}

function setTaskInputValues(listId, taskId) {
  const list = classes_lists.getLists().find((list) => list.id == listId);
  const task = list.getList().find((task) => task.id == taskId);

  if (task == null) return;

  editTaskTitleInput.value = task.title;
  editTaskDescInput.value = task.description;
  editTaskDueDateInput.value = task.dueDate;
  editTaskPriority.value = task.priority;
  editTaskNoteInput.value = task.note;
}

function addEventListenerToEditTaskForm() {
  editTaskForm.addEventListener("submit", updateTaskDetails);

  editTaskForm.addEventListener("click", (e) => {
    if (e.target.matches(".cancelBtn")) {
      editTaskDialog.close();
    }
  });
}

function updateTaskDetails(e) {
  e.preventDefault();

  const listId = selectedList.dataset.selectedListId;
  const taskId = editTaskDialog.dataset.taskId;

  const list = classes_lists.getLists().find((list) => list.id == listId);
  const task = list.getList().find((task) => task.id == taskId);

  const titleValue = editTaskTitleInput.value.trim();
  if (!titleValue.length) return;

  task.title = titleValue;
  task.description = editTaskDescInput.value.trim();
  task.dueDate = editTaskDueDateInput.value.trim();
  task.priority = editTaskPriority.value.trim();
  task.note = editTaskNoteInput.value.trim();

  refreshToDoList();
  editTaskDialog.close();
  saveToLocalStorage();
}

function setEditTaskDueDateInputAttributes() {
  const now = new Date();

  editTaskDueDateInput.min = now.toISOString().slice(0, 10);
  editTaskDueDateInput.max = formatISO(add(now, { years: 10 }), {
    representation: "date", // 10 years from today in ISO format
  });
}

;// CONCATENATED MODULE: ./node_modules/date-fns/isPast.js


/**
 * @name isPast
 * @category Common Helpers
 * @summary Is the given date in the past?
 * @pure false
 *
 * @description
 * Is the given date in the past?
 *
 * @param date - The date to check
 *
 * @returns The date is in the past
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * const result = isPast(new Date(2014, 6, 2))
 * //=> true
 */
function isPast(date) {
  return +toDate(date) < Date.now();
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_isPast = ((/* unused pure expression or super */ null && (isPast)));

;// CONCATENATED MODULE: ./src/js/createSubtaskEl.js


function createSubtaskElements(subtask) {
  const listItem = document.createElement("li");

  const label = document.createElement("label");
  label.htmlFor = subtask.id;

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = subtask.id;

  const span = document.createElement("span");
  span.textContent = subtask.name;

  label.append(input, span);
  listItem.appendChild(label);
  subtasks.appendChild(listItem);
}

;// CONCATENATED MODULE: ./src/js/viewTask.js






function showViewTaskDetailsDialog(listId, taskId) {
  setViewTaskTextContent(listId, taskId);
  addEventListenerToViewTaskDialog();
  addEventListenerToSubtasksList();
  viewTaskDialog.showModal();
}

function setViewTaskTextContent(listId, taskId) {
  const list = classes_lists.getLists().find((list) => list.id == listId);
  const task = list.getList().find((task) => task.id == taskId);

  if (task == null) return;

  viewTaskTitle.textContent = task.title;
  viewTaskDesc.textContent = task.description;
  viewTaskPriority.textContent = `Task priority is ${task.priority}`;
  viewTaskNote.textContent = task.note;
  viewTaskStatus.textContent = task.status
    ? "The task is completed"
    : "The task is incomplete";

  // today === dueDate
  const equalToDueDate = isEqual(
    new Date().toISOString().slice(0, 10),
    task.dueDate,
  );
  // dueDate <= today
  viewTaskDueDate.textContent =
    isPast(task.dueDate) && !equalToDueDate
      ? "Task is overdue"
      : `The task is due ${
          equalToDueDate
            ? "today"
            : intlFormatDistance(task.dueDate, new Date())
        }`;

  subtasks.dataset.taskId = task.id;
  refreshSubtaskList();
}

function addEventListenerToViewTaskDialog() {
  viewTaskDialog.addEventListener("click", (e) => {
    if (e.target.matches(".closeBtn")) {
      viewTaskDialog.close();
    }
  });
}

function addEventListenerToSubtasksList() {
  subtasks.addEventListener("change", (e) => {
    if (e.target.matches("input[type=checkbox]")) {
      deleteSubtask(e.target.id);
    }
  });
}

function deleteSubtask(subtaskId) {
  const listId = selectedList.dataset.selectedListId;
  const taskId = subtasks.dataset.taskId;

  const list = classes_lists.getLists().find((list) => list.id == listId);
  const task = list.getList().find((task) => task.id == taskId);
  task.deleteSubtask(subtaskId);

  refreshSubtaskList();
  saveToLocalStorage();
}

function clearSubtasksList() {
  removeElements(subtasks);
}

function renderSubtasks() {
  const listId = selectedList.dataset.selectedListId;
  const taskId = subtasks.dataset.taskId;

  const list = classes_lists.getLists().find((list) => list.id == listId);
  const task = list.getList().find((task) => task.id == taskId);
  task.getSubtasks().forEach((subtask) => createSubtaskElements(subtask));
}

function refreshSubtaskList() {
  clearSubtasksList();
  renderSubtasks();
}

;// CONCATENATED MODULE: ./src/js/classes/subtask.js
class Subtask {
  #id;
  #name;

  constructor() {
    this.#id = null;
    this.#name = null;
  }

  get id() {
    return this.#id;
  }

  set id(newId) {
    this.#id = newId;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }
}

;// CONCATENATED MODULE: ./src/js/addSubtask.js






function showAddSubtasksDialog(taskId) {
  addEventListenerToSubtaskForm();
  subtaskDialog.dataset.taskId = taskId;
  subtaskDialog.showModal();
}

function addEventListenerToSubtaskForm() {
  addSubtaskForm.addEventListener("submit", getUserInput);

  addSubtaskForm.addEventListener("click", (e) => {
    if (e.target.matches(".closeBtn")) {
      subtaskDialog.close();
    }
  });
}

function getUserInput(e) {
  e.preventDefault();

  const subtaskName = subtaskInput.value.trim();
  if (!subtaskName.length) return;

  addSubtask(null, subtaskName);
}

function addSubtask(subtaskId = null, subtaskName) {
  if (subtaskId === null) {
    subtaskId = generateNewId();
  }

  const listId = selectedList.dataset.selectedListId;
  const taskId = subtaskDialog.dataset.taskId;

  const list = classes_lists.getLists().find((list) => list.id == listId);
  const task = list.getList().find((task) => task.id == taskId);

  const newSubtask = new Subtask();
  newSubtask.id = subtaskId;
  newSubtask.name = subtaskName;

  task.addSubtask(newSubtask);

  subtaskInput.value = "";
  saveToLocalStorage();
  subtaskInput.focus();
  refreshToDoList();
}

;// CONCATENATED MODULE: ./src/js/taskList.js










function selectList(toDoListId, targetElement) {
  myLists.querySelectorAll("p").forEach((para) => {
    para.classList.remove("selected");
  });
  targetElement.classList.add("selected");

  selectedList.dataset.selectedListId = toDoListId;
  addTaskButton.addEventListener("click", showAddTaskDialog);
  addEventListenerToToDoList();
  resetSelectedList();
  refreshToDoList();
}

function resetSelectedList() {
  addTaskButton.disabled = true;
  selectedList.textContent = "Please select a list";
  clearToDoList();

  myLists.querySelectorAll("p").forEach((para) => {
    if (para.classList.contains("selected")) {
      const toDoListId = selectedList.dataset.selectedListId;

      addTaskButton.disabled = false;

      const list = classes_lists.getLists().find((list) => list.id == toDoListId);
      selectedList.textContent = list.name;
    }
  });
}

function renderTasks() {
  const toDoListId = selectedList.dataset.selectedListId;

  const list = classes_lists.getLists().find((list) => list.id == toDoListId);
  list.getList().forEach((task) => createTaskElements(task));
}

function clearToDoList() {
  removeElements(toDoList);
}

function refreshToDoList() {
  clearToDoList();
  renderTasks();
}

function addEventListenerToToDoList() {
  const listId = selectedList.dataset.selectedListId;

  toDoList.addEventListener("change", (e) => {
    if (e.target.matches("input[type=checkbox]")) {
      updateTaskStatus(listId, e.target.id, e.target);
    }
  });

  toDoList.addEventListener("click", (e) => {
    const target = e.target;

    const task = target.closest("div[data-task-id]");

    if (task == null) return;

    const taskId = task.dataset.taskId;

    if (target.matches(".moreBtn")) {
      showButtons(target);
    }

    if (target.matches(".openBtn")) {
      showViewTaskDetailsDialog(listId, taskId);
    }

    if (target.matches(".addBtn")) {
      showAddSubtasksDialog(taskId);
    }

    if (target.matches(".editBtn")) {
      showEditTaskDialog(listId, taskId);
    }

    if (target.matches(".deleteBtn")) {
      deleteTask(listId, taskId);
    }
  });
}

function showButtons(target) {
  const sibling = target.nextElementSibling;

  sibling.classList.toggle("show");
  target.addEventListener("focusout", () => {
    setTimeout(() => {
      sibling.classList.remove("show");
    }, 250); //0.25 seconds
  });
}

;// CONCATENATED MODULE: ./src/js/addTask.js







function showAddTaskDialog() {
  addTaskForm.addEventListener("submit", addTask_getUserInput);

  addTaskForm.addEventListener("click", (e) => {
    if (e.target.matches(".closeBtn")) {
      addTaskDialog.close();
    }
  });

  resetInputValues();
  addTaskDialog.showModal();
}

function addTask_getUserInput(e) {
  e.preventDefault();

  const taskTitle = taskTitleInput.value.trim();
  const taskDescription = taskDescInput.value.trim();
  const taskDueDate = taskDueDateInput.value.trim();
  const taskPriority = taskPrioritySelect.value.trim();
  const taskNote = taskNoteInput.value.trim();

  if (!taskTitle.length) return;

  addNewTask(
    null,
    taskTitle,
    taskDescription,
    taskDueDate,
    taskPriority,
    taskNote,
  );
}

function addNewTask(
  id = null,
  title,
  description,
  dueDate,
  priority,
  note ,
  status = false,
) {
  if (id === null) {
    id = generateNewId();
  }

  const newTask = new Task();
  newTask.id = id;
  newTask.title = title;
  newTask.description = description;
  newTask.dueDate = dueDate;
  newTask.priority = priority;
  newTask.note = note;
  newTask.status = status;

  const selectedListId = selectedList.dataset.selectedListId;

  const list = classes_lists.getLists().find((list) => list.id == selectedListId);
  list.addTask(newTask);

  refreshToDoList();
  resetInputValues();
  saveToLocalStorage();
  taskTitleInput.focus();
}

function SetDueDateInputAttributes() {
  const now = new Date();
  const today = now.toISOString().slice(0, 10);

  taskDueDateInput.value = today;
  taskDueDateInput.min = today;
  taskDueDateInput.max = formatISO(add(now, { years: 10 }), {
    representation: "date", // 10 years from now in ISO format
  });
}

function resetInputValues() {
  taskTitleInput.value = "";
  taskDescInput.value = "";
  taskPrioritySelect.selectedIndex = 0;
  taskNoteInput.value = "";
  SetDueDateInputAttributes();
}

;// CONCATENATED MODULE: ./src/js/storeData.js







function saveToLocalStorage() {
  const data = classes_lists.getLists().map((list) => ({
    id: list.id,
    name: list.name,
    toDoList: list.getList().map((task) => ({
      id: task.id,
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
      priority: task.priority,
      note: task.note,
      complete: task.status,
      subtasks: task.getSubtasks().map((subtask) => ({
        id: subtask.id,
        name: subtask.name,
      })),
    })),
  }));

  localStorage.setItem("t0D0_L1st", JSON.stringify(data));
}

function loadDataFromLocalStorage() {
  const storedData = localStorage.getItem("t0D0_L1st");

  if (!storedData.length) return;

  JSON.parse(storedData).forEach((list) => {
    addToDoList(list.id, list.name);

    selectedList.dataset.selectedListId = list.id;

    list.toDoList.forEach((task) => {
      addNewTask(
        task.id,
        task.title,
        task.description,
        task.dueDate,
        task.priority,
        task.note,
        task.complete,
      );

      subtaskDialog.dataset.taskId = task.id;

      task.subtasks.forEach((subtask) => {
        addSubtask(subtask.id, subtask.name);
      });
    });
  });
}

;// CONCATENATED MODULE: ./src/js/deleteList.js





function deleteList(toDoListId) {
  renderDeleteListTitle(toDoListId);

  deleteListDialog.addEventListener("click", (e) => {
    const target = e.target;

    if (target.matches(".yesBtn")) {
      classes_lists.deleteList(toDoListId);

      deleteListDialog.close();
      refreshList();
      saveToLocalStorage();
    }

    if (target.matches(".noBtn")) deleteListDialog.close();
  });

  deleteListDialog.showModal();
}

function renderDeleteListTitle(toDoListId) {
  const list = classes_lists.getLists().find((list) => list.id == toDoListId);
  deleteListTitle.textContent = list.name;
}

;// CONCATENATED MODULE: ./src/js/renameList.js





/* harmony default export */ const renameList = ((toDoListId) => {
  renameListForm.addEventListener("submit", updateListName);
  renameListForm.addEventListener("click", cancel);

  renameListDialog.dataset.renameListId = toDoListId;
  setRenameListInputValue(toDoListId);
  renameListDialog.showModal();
});

function setRenameListInputValue(toDoListId) {
  const list = classes_lists.getLists().find((list) => list.id == toDoListId);
  renameListInput.value = list.name;
}

function updateListName(e) {
  e.preventDefault();
  const toDoListId = renameListDialog.dataset.renameListId;
  const userInput = renameListInput.value.trim();
  if (!userInput.length) return;

  const list = classes_lists.getLists().find((list) => list.id == toDoListId);
  if (list == null) return;

  list.name = userInput;

  refreshList();
  renameListDialog.close();
  saveToLocalStorage();
  renameListDialog.dataset.renameListId = "";
}

function cancel(e) {
  if (e.target.matches(".cancelBtn")) {
    renameListDialog.close();
    renameListDialog.dataset.renameListId = "";
  }
}

;// CONCATENATED MODULE: ./src/js/classes/toDoList.js
class ToDoList {
  #id;
  #name;
  #list;

  constructor() {
    this.#id = null;
    this.#name = null;
    this.#list = [];
  }

  get id() {
    return this.#id;
  }

  set id(newId) {
    this.#id = newId;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }

  addTask(newTask) {
    this.#list.push(newTask);
  }

  deleteTask(taskId) {
    this.#list = this.#list.filter((task) => task.id != taskId);
  }

  getList() {
    return this.#list;
  }
}

;// CONCATENATED MODULE: ./src/js/myLists.js









function init() {
  toDoListForm.addEventListener("submit", myLists_getUserInput);
  addEventListenerToList();
  refreshList();
}

function renderLists() {
  classes_lists.getLists().forEach((list) => createListElements(list));
}

function clearList() {
  removeElements(myLists);
}

function refreshList() {
  clearList();
  renderLists();
  resetSelectedList();
}

function myLists_getUserInput(e) {
  e.preventDefault();
  const listName = listNameInput.value.trim();
  if (!listName.length) return;
  addToDoList(null, listName);
}

function addToDoList(listId = null, listName) {
  if (listId === null) {
    listId = generateNewId();
  }

  const toDoList = new ToDoList();
  toDoList.id = listId;
  toDoList.name = listName;
  classes_lists.addList(toDoList);

  listNameInput.value = "";
  refreshList();
  saveToLocalStorage();
}

function addEventListenerToList() {
  myLists.addEventListener("click", (e) => {
    const target = e.target;
    const listId = target.parentElement.dataset.listId;

    if (target.matches(".editBtn")) {
      renameList(listId);
    }

    if (target.matches(".deleteBtn")) {
      deleteList(listId);
    }

    if (target.matches(".listName")) {
      selectList(listId, target);
    }
  });
}

;// CONCATENATED MODULE: ./src/js/defaultToDo.js
function setDefaultList() {
  const data = [
    {
      id: "1727647217425",
      name: "List x021",
      toDoList: [
        {
          id: "1727649061918",
          title: "make this look nice",
          description:
            "wow, this description looks great! It could use a few more words, though!",
          dueDate: "2025-12-31",
          priority: "important",
          note: "remove subtasks",
          complete: false,
          subtasks: [
            { id: "1727650392683", name: "stay cool" },
            { id: "1727650437619", name: "just delete this" },
          ],
        },
        {
          id: "1727649370829",
          title: "remember to breathe",
          description: "just breathe  it's really not that hard",
          dueDate: "2024-10-01",
          priority: "normal",
          note: "",
          complete: true,
          subtasks: [],
        },
      ],
    },
  ];

  const storeData = localStorage.getItem("t0D0_L1st");

  if (storeData == null) {
    localStorage.setItem("t0D0_L1st", JSON.stringify(data));
  }
}

;// CONCATENATED MODULE: ./src/js/index.js





setDefaultList();
loadDataFromLocalStorage();
init();

/******/ })()
;
//# sourceMappingURL=main.js.map