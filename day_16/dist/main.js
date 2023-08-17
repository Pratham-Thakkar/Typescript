// "use strict";
console.log("Hello world");

// function normal() {
//   const user = {
//     name: "Pratham",
//     hobby: () => {
//       console.log(this);
//       //   console.log(...arguments);
//     },
//     //   hobby2: function () {
//     //     console.log(this);
//     //     console.log(...arguments);
//     //   },
//   };
//   user.hobby();
// }

// user.hobby2(1, 2, 3, 4);
// user.hobby(1, 2, 3, 4);

// normal();

// const user = {
//   name: "Pratham",
//   hobby: () => {
//     console.log(this.name);
//     //   console.log(...arguments);
//   },
// };

// user.hobby.call(user);
// user.hobby.apply(user);
// user.hobby.bind(user);

let a = 10;
function simpleInvocation() {
  console.log(this);
}
simpleInvocation();

// Method Invocation
const methodInvocation = {
  a: 10,
  method() {
    console.log(this);
  },
};
methodInvocation.method();

// Indirect Invocation
const context = { value1: "A", value2: "B" };
function indirectInvocation() {
  console.log(arguments);
  console.log(this);
}
indirectInvocation.call(context, 10, 20);
indirectInvocation.apply(context, [10, 20]);
const result = indirectInvocation.bind(context);
result();
