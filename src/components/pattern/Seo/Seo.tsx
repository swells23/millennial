import React from "react";
import { DOMAIN } from "../../../data/templateMeta";

export default function Seo({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <>
      <meta name="description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={DOMAIN} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </>
  );
}

Seo.defaultProps = {
  title: "",
  metaDesc: "",
};
