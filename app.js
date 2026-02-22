let startTime = Date.now();
let timer = document.getElementById("timer");

if(timer){
setInterval(() => {
  let diff = Math.floor((Date.now() - startTime)/1000);
  let h = String(Math.floor(diff/3600)).padStart(2,'0');
  let m = String(Math.floor((diff%3600)/60)).padStart(2,'0');
  let s = String(diff%60).padStart(2,'0');
  timer.innerText = `${h}:${m}:${s}`;
},1000);
}

let darkBtn = document.getElementById("darkToggle");

if(darkBtn){
darkBtn.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
};
}

if(localStorage.getItem("darkMode")==="true"){
  document.body.classList.add("dark");
}

function addLayer(type){
  let content = document.getElementById("content");
  let div = document.createElement("div");
  div.className="layer";

  let close = document.createElement("span");
  close.className="close-btn";
  close.innerText="✖";
  close.onclick=()=>div.remove();
  div.appendChild(close);

  if(type==="tempmail"){
    div.innerHTML+=`
      <h3>Temp Mail</h3>
      <select onchange="openExternal(this.value)">
        <option>Select Mail</option>
        <option value="https://www.emailondeck.com/eod.php">On Deck Mail</option>
        <option value="https://tmailor.com">Normal Mail</option>
      </select>
      <br><br>
      <button onclick="generateNames()">Generate USA Names</button>
      <div id="names"></div>
    `;
  }

  if(type==="security"){
    div.innerHTML+=`Go to Account Settings → Password & Security`;
  }

  if(type==="addemail"){
    div.innerHTML+=`Go to Personal Details → Contact Info → Add Email`;
  }

  content.appendChild(div);
}

function openExternal(url){
  window.open(url,'_blank');
}

function open2FA(){
  window.open("https://2fa-auth.com?refresh="+Date.now(),"_blank");
}

function generateNames(){
  let male = ["James","John","Robert","Michael","William"];
  let female = ["Mary","Patricia","Jennifer","Linda","Elizabeth"];
  let output="";
  male.forEach(name=>output+=name+" Smith<br>");
  female.forEach(name=>output+=name+" Johnson<br>");
  document.getElementById("names").innerHTML=output;
}

function goInstagram(){
  window.location="instagram.html";
}

function clearApp(){
  localStorage.clear();
  location.reload();
}