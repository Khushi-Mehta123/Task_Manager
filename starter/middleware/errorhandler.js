const { customApiError } = require('../errors/custom-error'); 

const errorhandlerMiddleware = (err, req, res, next) => {
    if (err instanceof customApiError) {
        console.log(err.statuscode);
        return res.status(err.statuscode).json({ msg: err.message }); 
    }
    return res.status(500).json({ msg: 'Something went wrong' }); 
}

module.exports = errorhandlerMiddleware;