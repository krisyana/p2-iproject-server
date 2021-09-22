function errorHandler(err, req, res, next) {
    console.log(err);
    let status = 500;
    let msg = ['Internal Server Error'];
    switch (err.name) {
        case 'SequelizeValidationError':
        case 'SequelizeUniqueConstraintError':
            status = 400;
            msg = err.errors.map((err) => {
                return err.message;
            });
            break;
        case 'LOGINERROR':
        case 'AUTHERROR':
        case 'NOTFOUND':
        case 'FORBIDDEN':
        case 'FILEVALIDATIONERROR':
            status = err.status;
            msg = [err.msg];
            break;
        default:
            break;
    }

    res.status(status).json({ msg });
}

module.exports = errorHandler;