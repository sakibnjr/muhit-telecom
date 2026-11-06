import { servicesData } from "@/_data/services";
import { hardwareServiceContent } from "@/_data/serviceContentHardware";
import { supportServiceContent } from "@/_data/serviceContentSupport";
import { specialistServiceContent } from "@/_data/serviceContentSpecialist";
import { commerceServiceContent } from "@/_data/serviceContentCommerce";

export type ServiceContent = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
  categories: { slug: string; label: string; reason: string }[];
};

export const serviceContent: ServiceContent[] = [
  ...hardwareServiceContent,
  ...supportServiceContent,
  ...specialistServiceContent,
  ...commerceServiceContent,
];

export function getServiceContent(slug: string) {
  return serviceContent.find((content) => content.slug === slug);
}

export function getServicePage(slug: string) {
  const service = servicesData.find((item) => item.slug === slug);
  const content = getServiceContent(slug);
  return service && content ? { service, content } : undefined;
}
