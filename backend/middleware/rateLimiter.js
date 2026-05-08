const rateLimit =
require("express-rate-limit");

const limiter =
rateLimit({

    windowMs:
    1 * 60 * 1000,

    max: 100,
    message: {

        success:false,

        message:
        "Too many requests. Possible DoS attack detected."

    }

});

module.exports =
limiter;