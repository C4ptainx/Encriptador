function encryptText() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    let outputText = '';

    for (let i = 0; i < inputText.length; i++) {
        const char = inputText[i];
        switch (char) {
            case 'e':
                outputText += 'enter';
                break;
            case 'i':
                outputText += 'imes';
                break;
            case 'a':
                outputText += 'ai';
                break;
            case 'o':
                outputText += 'ober';
                break;
            case 'u':
                outputText += 'ufat';
                break;
            default:
                outputText += char;
        }
    }

    document.getElementById('outputText').value = outputText;
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;
    let outputText = '';

    outputText = inputText.replace(/enter/g, 'e');
    outputText = outputText.replace(/imes/g, 'i');
    outputText = outputText.replace(/ai/g, 'a');
    outputText = outputText.replace(/ober/g, 'o');
    outputText = outputText.replace(/ufat/g, 'u');

    document.getElementById('outputText').value = outputText;
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}