function validateForm() {
    const form = document.forms["message-form"];
    const name = form["full-name"].value.trim();
    const birthdate = form["birth-date"].value;
    const gender = form["gender"].value;
    const messages = form["messages"].value.trim();

    if (!name || !birthdate || !gender || !messages) {
        alert("Tidak boleh ada yang kosong ya!");
        return false;
    }
        
    setSenderUI(name, birthdate, gender, messages);
    return false;
}

function setSenderUI(name, birthdate, gender, messages) {
    document.getElementById("sender-full-name").textContent = name;
    document.getElementById("sender-name").textContent = name;
    document.getElementById("sender-birth-date").textContent = birthdate;
    document.getElementById("sender-gender").textContent = gender;
    document.getElementById("sender-messages").textContent = messages;
}

function replaceName() {
    let name = prompt("Kenalan yuk! Namamu siapa?");
    if (name) {
        document.getElementById("sender-name").textContent = name;
    }
}

replaceName();

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let i;
    const imgList = document.getElementsByClassName("image-slideshow");
    if (n > imgList.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = imgList.length; }
    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }
    imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 3000);
