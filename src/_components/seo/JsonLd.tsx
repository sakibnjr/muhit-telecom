import { siteConfig } from "@/_data/siteConfig";
import { defaultDescription, siteUrl } from "@/_components/seo/metadata";

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ElectronicsStore", "LocalBusiness"],
        "@id": `${siteUrl}/#store`,
        name: siteConfig.name,
        alternateName: siteConfig.name_bn,
        description: defaultDescription,
        telephone: siteConfig.phoneIntl,
        url: siteUrl,
        currenciesAccepted: "BDT",
        paymentAccepted: "Cash, Cash on Delivery, bKash, Nagad, Rocket",
        logo: `${siteUrl}/logo.svg`,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.market,
          addressLocality: siteConfig.address.upazila,
          addressRegion: siteConfig.address.district,
          postalCode: siteConfig.address.postalCode,
          addressCountry: "BD",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 25.279375,
          longitude: 89.01175,
        },
        areaServed: [
          { "@type": "City", name: "Hakimpur (Hili)" },
          { "@type": "AdministrativeArea", name: "Dinajpur" },
          { "@type": "Country", name: "Bangladesh" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "10:00",
            closes: "21:30",
          },
        ],

        sameAs: [siteConfig.facebook, siteConfig.address.googleMapsUrl],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteConfig.name,
        alternateName: siteConfig.name_bn,
        publisher: { "@id": `${siteUrl}/#store` },
        inLanguage: "en",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteUrl}/shop?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
