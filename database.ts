import AWS from "aws-sdk";
import Case from "./client/src/models/Case";

AWS.config.update({ region: process.env.AWS_REGION || "eu-central-1" });
const ddbDocumentClient = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = `Salgssystem_${process.env.NODE_ENV || "development"}`;

export const getAllCases = async () => {
  var params = {
    TableName: TABLE_NAME,
  };

  try {
    return await ddbDocumentClient.scan(params).promise();
  } catch (error) {
    console.error("Failed to get all  from database", error.message);
  }
};

export const saveCase = async (case_object: Case) => {
  var params = {
    TableName: TABLE_NAME,
    Item: case_object,
  };

  try {
    return await ddbDocumentClient.put(params).promise();
  } catch (error) {
    console.error("Failed to save to database", error.message);
  }
};

export const deleteCase = async ({ ID, dato }: { ID: String; dato: Date }) => {
  var params = {
    TableName: TABLE_NAME,
    Key: {
      ID: ID,
      dato: dato,
    },
  };

  try {
    return await ddbDocumentClient.delete(params).promise();
  } catch (error) {
    console.error("Failed to delete from database", error.message);
  }
};
