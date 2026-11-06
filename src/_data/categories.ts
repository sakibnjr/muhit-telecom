import type { Category } from "@/_types";
import { productsData } from "@/_data/products";
import { categoryImageCatalog } from "@/_data/categoryImageCatalog";

const definitions: Omit<Category, "id" | "itemCount">[] = [
  {
    slug: "mobile-phones",
    name: "Mobile Phones",
    name_bn: "মোবাইল ফোন",
    icon: "Smartphone",
    image: "/images/products/prod_samsung_a15.webp",
    description:
      "Compare smartphones and keypad phones by network support, battery, display and everyday usability.",
  },
  {
    slug: "adapters-chargers",
    name: "Adapters & Chargers",
    name_bn: "অ্যাডাপ্টার ও চার্জার",
    icon: "Zap",
    image: "/images/products/type-c-fast-charging-cable.webp",
    description:
      "Choose charging adapters and cables by connector, USB Power Delivery support and device requirements.",
  },
  {
    slug: "headsets",
    name: "Headsets",
    name_bn: "হেডসেট",
    icon: "Headphones",
    image: "/images/products/wireless-headphones-bluetooth.webp",
    description:
      "Find the right over-ear or on-ear headset for calls, music and computer use, with fit and microphone advice.",
  },
  {
    slug: "lifestyle",
    name: "Lifestyle",
    name_bn: "লাইফস্টাইল",
    icon: "Sparkles",
    image: "",
    description:
      "Choose everyday tech for your desk and routine by useful features, physical fit and maintenance needs.",
  },
  {
    slug: "neckbands",
    name: "Neckbands",
    name_bn: "নেকব্যান্ড",
    icon: "Headphones",
    image: "",
    description:
      "Compare neckband earphones for secure fit, call clarity, controls and realistic battery expectations.",
  },
  {
    slug: "phone-accessories",
    name: "Phone Accessories",
    name_bn: "ফোন এক্সেসরিজ",
    icon: "Shield",
    image: "/images/products/prod_phone_case.webp",
    description:
      "Check exact-model cases, screen protection, stands and connection accessories before choosing a phone accessory.",
  },
  {
    slug: "power-banks",
    name: "Power Banks",
    name_bn: "পাওয়ার ব্যাংক",
    icon: "BatteryCharging",
    image: "/images/products/prod_powerbank.webp",
    description:
      "Understand usable capacity, USB-C input and output, charging protocols and portable battery safety.",
  },
  {
    slug: "rechargeable-fans",
    name: "Rechargeable Fans",
    name_bn: "রিচার্জেবল ফ্যান",
    icon: "Fan",
    image: "",
    description:
      "Evaluate rechargeable fans by airflow, speed-dependent runtime, charging input and stable placement.",
  },
  {
    slug: "smart-watches",
    name: "Smart Watches",
    name_bn: "স্মার্ট ওয়াচ",
    icon: "Watch",
    image: "/images/products/prod_smartwatch.webp",
    description:
      "Compare wrist fit, companion-app compatibility, notifications and charging requirements for smart watches.",
  },
  {
    slug: "speakers",
    name: "Speakers",
    name_bn: "স্পিকার",
    icon: "Speaker",
    image: "",
    description:
      "Choose speakers by listening space, Bluetooth or wired inputs, voice clarity and power requirements.",
  },
  {
    slug: "tws",
    name: "TWS",
    name_bn: "টিডব্লিউএস",
    icon: "Ear",
    image: "/images/products/prod_tws_earbuds.webp",
    description:
      "Compare true wireless earbuds by ear-tip seal, microphone performance, phone compatibility and case charging.",
  },
  {
    slug: "wired-earphones",
    name: "Wired Earphones",
    name_bn: "তারযুক্ত ইয়ারফোন",
    icon: "Cable",
    image: "",
    description:
      "Match wired earphones to 3.5 mm, USB-C or Lightning devices and check microphone and adapter compatibility.",
  },
];

export const categories: Category[] = definitions.map((category) => ({
  ...category,
  image: categoryImageCatalog[category.slug]?.[0] ?? category.image,
  id: category.slug,
  itemCount: productsData.filter(
    (product) => product.category === category.slug,
  ).length,
}));

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
