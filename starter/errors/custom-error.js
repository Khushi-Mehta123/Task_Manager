class customApiError extends Error {
    constructor(message, statuscode) {
        super(message);
        this.statuscode = statuscode;
    }
}

// const createcustomError = (msg, statuscode) => {
//     return new customApiError(msg, statuscode);
// }

module.exports = {  customApiError };