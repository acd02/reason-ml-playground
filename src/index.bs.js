// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE

import * as $$String from "bs-platform/lib/es6/string.js";
import * as Belt_List from "bs-platform/lib/es6/belt_List.js";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

var items = /* :: */[
  /* record */[
    /* name */"one",
    /* id */1
  ],
  /* :: */[
    /* record */[
      /* name */"two",
      /* id */2
    ],
    /* [] */0
  ]
];

var __x = Belt_List.getBy(items, (function (i) {
        return i[/* name */0] === "two";
      }));

var __x$1 = Belt_Option.map(__x, (function (value) {
        return $$String.uppercase(value[/* name */0]);
      }));

console.log(Belt_Option.getWithDefault(__x$1, "not found"));

var match = Belt_List.getBy(items, (function (i) {
        return i[/* name */0] === "two";
      }));

console.log(match !== undefined ? $$String.uppercase(match[/* name */0]) : "oops");

var app = document.querySelector("#app");

function handleClick(evt) {
  console.log(evt);
  return /* () */0;
}

if (!(app == null)) {
  app.addEventListener("click", handleClick);
  app.innerHTML = "cool";
}

var mapping = /* () */0;

var pmatching = /* () */0;

var app$1 = (app == null) ? undefined : Caml_option.some(app);

export {
  items ,
  mapping ,
  pmatching ,
  app$1 as app,
  handleClick ,
  
}
/*  Not a pure module */
