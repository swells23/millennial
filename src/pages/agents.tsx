import React from "react";
import AgentList from "../components/agents/AgentList";
import DefaultTemplate from "../components/layout/DefaultTemplate";
import GetAgents from "./api/GetAgents";

interface ServerSideProps {
  props: {
    agentList: Array<Agent> | undefined;
  }
}

interface Agent {
  name: string;
  title: string;
  email?: string;
  phone?: string;
  picture: string;
  linkedin?: string;
}

function AgentsPage({ agentList }: { agentList: Array<Agent> | undefined }) {
  const title = "Agents",
    metaDesc =
      "Our exceptional team of brokers work hard to provide world-class services to our clients.";

  return (
    <DefaultTemplate title={title} metaDesc={metaDesc}>
      <AgentList data={agentList} />
    </DefaultTemplate>
  );
}

export async function getServerSideProps(): Promise<ServerSideProps> {
  const agentList = await GetAgents();

  return { props: { agentList } };
}

export default AgentsPage;
