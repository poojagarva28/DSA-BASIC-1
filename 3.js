let str1 = "AACB";
let str2 = "ACBA";

if (str1.length != str2.length) {
  console.log("not rotation");
} else {
  if ((str1 + str1).includes(str2)) {
    console.log("roatation");
  } else {
    console.log("not rotation");
  }
}
