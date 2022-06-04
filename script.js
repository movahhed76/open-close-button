const togglebutton = document.querySelectorAll(".toggle-button")
const toggle = document.querySelectorAll(".toggle-container")

togglebutton.forEach((item) => {

    item.addEventListener("click" , () => {
        item.parentNode.classList.toggle('active')
    })
    

})



