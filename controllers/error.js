exports.error404 = (req, rsp) => {
    rsp.redirect('/404.html')
}

exports.error500 = (err, req, rsp, next) => {
    console.error(err.stack)
    rsp.redirect('/500.html')
}