// Creating Token and Saving in Cookie

const sendToken = (user, statusCode, res) => {

    const token = user.getJWTToken();
    // console.log(token)

    const options = {
        expires: new Date(
            Date.now() + Number(process.env.COOKIE_EXPIRE) * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }

    // console.log("Token sent successfully")
    return res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        token
    });
}

module.exports = sendToken; 
