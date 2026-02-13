let validCodes = {
"SOL001": "Acceso válido",
"SOL002": "Acceso válido",
"SOL003": "Acceso válido",
"SOL004": "Acceso válido",
"SOL005": "Acceso válido",
"SOL006": "Acceso válido"
};

function validate(){
let code = document.getElementById("codeInput").value.trim();
let result = document.getElementById("result");

if(validCodes[code]){
 result.innerHTML = "<div class='ok'>" + validCodes[code] + "</div>";
}else{
 result.innerHTML = "<div class='fail'>❌ Código incorrecto</div>";
}
}
