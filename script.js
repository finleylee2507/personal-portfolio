
let tabLinks, tabContents,sideMenu

//initialize all variables
const init=()=>{
    tabLinks=document.getElementsByClassName("tab-links")
    tabContents=document.getElementsByClassName("qualification-content")
    sideMenu=document.getElementById("side-menu")
}

const opentab=(tabName,e)=>{

    //remove active links and tabs
    for (let tabLink of tabLinks){
        tabLink.classList.remove("active-link")
    }

    for (let tabContent of tabContents){
        tabContent.classList.remove("active-tab")
    }


    e.currentTarget.classList.add("active-link")

    document.getElementById(tabName).classList.add("active-tab")

}


const openMenu=()=>{
    sideMenu.classList.add("active")
}

const closeMenu=()=>{
    sideMenu.classList.remove("active")
}

window.onload=init