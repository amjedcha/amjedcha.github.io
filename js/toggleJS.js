var isClicked = false;
$("#toggle").click(function(){
    
    if (!isClicked){
        document.body.style.backgroundColor = "white";
        isClicked = true;
    }
    else {
        document.body.style.backgroundColor = "rgb(89,102,122)";
        isClicked = false;
    }
   
});