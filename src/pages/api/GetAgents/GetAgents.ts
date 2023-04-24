import { GOOGLE_DRIVE_API } from "../../../data/templateMeta";

interface AgentData {
  agentList: JSON;
}

export default async function GetAgents(): Promise<AgentData | undefined> {
  try {
    const res: Response = await fetch(
        new URL(
          `${GOOGLE_DRIVE_API}/files/${process.env.MILLENNIAL_AGENTS_ID}?key=${process.env.MILLENNIAL_API_KEY}&alt=media`
        )
      ),
      agentList: JSON = await res.json();

    return {
      agentList,
    };
  } catch (err) {
    console.error(`Error: Unable to retreive data from GetAgents API. ${err}`);

    return;
  }
}
