import { APIGatewayProxyEvent, ProxyCallback, Context } from "aws-lambda";

export const hello = async (event: APIGatewayProxyEvent, context: Context, callback: ProxyCallback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({ message: "i'm ready" }),
  };

  callback(null, response);
};