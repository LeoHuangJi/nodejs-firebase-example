const message = {
    ok: "Successful",
    error: 'server error',
    created: 'Created',
    noContent:'No Content',
    Unauthorized:'Unauthorized',
    unprocessableEntity:'Unprocessable Entity',
    notFound:'Data not found',
    methodNotAllowed:'Method Not Allowed',
    notAcceptable: 'Not acceptable'
}

const responseCode = {
    ok: 200,
    error: 500,
    created: 201,
    accepted:202,
    noContent:204,
    badRequest:400,
    Unauthorized:401,
    unprocessableEntity:422,
    notFound:400,
    methodNotAllowed:405,
    notAcceptable:406



}

module.exports = { message, responseCode };