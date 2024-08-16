module.exports = (theFunc) => (req, res, next) => {
    Promisr.resolve(theFunc(req, res, next)).catch(next);

}