const listItems = document.querySelectorAll(".list-item-title");

function expand(num, ele){
    closeAll(num);
    const content = document.getElementById("content-"+num);

    if(content.style.height == "auto"){
        content.style.height = "0";
        ele.style.fontWeight = "400";
    }
    else{
        content.style.height = "0";
        content.style.height = "auto";
        ele.style.fontWeight = "700";
        ele.childNodes[3].setAttribute("class", "fa-solid fa-chevron-up");
    }

}

function closeAll(num){
    for(let i = 1 ; i <=5; i++){
        if(i != num){
            const content = document.getElementById("content-"+i);
            content.style.height = "0";
        }
    }
    for(let i = 0 ; i < listItems.length; i++){
        listItems[i].style.fontWeight = "400"
        listItems[i].childNodes[3].setAttribute("class", "fa-solid fa-chevron-down");
    }
}

