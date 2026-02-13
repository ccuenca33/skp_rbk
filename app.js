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

// Títulos personalizados por QR
let titleMap = {
"P1": "Introduce clave de acceso",
"P2": "Introduce código reconstrucción P2",
"P3": "Introduce código reconstrucción P3",
"P4": "Introduce código reconstrucción P4",
"P5": "Introduce código diagnóstico",
"P6": "Introduce clave de apertura"
};

function getQRid(){
 let params = new URLSearchParams(window.location.search);
 return params.get("id");
}

window.onload = function(){
    let id = getQRid();

    if(id && qrMap[id]){
        // Auto rellenar el input con el código real
        document.getElementById("codeInput").value = qrMap[id];
    }

    // Cambiar título dinámicamente si existe en titleMap
    if(titleMap[id]){
        document.getElementById("pageTitle").innerText = titleMap[id];
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


