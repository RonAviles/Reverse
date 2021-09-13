//get string from the page input
//controller function
function getValue(){
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let reversed = reverseString(userString);
    displayString(reversed);
}
//split the string into an array of sub strings by using the .split("") method
// reverse the array using the .reverse() method
//logic function
function reverseString(str){
 let arr = [];
 arr = str.split("");
 let reversed = arr.reverse();
 let revString = reversed.join("");
 return revString;
}
// join the new array using the .join("") method to form the new reveresed string 
// access the <p> element and inject the new reversed string 
//remove the invisible class from the <p> element to make it visible with the newly injected string
//view function 
function displayString(str){
    document.getElementById("msg").innerHTML = `Your string reversed is: ${str}`;
    document.getElementById("alert").classList.remove("invisible");
}
