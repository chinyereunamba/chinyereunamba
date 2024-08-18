import { client } from "@/services/appwrite";
import { Databases, Query } from "appwrite";
import { NextResponse } from "next/server";

const db = new Databases(client);

type ProjectProps = {
  project_name: string;
  stack: string[];
  desc: string;
  git_link?: string;
  site?: string;
  img?: string;
};

async function getProject() {
  try {
    const response = await db.listDocuments(
      "66af89b3003a38737642",
      "66af89c50009616d90a8",
      [Query.orderDesc("$createdAt")]
    );
    return response.documents;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch projects");
  }
}

export async function GET() {
  try {
    const projects = await getProject();
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to fetch projects",
      },
      { status: 500 }
    );
  }
}
