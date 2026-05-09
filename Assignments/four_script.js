alert("Click on the course line to change text and font size!");

const courseLine = document.getElementById("myCourse");

courseLine.addEventListener("click", function () {

    // Apply z-index using JavaScript
    courseLine.style.position = "relative";
    courseLine.style.zIndex = "10";
    courseLine.style.backgroundColor = "yellow";
    courseLine.style.padding = "10px";

    // Change text
    let newText = prompt("Enter new text for the course line:");

    if (newText !== null && newText.trim() !== "") {

        courseLine.textContent = newText;

        // Change font size
        let size = prompt("Enter font size (Example: 20px or 30)");

        if (size !== null && size.trim() !== "") {

            size = size.trim();

            if (!isNaN(size)) {
                size = size + "px";
            }

            courseLine.style.fontSize = size;

        } else {
            alert("No valid font size entered!");
        }

    } else {
        alert("No valid text entered!");
    }

});
