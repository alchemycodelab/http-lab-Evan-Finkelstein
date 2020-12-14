module.exports = rawRequest => {
    const splitRequest = rawRequest.split(' ');
    const method = splitRequest[0];
    const path = splitRequest[1];
    if (method === 'GET') {
        return { method, path };
    }
    const splitBody = rawRequest.split('\n');
    const body = splitBody[splitBody.length - 1];
    return { method, path, body };
};
