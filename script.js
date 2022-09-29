var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(tablink of tablinks)
        tablink.classList.remove("active-link");
    for(tabcontent of tabcontents)
        tabcontent.classList.remove("active-tab");

    event.target.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

const text = document.querySelector(".second-text"); 

const textLoad = () =>{
    setTimeout(() => {
        text.textContent = "Laurentiu"
    }, 0);
    setTimeout(() => {
        text.textContent = "Student"
    }, 4000);
    setTimeout(() => {
        text.textContent = "Former Erasmus"
    }, 8000);
    setTimeout(() => {
        text.textContent = "Software Engineer"
    }, 12000);
}
textLoad();
setInterval(textLoad, 12000);