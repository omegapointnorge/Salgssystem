import AWS from "aws-sdk";
import uuid from "uuid";

AWS.config.update({ region: process.env.AWS_REGION || "eu-central-1" });
const ddbDocumentClient = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = `Salgssystem_${process.env.NODE_ENV || "development"}`;

export const getAllCases = async (_) => {
  var params = {
    TableName: TABLE_NAME,
  };

  try {
    return await ddbDocumentClient.scan(params).promise();
  } catch (error) {
    console.error("Failure", error.message);
  }
};

export const saveCase = async (case_object) => {
  var params = {
    TableName: TABLE_NAME,
    Item: {
      ...case_object,
      ID: case_object.ID || uuid(),
    },
  };

  try {
    const data = await ddbDocumentClient.put(params).promise();
    return data;
  } catch (error) {
    console.error("Failure", error.message);
  }
};
