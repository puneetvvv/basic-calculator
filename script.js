let string = "";
let buttons = document.getElementsByTagName("button");
// let b = document.getElementById("btnDiv").innerHTML = "&#8592;"

// function removeLastString() {
//     string.substring(0, string.length - 1);
// }

// function changeButton(){
//     // let b = document.getElementById("btnDiv").innerHTML = "&#8592;"
//     let b = document.getElementById("btnDiv").innerHTML;
//     b.("&#8592;");
// }
// changeButton();


Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e)=> {
if(e.target.innerHTML == "="){
    string = eval(string);
    document.querySelector("#input").value = string; 
}

else if(e.target.innerHTML == "AC"){
    string="";
    document.querySelector("#input").value ="";
}

else if(e.target.innerHTML == "B") {
    
    string = string.substring(0, string.length - 1);
    document.querySelector("#input").value = string;
}

else{
        string = string + e.target.innerHTML;
        document.querySelector("#input").value = string;
}
})
})



