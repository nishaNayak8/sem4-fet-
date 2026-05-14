alert("Click on the course line to change text and font size!");

const courseLine = document.getElementById("myCourse");

courseLine.addEventListener("click", function () {

    // Change text only if something is entered
    let newText = prompt("Enter new text for the course line:");

    if (newText !== "") {
        courseLine.textContent = newText;
    }

    // Change font size only if something is entered
    let size = prompt("Enter font size:");

    if (size !== "") {
        courseLine.style.fontSize = size;
    }

});
