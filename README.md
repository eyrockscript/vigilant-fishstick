# Lambda TypeScript Serverless

This is an example Serverless application using TypeScript and AWS Lambda. The application provides a simple function that responds to an HTTP GET request with a greeting message.

## Requirements

- Node.js
- Serverless Framework
- AWS CLI (Configured with appropriate credentials)
- TypeScript

## Installation

1. Clone this repository:

```bash
git clone https://github.com/yourusername/lambda-ts.git
cd lambda-ts
```
Install the dependencies:
```bash
npm install
```

## Configuration
Make sure to configure your serverless.yml file to reflect your application's configuration, including the service name, AWS region, runtime type, and any other necessary settings.

## Deployment
Once you have configured your `serverless.yml`, you can deploy your application to AWS Lambda by running the following command:
```bash
serverless deploy
```

## Usage
After deploying the application, you can access the function via an HTTP GET request. For example:
```bash
GET https://your-api-gateway-url/api/hello
```

The response will be a JSON greeting message:
```json
{
  "message": "I'm ready"
}
```

## Local Testing
You can test the application locally using the Serverless Offline plugin. Run the following command:
```bash
serverless offline start
```
This will launch a local server that simulates AWS Lambda and API Gateway, allowing you to test the function in your development environment.