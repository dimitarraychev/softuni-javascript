function requestValidator(requestObj) {

    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const uriRegex = /^[a-zA-Z0-9.*]+$/g;
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const messageRegex = /^[^\<\>\\\&\'\"]+$/g;

    if (!validMethods.includes(requestObj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!requestObj.hasOwnProperty('uri') || !requestObj.uri.match(uriRegex)) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!validVersions.includes(requestObj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!requestObj.hasOwnProperty('message') || !requestObj.message.match(messageRegex) && requestObj.message !== '') {
        throw new Error('Invalid request header: Invalid Message');
    }

    return requestObj;
}

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));