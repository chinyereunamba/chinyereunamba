import { Client, Account, Databases, Query, Storage } from "appwrite";
import { totalmem } from "os";

type ProjectProps = {
  project_name: string;
  stack: string[];
  desc: string;
  git_link?: string;
  site?: string;
  img?: string;
  slug: string;
};

export { type ProjectProps };

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("66af7c1b0017bd648248"); // Your project ID

const account = new Account(client);
const db = new Databases(client);

export async function getProject(): Promise<ProjectProps[]> {
  try {
    const response = await db
      .listDocuments("66af89b3003a38737642", "66af89c50009616d90a8", [
        Query.orderDesc("$createdAt"),
      ])
      .then((res) => {
        return res.documents;
      });
    return response;
  } catch (error) {
    console.error(error);
  }
}

const storage = new Storage(client);
const bucketId = "66af89df003b0904eb5d";

const listFilesInFolder = async () => {
  const response = await storage.listFiles(bucketId);
  const filesInFolder = response.files.map((file) => file.name);
};

const fileUrl = async (name: string) => {
  const response = await storage.listFiles(bucketId);
  const fileId = response.files.find((file) =>
    file.name.startsWith(`${name}-1`)
  );
  const fileUrl = storage.getFileView("66af89df003b0904eb5d", fileId?.$id);
  return fileUrl.href;
};

const fileUrlList = async (name: string) => {
  const response = await storage.listFiles(bucketId);
  const fileId = response.files.filter((file) =>
    file.name.startsWith(`${name}`)
  );
  const imgList = fileId.map(
    (img) => storage.getFileView("66af89df003b0904eb5d", img?.$id).href
  );

  return imgList;
};
export { client, fileUrl, fileUrlList };
