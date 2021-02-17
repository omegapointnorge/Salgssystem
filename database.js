import AWS from "aws-sdk";

AWS.config.update({ region: process.env.AWS_REGION || "eu-central-1" });
const ddbDocumentClient = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = `Salgssystem_${process.env.NODE_ENV || "development"}`;

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
