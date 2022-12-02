let tabLinks, tabContents, sideMenu, navBarItems,formSubmissionMsg

//initialize all variables
const init = () => {
    tabLinks = document.getElementsByClassName("tab-links")
    tabContents = document.getElementsByClassName("qualification-content")
    sideMenu = document.getElementById("nav-bar-items")
    navBarItems = document.querySelectorAll("#nav-bar-items li")
    formSubmissionMsg=document.getElementById("form-success-msg")

    for (let item of navBarItems) {
        item.setAttribute("aria-current", "false")
        item.addEventListener("click", (e) => {
            setCurrent("#nav-bar-items li", "page", e)
        })
    }

    for (let item of tabLinks) {
        item.setAttribute("aria-current", "false")
        item.addEventListener("click", (e) => {
            setCurrent(".tab-links", "true", e)
        })
    }


}

//for current list item, set the corresponding aria-current value if its active
const setCurrent = (selector, value, e) => {
    let selectedItems = document.querySelectorAll(selector)
    //set aria-current to false for all elements
    for (let item of selectedItems) {
        if (item === e.currentTarget) { //active item
            item.setAttribute("aria-current", value)
        } else {
            item.setAttribute("aria-current", "false")
        }

    }
}


const opentab = (tabName, e) => {

    //remove active links and tabs
    for (let tabLink of tabLinks) {
        tabLink.classList.remove("active-link")
    }

    for (let tabContent of tabContents) {
        tabContent.classList.remove("active-tab")
    }


    e.currentTarget.classList.add("active-link")

    document.getElementById(tabName).classList.add("active-tab")

}


const openMenu = () => {
    sideMenu.classList.add("active")
}

const closeMenu = () => {
    sideMenu.classList.remove("active")
}

const submitForm=(e)=>{
    //for the purpose of this assignment, I won't be posting the form content to an external source
    e.preventDefault()
    formSubmissionMsg.innerHTML="Message sent successfully! Thank you!"
    setTimeout(()=>{
        formSubmissionMsg.innerHTML=""
    },4000)

}

window.onload = init