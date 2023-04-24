import React from "react";
import AgentList from "../components/agents/AgentList";
import DefaultTemplate from "../components/layout/DefaultTemplate";
import GetAgents from "./api/GetAgents";

interface AgentData {
  agentList: JSON;
}

interface StaticProps {
  props: AgentData | undefined;
}

interface Agent {
  name: string;
  title: string;
  email?: string;
  phone?: string;
  picture: string;
  linkedin?: string;
}

function Agents({ agentList }: { agentList: Array<Agent> | undefined }) {
  const title = "Agents",
    metaDesc =
      "Buying a home can be challenging, so let us make it simple. Millennial Realty Investments strives to provide you with first-class servicing for your next real estate venture.";

  return (
    <DefaultTemplate title={title} metaDesc={metaDesc}>
      <AgentList data={agentList} />
    </DefaultTemplate>
  );
}

export async function getStaticProps(): Promise<StaticProps> {
  const agentList: AgentData | undefined = await GetAgents();

  return { props: agentList };
}

export default Agents;
