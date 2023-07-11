function extractFile(text) {

    let lastSlash = text.lastIndexOf('\\');
    let lastDot = text.lastIndexOf('.');

    let fileName = text.substring(lastSlash + 1, lastDot);
    let extension = text.substring(lastDot + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');