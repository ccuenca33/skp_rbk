let qrMap = {
"P1": "SOL001",
"P2": "SOL002",
"P3": "SOL003",
"P4": "SOL004",
"P5": "ABCD",
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

let validCodesP6 = {
    "red": "triangulo",
    "green": "circulo",
    "blue": "aspa"
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

    let inputContainer = document.getElementById("inputContainer");

    if(id === "P5"){
        inputContainer.innerHTML = `
            <div class="multi-inputs">
                <input id="code1" maxlength="1" placeholder="Código 1">
                <input id="code2" maxlength="1" placeholder="Código 2">
                <input id="code3" maxlength="1" placeholder="Código 3">
                <input id="code4" maxlength="1" placeholder="Código 4">
            </div>
            <button id="validateBtn" onclick="validate()">VALIDAR</button>
        `;
    } else if(id === "P6"){
        inputContainer.innerHTML = `
            <div class="color-inputs">
                <div>
                    <select id="redSelect">
                        <option value=""></option>
                        <option value="triangulo">⬜</option>
                        <option value="circulo">⚪</option>
                        <option value="aspa">🤍</option>
                    </select>
                </div>
                <div>
                    <select id="greenSelect">
                        <option value=""></option>
                        <option value="triangulo">⬜</option>
                        <option value="circulo">⚪</option>
                        <option value="aspa">🤍</option>
                    </select>
                </div>
                <div>
                    <select id="blueSelect">
                        <option value=""></option>
                        <option value="triangulo">⬜</option>
                        <option value="circulo">⚪</option>
                        <option value="aspa">🤍</option>
                    </select>
                </div>
            </div>
            <button id="validateBtn" onclick="validate()">VALIDAR</button>
        `;
} else {
        inputContainer.innerHTML = `
            <input id="codeInput" placeholder="Código">
            <button id="validateBtn" onclick="validate()">VALIDAR</button>
        `;
    }
}

function validate(){
    let id = getQRid();
    let result = document.getElementById("result");
    let code;

    if(id === "P5"){
        let c1 = document.getElementById("code1").value.trim().toUpperCase();
        let c2 = document.getElementById("code2").value.trim().toUpperCase();
        let c3 = document.getElementById("code3").value.trim().toUpperCase();
        let c4 = document.getElementById("code4").value.trim().toUpperCase();
        code = c1 + c2 + c3 + c4;
        if(validCodes[code]){
            result.innerHTML = successMap[id];
        } else {
            result.innerHTML = errorMap[id];
        }
    } else if(id === "P6"){
        let r = document.getElementById("redSelect").value;
        let g = document.getElementById("greenSelect").value;
        let b = document.getElementById("blueSelect").value;

        if(r === validCodesP6.red && g === validCodesP6.green && b === validCodesP6.blue){
            result.innerHTML = successMap[id];
        } else {
            result.innerHTML = errorMap[id];
        }
    } else {
        code = document.getElementById("codeInput").value.trim().toUpperCase();
        if(validCodes[code]){
            result.innerHTML = successMap[id];
        } else {
            result.innerHTML = errorMap[id];
        }
    }
}














