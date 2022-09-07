const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");

const book = document.querySelector(".book");

nextBtn.addEventListener("click", goNextPage);
prevBtn.addEventListener("click", goPrevPage);


const totalPages = 4;
let currentPage = 1;
const maxPage = totalPages+1;


function openBook(){
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-200px)";
    nextBtn.style.transform = "translateX(200px)";
}

function closeBook(isFirstPage){
    if(isFirstPage){
        book.style.transform = "translateX(0%)";
    }
    else{
        book.style.transform = "translateX(100%)";
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage(){
   if(currentPage < maxPage){
    if(currentPage==1){
        openBook();
        paper1.classList.add("flipped");
        paper1.style.zIndex = 1;
    }
    else if (currentPage==2){
        paper2.classList.add("flipped");
        paper2.style.zIndex=2;
    }
    else if (currentPage==3){
        paper3.classList.add("flipped");
        paper3.style.zIndex=3;
    }
    else if (currentPage==4){
        paper4.classList.add("flipped");
        paper4.style.zIndex=4;
        closeBook(false);
    }
  
    currentPage++;
    }
}

function goPrevPage(){
   if(currentPage > 1){
    if(currentPage==2){
        closeBook(true);
        paper1.classList.remove("flipped");
        paper1.style.zIndex= 4;
    }
    else if(currentPage==3){
        paper2.classList.remove("flipped");
        paper2.style.zIndex= 3;
    }
    else if(currentPage==4){
        // openBook();
        paper3.classList.remove("flipped");
        paper3.style.zIndex= 2;
    }
    else if(currentPage==5){
        openBook();
        paper4.classList.remove("flipped");
        paper4.style.zIndex= 1;
    }
    currentPage--;
   }
}