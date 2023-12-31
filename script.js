const btn = document.querySelector(".btn");
const items = document.querySelectorAll(".item")


btn.addEventListener("click", () => {
    btn.classList.toggle("open");   
})
items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");  
        
        let checked = document.querySelectorAll(".checked");
        let textBtn = document.querySelector(".text")

        if (checked && checked.length >= 1) {
            textBtn.innerText = `${checked.length} Selected`;
        }
        else{
            textBtn.innerText = `Select Language`;
        }
    });
});