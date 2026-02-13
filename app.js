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

let titleMap = {
"P1": "Introduce clave de acceso",
"P2": "Introduce código reconstrucción P2",
"P3": "Introduce código reconstrucción P3",
"P4": "Introduce código reconstrucción P4",
"P5": "Introduce código diagnóstico",
"P6": "Introduce clave de apertura"
};

let successMap = {
"P1": "✅ ¡Genial!<br>Acceso desbloqueado<br>Revela las cartas 4, 5, 6",
"P2": "✅ ¡Maravilla parseluki!<br>Reconstrucción P2 completada<br>Revela las cartas...",
"P3": "✅ ¡You're doing great!<br>Reconstrucción P3 completada<br>Revela las cartas...",
"P4": "✅ ¡Dilo tatona!<br>Reconstrucción P4 completada<br>Revela las cartas...",
"P5": "✅ ¡Illo cabesaaa!<br>Diagnóstico exitoso. Archivo restaurado correctamente.<br>Revela las cartas...",
"P6": "✅ ¡Mi maiti es la más informática!<br>Permisos admin conseguidos. Estás habilitada para generar recuerdos nuevos."
};

let errorMap = {
"P1": "❌ Código incorrecto<br>No voy a dejar la contraseña anotada en cualquier sitio y pff... tengo que cambiar de teclado.",
"P2": "❌ Código incorrecto<br>La reconstrucción cronológica es importante.",
"P3": "❌ Código incorrecto<br>Trazar un plan correctamente no es moco de pavo.",
"P4": "❌ Código incorrecto<br>Joeee odio cuando se sobreescribe la memoria, no veo nada.",
"P5": "❌ Código incorrecto<br>Al final todo tiene un sentido.",
"P6": "❌ Código incorrecto<br>¡Ahora no me puedes fallar, si tienes mejor vista que yo!"
};

function getQRid(){
 let params = new URLSearchParams(window.location.search);
 return params.get("id");
}

window.onload = function(){
    let id = getQRid();

    // Cambiar título dinámicamente si existe en titleMap
    if(titleMap[id]){
        document.getElementById("pageTitle").innerText = titleMap[id];
    }
}

function validate(){
    let code = document.getElementById("codeInput").value.trim().toUpperCase();
    let result = document.getElementById("result");

    let id = getQRid();  // usamos el mismo id que el QR

    if(validCodes[code]){
        // Mostrar mensaje de éxito específico según QR
        if(successMap[id]){
            result.innerHTML = "<div class='ok'>" + successMap[id] + "</div>";
        } else {
            result.innerHTML = "<div class='ok'>✅Código válido</div>"; // fallback
        }
    } else {
        // Mostrar mensaje de error específico según QR
        if(errorMap[id]){
            result.innerHTML = "<div class='fail'>" + errorMap[id] + "</div>";
        } else {
            result.innerHTML = "<div class='fail'>❌Código incorrecto</div>"; // fallback
        }
    }
}






