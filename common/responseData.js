const responseData = function (responseCode,responseStatus, message, data) {
    return {
        "message": message, "status": responseStatus, 'code': responseCode, 'data': data
    }
}
module.exports =responseData;
