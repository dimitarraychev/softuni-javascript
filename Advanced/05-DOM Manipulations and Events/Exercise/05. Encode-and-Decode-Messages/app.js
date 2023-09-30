function encodeAndDecodeMessages() {

    const [encodeTextRef, decodeTextRef] = document.querySelectorAll('textarea');
    const [sendButton, readButton] = document.querySelectorAll('button');

    sendButton.addEventListener('click', encodeAndSend);
    readButton.addEventListener('click', decodeAndRead);

    function encodeAndSend(e) {
        let text = encodeTextRef.value;
        let result = '';

        for (const letter of text) {
            let letterToAscii = letter.charCodeAt();
            result += String.fromCharCode(letterToAscii + 1);
        }

        decodeTextRef.value = result;
        encodeTextRef.value = '';
    }

    function decodeAndRead(e) {
        let text = decodeTextRef.value;
        let result = '';

        for (const letter of text) {
            let letterToAscii = letter.charCodeAt();
            result += String.fromCharCode(letterToAscii - 1);
        }

        decodeTextRef.value = result;
    }
}