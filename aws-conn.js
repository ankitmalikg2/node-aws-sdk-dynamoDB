const AWS = require("aws-sdk")
AWS.config.update({
   region: "ap-south-1" 
})


module.exports = {
    AWS
}