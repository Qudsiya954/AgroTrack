
module.exports = (req,res,next) => {

    const requestTime =
    req.headers["x-timestamp"];

    if(!requestTime){

        return res.status(400).json({

            success:false,

            message:
            "Timestamp missing"

        });

    }

    const currentTime =
    Date.now();

    const difference =
    currentTime - (Number(requestTime) * 1000);
    // 10 seconds limit
    if(difference > 10000){

        return res.status(403).json({

            success:false,

            message:
            "Replay attack detected"

        });

    }

    next();

};