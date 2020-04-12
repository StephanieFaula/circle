// let image = document.getElementById("image");


let image = $("#circle");

console.log(image);

$( document ).ready( handler);

function handler() { 
image.animate(
    { deg: 360 }, 
    {
        duration: 5000,
        step: function(now){
            $(this).css({ transform: 'rotate(' + now + 'deg)'})
        }
    }, easeInOutBack)
}