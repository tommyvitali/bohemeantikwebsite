/* 


var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var close = document.getElementById("closeBtn");
var close1 = document.getElementById("closeBtn1");
var close2 = document.getElementById("closeBtn2");

close.addEventListener("click", function() {

    modal.style.display = "none";
    

});

close1.addEventListener("click", function() {

    modal1.style.display = "none";
    

})

close2.addEventListener("click", function() {

    modal2.style.display = "none";
    

})



document.getElementById('thumb02').addEventListener('click', function (){
    document.querySelector('.bg-modal1').style.display = "block";

});

document.getElementById('thumb01').addEventListener('click', function (){
    document.querySelector('.bg-modal').style.display = "block";

    
});
document.getElementById('thumb03').addEventListener('click', function (){
    document.querySelector('.bg-modal2').style.display = "block";
    

    
});

var button = document.getElementById('submit');

button.addEventListener("click", function() {

    alert("MESSAGE SUCCESSFULLY SENT!")
    

})
 */

