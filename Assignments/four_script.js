alert("Click the course line to see z-index + changes!");

const courseLine = document.getElementById("myCourse");

courseLine.addEventListener("click", function () {

    // visually highlight z-index effect
    courseLine.style.backgroundColor = "yellow";
    courseLine.style.padding = "10px";
    courseLine.style.position = "relative";
    courseLine.style.zIndex = "10";

    // change text
    let newText = prompt("Enter new course text:");

    if (newText !== null && newText.trim() !== "") {
        courseLine.textContent = newText;

        // change font size
        let size = prompt("Enter font size (e.g., 20px or 30)");

        if (size !== null && size.trim() !== "") {

            size = size.trim();

            if (!isNaN(size)) {
                size = size + "px";
            }

            courseLine.style.fontSize = size;
        }
    }
});
