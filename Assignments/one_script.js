alert("Click on the course line to change it!");

const courseLine = document.getElementById("myCourse");

courseLine.addEventListener("click", function() {
    let newText = prompt("Enter new text for the course line:");

    if (newText !== null && newText.trim() !== "") {
        courseLine.textContent = newText;
    } else {
        alert("No valid input provided!");
    }
});
