let body = document.querySelector('body');
let stopButton = document.createElement('button');
var audio = new Audio('files/audio.mp3');
audioButton = document.querySelector('#audio-button');
let h1 = document.querySelector('h1');
let img = document.createElement('img');
let div = document.querySelector('div');

function audioPlay(){
    audio.play();
    body.style.backgroundImage = 'url("files/disco.jpeg")';
    audioButton.style.display = 'none';
    stopButton.id = "stop-button";
    stopButton.textContent = "Stop/Restart";
    body.appendChild(stopButton);
    h1.style.top = "40%";
    h1.textContent = "You've turned 80!";
    h1.className = "glow";
    setTimeout(dadDance, 8000);
}

function audioStop(){
    document.location.reload();
}

stopButton.addEventListener("click", audioStop);
audioButton.addEventListener("click", audioPlay);

function dadDance(){
    let dadImage = document.createElement('img');
    dadImage.src = "files/daddy.jpg";
    dadImage.id = "daddy";
    dadImage.classList.add("animated", "wobble");
    h1.style.top = "10%";
    h1.textContent = "So let's party!!!"
    div.appendChild(dadImage);
    setTimeout(simonDance, 4000);
}

function simonDance(){
    let simonImage = document.createElement('img');
    simonImage.src = "files/simon.jpg";
    simonImage.id = "simon";
    div.insertBefore(simonImage, div.children[0]);
    jennyDance();
}

function jennyDance(){
    let jennyImage = document.createElement('img');
    jennyImage.src = "files/jenny.jpg";
    jennyImage.id = "jenny";
    div.appendChild(jennyImage);
    setTimeout(showVoucher, 8000);
}

function showVoucher(){
    div.innerHTML = "";
    h1.textContent = "Here's your party voucher:"
    let voucherImage = document.createElement('img');
    voucherImage.src = "files/voucher.png";
    voucherImage.id = "voucher";
    voucherImage.className = "glow2";
    div.appendChild(voucherImage);
    let newh1 = document.createElement('h1');
    newh1.textContent = "Love, Simon and Jenny xxx"
    newh1.style.top = "80%";
    newh1.className = "glow";
    body.appendChild(newh1);
}