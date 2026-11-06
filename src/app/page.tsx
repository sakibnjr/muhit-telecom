import type { Metadata } from "next";
import {
  defaultDescription,
  defaultTitle,
  pageMetadata,
} from "@/_components/seo/metadata";
import { HeroSection } from "@/_components/sections/HeroSection";
import { ValuePropsStrip } from "@/_components/sections/ValuePropsStrip";
import { CategoryGridSection } from "@/_components/sections/CategoryGridSection";
import { PromoBannerSection } from "@/_components/sections/PromoBannerSection";
import { PopularPicksSection } from "@/_components/sections/PopularPicksSection";
import { JustArrivedSection } from "@/_components/sections/JustArrivedSection";
import { ExpertRepairSection } from "@/_components/sections/ExpertRepairSection";
import { RepairWorkflowSection } from "@/_components/sections/RepairWorkflowSection";
import { StoreLocationSection } from "@/_components/sections/StoreLocationSection";

export const metadata: Metadata = pageMetadata({
  title: defaultTitle,
  description: defaultDescription,
  path: "/",
});

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="order-1"><HeroSection /></div>
      <div className="order-2"><ValuePropsStrip /></div>
      <div className="order-4 md:order-3"><CategoryGridSection /></div>
      <div className="order-5 md:order-6"><PromoBannerSection /></div>
      <div className="order-3 md:order-5"><PopularPicksSection /></div>
      <div className="order-6"><JustArrivedSection /></div>
      <div className="order-7"><ExpertRepairSection /></div>
      <div className="order-8"><RepairWorkflowSection /></div>
      <div className="order-9"><StoreLocationSection /></div>
    </div>
  );
}
