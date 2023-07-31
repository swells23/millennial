import { GOOGLE_DRIVE_API } from "../../../data/templateMeta";

interface Agent {
  name: string;
  title: string;
  email?: string;
  phone?: string;
  picture: string;
  linkedin?: string;
}

export default async function GetAgents(): Promise<Array<Agent> | undefined> {
  try {
    const id = `${
      process.env.NEXT_VERCEL_ENV === "preview" ? "STAGING_" : ""
    }MILLENNIAL_AGENTS_ID`;
    const res: Response = await fetch(
      new URL(
        `${GOOGLE_DRIVE_API}/files/${process.env[id]}?key=${process.env.MILLENNIAL_API_KEY}&alt=media`
      ),
      { cache: "no-store" }
    );
    const agentList: Array<Agent> = await res.json();

    return agentList;
  } catch (err) {
    console.error(`Error: Unable to retreive data from GetAgents API. ${err}`);

    return;
  }
}
