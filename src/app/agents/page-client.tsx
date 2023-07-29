"use client";
import React from "react";
import AgentList from "../../components/agents/AgentList";
import DefaultTemplate from "../../components/layout/DefaultTemplate";

interface Agent {
  name: string;
  title: string;
  email?: string;
  phone?: string;
  picture: string;
  linkedin?: string;
}

export default function AgentsPageClient({
  agentList,
}: {
  agentList: Array<Agent> | undefined;
}) {
  return (
    <DefaultTemplate>
      <AgentList data={agentList} />
    </DefaultTemplate>
  );
}
