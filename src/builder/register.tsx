"use client";

import { Builder } from "@builder.io/react";
import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { Hubs } from "@/components/Hubs";
import { Fleet } from "@/components/Fleet";
import { Partners } from "@/components/Partners";
import { Contact } from "@/components/Contact";

// Debug: confirm registry loads in the editor iframe
console.log("[Axess] Builder registry loaded");

Builder.registerComponent(Hero, {
  name: "Hero",
  inputs: [
    { name: "headline", type: "string" },
    { name: "subtext", type: "longText" },
    { name: "ctaLabel", type: "string" },
    { name: "ctaHref", type: "string" },
  ],
});

Builder.registerComponent(Pillars, {
  name: "Pillars",
  inputs: [
    { name: "title", type: "string" },
    {
      name: "items",
      type: "list",
      subFields: [
        { name: "title", type: "string" },
        { name: "desc", type: "longText" },
      ],
    },
  ],
});

Builder.registerComponent(Hubs, {
  name: "Hubs",
  inputs: [
    {
      name: "hubs",
      type: "list",
      subFields: [
        { name: "city", type: "string" },
        { name: "kpi", type: "string" },
      ],
    },
  ],
});

Builder.registerComponent(Fleet, {
  name: "Fleet",
  inputs: [
    {
      name: "vehicles",
      type: "list",
      subFields: [
        { name: "name", type: "string" },
        { name: "range", type: "string" },
        { name: "seats", type: "number" },
        { name: "use", type: "string" },
      ],
    },
  ],
});

Builder.registerComponent(Partners, {
  name: "Partners",
  inputs: [
    { name: "blurb", type: "longText" },
    { name: "labels", type: "list", subFields: [{ name: "item", type: "string" }] },
  ],
});

Builder.registerComponent(Contact, {
  name: "Contact",
  inputs: [
    { name: "email", type: "string", defaultValue: "info@axess.xyz" },
    { name: "hq", type: "string", defaultValue: "Miami, FL" },
    { name: "title", type: "string", defaultValue: "Contact Us" },
    { name: "blurb", type: "longText" },
  ],
});
