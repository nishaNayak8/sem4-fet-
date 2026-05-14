alert("Click on the course line to change text and font size!");

const courseLine = document.getElementById("myCourse");

courseLine.addEventListener("click", function () {

    // Change text
    let newText = prompt("Enter new text for the course line:");
    courseLine.textContent = newText;

    // Change font size
    let size = prompt("Enter font size:");
    courseLine.style.fontSize = size;

});
