function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

document.querySelectorAll("li").forEach(item => {
    item.addEventListener("click", () => {
        item.style.backgroundColor = getRandomColor();
    });
});