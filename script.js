const images = document.querySelectorAll(".image");
let draggedElement = null;

images.forEach(image => {
    image.addEventListener("dragstart", (e) => {
        draggedElement = e.target;
        e.target.classList.add("dragging");
    });

    image.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    image.addEventListener("dragenter", (e) => {
        e.preventDefault();
        e.target.classList.add("over");
    });

    image.addEventListener("dragleave", () => {
        e.target.classList.remove("over");
    });

    image.addEventListener("drop", (e) => {
        e.preventDefault();

        if (draggedElement !== e.target) {
            // Swap background images
            let temp = draggedElement.style.backgroundImage;
            draggedElement.style.backgroundImage = e.target.style.backgroundImage;
            e.target.style.backgroundImage = temp;
        }

        // Remove styles
        e.target.classList.remove("over");
    });

    image.addEventListener("dragend", () => {
        draggedElement.classList.remove("dragging");
    });
});
