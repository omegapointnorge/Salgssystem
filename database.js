import AWS from "aws-sdk";

AWS.config.update({ region: process.env.AWS_REGION || "eu-central-1" });
const ddbDocumentClient = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = `Salgssystem_${process.env.NODE_ENV || "development"}`;
console.log("TABLE_NAME" + TABLE_NAME);

export const getAllCases = async (_) => {
  var params = {
    TableName: TABLE_NAME,
  };

  try {
    return await ddbDocumentClient.scan(params).promise();
  } catch (error) {
    console.error("Failed to get all  from database", error.message);
  }
};

export const saveCase = async (case_object) => {
  var params = {
    TableName: TABLE_NAME,
    Item: case_object,
  };

  try {
    await ddbDocumentClient.put(params).promise();
    return ID;
  } catch (error) {
    console.error("Failed to save to database", error.message);
  }
};

export const deleteCase = async ({ ID, dato }) => {
  var params = {
    TableName: TABLE_NAME,
    Key: {
      ID: ID,
      dato: dato,
    },
  };

  try {
    await ddbDocumentClient.delete(params).promise();
    return ID;
  } catch (error) {
    console.error("Failed to delete from database", error.message);
  }
};
