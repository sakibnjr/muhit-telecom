import { audioCategoryContent } from "@/_data/categoryContentAudio";
import { deviceCategoryContent } from "@/_data/categoryContentDevices";
import { powerCategoryContent } from "@/_data/categoryContentPower";
import { everydayCategoryContent } from "@/_data/categoryContentHome";

export interface CategoryContent {
  heading: string;
  metaDescription: string;
  intro: string;
  guide: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
  related: string[];
  serviceSlugs: string[];
  enquiryHint: string;
}

export const categoryContent: Record<string, CategoryContent> = {
  ...audioCategoryContent,
  ...deviceCategoryContent,
  ...powerCategoryContent,
  ...everydayCategoryContent,
};
