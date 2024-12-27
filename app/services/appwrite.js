import { Client, Account } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("66af7c1b0017bd648248"); // Your project ID

const account = new Account(client);

export {client, account}
