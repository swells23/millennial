"use client";
import React from "react";
import DefaultTemplate from "../../components/layout/DefaultTemplate";
import AgentList from "../../components/agents/AgentList";

export default function Loading() {
  return (
    <DefaultTemplate>
      <AgentList data={undefined} />
    </DefaultTemplate>
  );
}
