exports.validname1 = (name) => {
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(name);
}
exports.validemail1 = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
exports.validpassword1 = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
}
