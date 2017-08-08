function myFunction() {
    var getInput = document.getElementById('inputField').value;
    if(getInput!= '') {
    
    var listTag = document.createElement('LI');
    var tagText = document.createTextNode(getInput);
   listTag.appendChild(tagText);
    
//   var divTag = document.createElement("span");
// var i;

//   imgTag.src = "images/closebtn.png";
document.getElementById('inputField').value ='';

//   imgTag.appendChild(imgTag);
//   var tagText = document.createTextNode(getInput);
var DOM_img = document.createElement("img");

DOM_img.src = "images/close.png";
DOM_img.style.height = "25px";
DOM_img.style.width = "25px";
DOM_img.style.float="right";
// DOM_img.className = "image";

// listTag.appendChild(DOM_img);
//  document.getElementById('list').appendChild(listTag);
DOM_img .addEventListener("click",function() {
    // console.log('eehhh');
        listTag.parentNode.removeChild(listTag);});
        // divTag.appendChild(DOM_img);
        listTag.appendChild(DOM_img);
 document.getElementById('list').appendChild(listTag);



    
//    listTag.appendChild(divTag);



    //  newTag.appendChild(txt);


  
   

// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("IMG");
//   var txt = document.createTextNode(src="images/closebtn.png");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

    
}else alert("Please enter someting !!");
}


function removeAll(){
    // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");;
// var i;
// console.log(close);
// for (i = 0; i < close.length; i++) {
// //   close[i].onclick = function() {
//     var div = this.parentElement;
//     // var div = this.parentElement;
//     div.style.display = "none";
//   }
  

 document.getElementById("list").innerHTML = '';
}



// function remove(){

//     console.log("hello")
//  var close = document.getElementsByTagName("span");
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//      var div = this.parentElement;
//     div.style.display = "none";
 
// }
// }
// }


function focus1(){
    
    
  
var input = document.getElementById('inputField');
input.style.color = "black";
input.style.background= "yellow";
input.style.border= "2px solid #202023";
 

}
function blur1(){
       
var input = document.getElementById('inputField');
input.style.color = "black";
input.style.background= "white";
input.style.border= "2px solid #b3b3bc";

}

 