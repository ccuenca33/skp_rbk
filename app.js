let qrMap = {
"P1": "SOL001",
"P2": "SOL002",
"P3": "SOL003",
"P4": "SOL004",
"P5": "SOL005",
"P6": "SOL006"
};

let validCodes = {
"SOL001": "Acceso válido",
"SOL002": "Acceso válido",
"SOL003": "Acceso válido",
"SOL004": "Acceso válido",
"SOL005": "Acceso válido",
"SOL006": "Acceso válido"
};

function getQRid(){
 let params = new URLSearchParams(window.location.search);
 return params.get("id");
}

window.onload = function(){
 let id = getQRid();

 if(id && qrMap[id]){
   document.getElementById("codeInput").value = qrMap[id];
 }
}

function validate(){
 let code = document.getElementById("codeInput").value.trim().toUpperCase();
 let result = document.getElementById("result");

 if(validCodes[code]){
   result.innerHTML = "<div class='ok'>" + validCodes[code] + "</div>";
 }else{
   result.innerHTML = "<div class='fail'>Código incorrecto</div>";
 }
}

