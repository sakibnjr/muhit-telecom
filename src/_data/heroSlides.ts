import type { SlideData } from "@/_components/sections/SlideItem";

const imagePath = "/images/hero-slider";

export const heroSlides: SlideData[] = [
  {
    id: "gadgets",
    bgImage: `${imagePath}/muhit-telecom-gadgets-collection-banner.webp`,
    imageAlt:
      "Headphones, smartwatch, earbuds, charger and power bank arranged around a blue and white shopping bag",
    title: "Mobile Phones & Everyday Gadgets",
    desc: "Shop genuine smartphones and mobile accessories at Muhit Telecom in Hili.",
    primaryBtn: {
      label: "Explore all categories",
      shortLabel: "Shop now",
      href: "/categories",
    },
    secondaryBtn: {
      label: "Book a repair",
      href: "/services",
      iconType: "wrench",
    },
    badgeText: "4.3 / 5 on Google • Visit us in Hakimpur",
    isStarRating: true,
  },
  {
    id: "smart-watches",
    bgImage: `${imagePath}/muhit-telecom-smart-watches-banner.webp`,
    imageAlt:
      "Rectangular navy smart watch and round silver smart watch on light blue display podiums",
    title: "Smart Watches for Everyday Use",
    desc: "Explore fitness tracking, Bluetooth calling and modern smart watch features.",
    primaryBtn: {
      label: "Explore smart watches",
      shortLabel: "Smart watches",
      href: "/categories/smart-watches",
    },
    secondaryBtn: {
      label: "Lifestyle gadgets",
      href: "/categories/lifestyle",
      iconType: "arrow",
    },
  },
  {
    id: "audio",
    bgImage: `${imagePath}/muhit-telecom-audio-collection-banner.webp`,
    imageAlt:
      "Black over-ear headphones, white TWS earbuds and a navy neckband on blue and white podiums",
    title: "Headsets & Wireless Earbuds",
    desc: "Shop TWS, neckbands and wired earphones for calls and music.",
    primaryBtn: {
      label: "Explore headsets",
      shortLabel: "Headsets",
      href: "/categories/headsets",
    },
    secondaryBtn: {
      label: "Discover TWS",
      href: "/categories/tws",
      iconType: "arrow",
    },
  },
  {
    id: "charging",
    bgImage: `${imagePath}/muhit-telecom-charging-essentials-banner.webp`,
    imageAlt:
      "Graphite power bank, white USB-C wall charger and coiled braided cable on a light blue display",
    title: "Phone Chargers & Power Banks",
    desc: "Browse fast chargers, adapters, cables and power banks for your phone.",
    primaryBtn: {
      label: "Adapters & chargers",
      shortLabel: "Chargers",
      href: "/categories/adapters-chargers",
    },
    secondaryBtn: {
      label: "Power banks",
      href: "/categories/power-banks",
      iconType: "arrow",
    },
  },
  {
    id: "repair",
    bgImage: `${imagePath}/muhit-telecom-mobile-computer-repair-banner.webp`,
    imageAlt:
      "Opened smartphone, replacement battery, precision tools, microscope and computer motherboard on a repair workbench",
    title: "Mobile & Computer Repair in Hili",
    desc: "Get mobile and computer diagnostics, screen replacement and battery repair.",
    primaryBtn: {
      label: "Explore repair services",
      shortLabel: "Repair services",
      href: "/services",
    },
    secondaryBtn: {
      label: "01910-755835",
      href: "tel:+8801910755835",
      iconType: "phone",
    },
  },
  {
    id: "delivery",
    bgImage: `${imagePath}/muhit-telecom-nationwide-delivery-banner.webp`,
    imageAlt:
      "Nationwide delivery illustration with a Bangladesh map, blue van, scooter and parcels",
    title: "Delivery Across Bangladesh",
    desc: "Order online with local pickup in Hili and cash on delivery nationwide.",
    primaryBtn: {
      label: "Shop all gadgets",
      shortLabel: "Shop now",
      href: "/shop",
    },
    secondaryBtn: {
      label: "Delivery enquiries",
      href: "/contact",
      iconType: "arrow",
    },
  },
];
