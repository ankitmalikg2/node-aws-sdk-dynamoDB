const {AWS} = require("./aws-conn")

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "Movies2";

var year = 2015;
var title = "The Big New Movie";

var params = {
    TableName: table,
    Key:{
        "year": year,
        "title": title
    }
};

docClient.get(params, function(err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
    }
});