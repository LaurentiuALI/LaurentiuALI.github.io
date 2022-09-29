var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname){
    const tab = document.getElementById(tabname);
    
    for(let i=0; i<tabcontents.length; i++){
        if(tabcontents[i].id === tabname && !tabcontents[i].classList.contains('active-tab')){
            tabcontents[i].classList.add("active-tab")
            tablinks[i].classList.add("active-link")
        }
        else{
            tabcontents[i].classList.remove("active-tab");
            tablinks[i].classList.remove("active-link");
        }
    }


}
