"use client";

import { builder } from "@builder.io/react";
import "@/builder/register"; // load custom components into the editor

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function BuilderInit() {
  return null; // side-effect only
}
