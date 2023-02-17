import React from "react";
import ContactBand from "../components/ContactBand";
import DefaultTemplate from "../components/DefaultTemplate";
import Hero from "../components/Hero";
import ServicesBand from "../components/ServicesBand";
import StatisticsBand from "../components/StatisticsBand";
import Page from "./api/Page";

function HomePage({ pageData }: any) {
  // add interface.ts
  const title: string = pageData?.[0]?.title.rendered || ""; // error handle this

  return (
    <DefaultTemplate title={title}>
      <Hero />
      <StatisticsBand />
      <ServicesBand />
      <ContactBand />
    </DefaultTemplate>
  );
}

export async function getStaticProps() {
  const data = await Page("home");

  return data;
}

export default HomePage;
