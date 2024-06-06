// Ini Javascript
function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthdate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == "" || birthdate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada yang kosong ya!")
    }
        
    setSenderUI(name, birthdate, gender, messages);

    return false;
}

function setSenderUI(name, birthdate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthdate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

function replaceName() {
    let name = prompt("Kenalan yuk! Namamu siapa?");
    document.getElementById("sender-name").innerHTML = name;
    
}

replaceName();

var slideIndex = 1;
showDivs (slideIndex);

function plusDivs(n) {
    showDivs (slideIndex += n);
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("image-slideshow");
    if (n > imgList.length) {slideIndex = 1}
    if (n < 1) {slideIndex = imgList.length};
    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }
    imgList[slideIndex-1].style.display = "block";
}

setInterval(() => {
    plusDivs(1)
}, 3000);