import React from "react";
import {
  ContactBand,
  Hero,
  ServicesBand,
  StatisticsBand,
} from "../components/homepage";
import DefaultTemplate from "../components/layout/DefaultTemplate";
import Page from "./api/Page";
import heroImg from "../images/hero.jpg";
import logo from "../images/logo.png";
import mobileHeroImg from "../images/mobile-hero.jpg";

function HomePage({ pageData, logo, heroImg, mobileHeroImg }: any) {
  // add interface.ts
  const title: string = pageData?.[0]?.title.rendered || "", // error handle this
    metaDesc =
      "Buying a home can be challenging, so let us make it simple. Millennial Realty Investments strives to provide you with first-class servicing for your next real estate venture.";

  return (
    <DefaultTemplate title={title} metaDesc={metaDesc} logo={logo}>
      <Hero heroImg={heroImg} mobileHeroImg={mobileHeroImg} />
      <StatisticsBand />
      <ServicesBand />
      <ContactBand />
    </DefaultTemplate>
  );
}

export async function getStaticProps() {
  const data = await Page("home");

  return { props: { ...data, logo, heroImg, mobileHeroImg } };
}

export default HomePage;
