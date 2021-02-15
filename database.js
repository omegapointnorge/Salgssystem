const AWS = require("aws-sdk");

AWS.config.update({ region: "eu-central-1" });
const ddbDocumentClient = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = "Salgssystem";

export const getAllUsers = async (_) => {
  var params = {
    TableName: TABLE_NAME,
  };

  try {
    return await ddbDocumentClient.scan(params).promise();
  } catch (error) {
    console.error("Failure", error.message);
  }
};

export const putUsers = async ({ email, firstName, lastName }) => {
  var params = {
    TableName: TABLE_NAME,
    Item: {
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
