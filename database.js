const AWS = require("aws-sdk");

AWS.config.update({ region: "eu-central-1" });
const ddbDocumentClient = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = "Salgssystem";

export const getAllUsers = async (_) => {
  var params = {
    KeyConditionExpression: "type = :type",
    ExpressionAttributeValues: {
      ":type": "USER",
    },
    TableName: TABLE_NAME,
  };

  try {
    var result = await ddbDocumentClient.query(params).promise();
    console.log(JSON.stringify(result));
  } catch (error) {
    console.error("Failure", error.message);
  }

  return result;
};

export const putUsers = async ({ email, firstName, lastName }) => {
  var params = {
    TableName: TABLE_NAME,
    Item: {
      type: "USER",
      email: email,
      firstName: firstName,
      lastName: lastName,
    },
  };

  try {
    const data = await ddbDocumentClient.put(params).promise();
    return data;
  } catch (error) {
    console.error("Failure", error.message);
  }
};
