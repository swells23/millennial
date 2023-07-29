import { Metadata } from "next";
import React from "react";
import { DOMAIN } from "../../data/templateMeta";
import GetAgents from "../../pages/api/GetAgents";
import AgentPageClient from "./page-client";

const META_TITLE = "Agents - Millennial Realty & Investments LLC";
const META_DESCRIPTION =
  "Our exceptional team of brokers work hard to provide world-class services to our clients.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: DOMAIN,
    siteName: META_TITLE,
    type: "website",
  },
};

export default async function AgentPage() {
  const agentList = await getData();

  return <AgentPageClient agentList={agentList} />;
}

async function getData() {
  const agentList = await GetAgents();

  return agentList;
}
