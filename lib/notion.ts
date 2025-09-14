import { Client } from "@notionhq/client";

let notion: Client | null = null;

// Only initialize Notion if API token is available
if (process.env.NOTION_TOKEN) {
  notion = new Client({ auth: process.env.NOTION_TOKEN });
}

export async function getPublishedNotes() {
  try {
    if (!notion || !process.env.NOTION_DB_ID) {
      console.warn("Notion API not available - returning empty notes");
      return [];
    }

    const response = await notion.databases.query({
      database_id: process.env.NOTION_DB_ID as string,
      filter: {
        property: "Published?",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "Modified at",
          direction: "ascending",
        },
      ],
    });
    return response.results;
  } catch (error) {
    console.error("Error fetching Notion notes:", error);
    return [];
  }
}
