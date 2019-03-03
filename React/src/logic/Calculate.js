import React from "react";
import operations from "./operations";
import numbers from "./Numbers";

// export default function Calculate(obj, btnClick) {
//   if (btnClick === "AC") {
//     return { total: null, next: null, operator: null };
//   }
//   if (numbers(btnClick)) {
//     if (btnClick === "0" && obj.next === "0") {
//       return {};
//     }

//     if (obj.operator) {
//       if (obj.next) {
//         return { next: obj.next + btnClick };
//       }
//       return { next: btnClick };
//     }

//     if (obj.next) {
//       return {
//         next: obj.next + btnClick,
//         total: null
//       };
//     }
//     return {
//       next: btnClick,
//       total: null
//     };
//   }

//   if (btnClick === "%") {
//     if (obj.operator && obj.next) {
//       const result = operations(obj.total, obj.next, obj.operator);
//       return {
//         total: Big(result)
//           .div(Big("100"))
//           .toString(),
//         next: null,
//         operator: null
//       };
//     }
//     if (obj.next) {
//       return {
//         next: Big(obj.next)
//           .div(Big("100"))
//           .toString()
//       };
//     }
//     return {};
//   }

//   if (btnClick === ".") {
//     if (obj.next) {
//       if (obj.next.includes(".")) {
//         return {};
//       }
//       return { next: obj.next + "." };
//     }
//     return { next: "0." };
//   }

//   if (btnClick === "=") {
//     if (obj.next && obj.operator) {
//       return {
//         total: operations(obj.total, obj.next, obj.operator),
//         next: null,
//         operator: null
//       };
//     } else {
//       return {};
//     }
//   }

//   if (btnClick === "+/-") {
//     if (obj.next) {
//       return { next: (-1 * parseFloat(obj.next)).toString() };
//     }
//     if (obj.total) {
//       return { total: (-1 * parseFloat(obj.total)).toString() };
//     }
//     return {};
//   }

//   if (obj.operator) {
//     return {
//       total: operations(obj.total, obj.next, obj.operator),
//       next: null,
//       operator: btnClick
//     };
//   }

//   if (!obj.next) {
//     return { operator: btnClick };
//   }

//   return {
//     total: obj.next,
//     next: null,
//     operator: btnClick
//   };
// }


