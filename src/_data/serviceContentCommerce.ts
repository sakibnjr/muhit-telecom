import type { ServiceContent } from '@/_data/serviceContent';

export const commerceServiceContent: ServiceContent[] = [
  {
    slug: 'mobile-multimedia-downloading',
    title: 'Authorised Multimedia Transfer & Setup',
    description: 'Transfer your owned or authorised audio, video and documents to compatible phones and storage in Hili. File formats, permissions and backup explained.',
    intro: 'Moving a personal audio collection, family videos or educational files onto a phone or memory card can be confusing when formats and storage limits differ. Muhit Telecom in Hili offers enquiries about authorised multimedia transfer and basic file organisation. Bring content you own or are permitted to copy, along with the device you want to use. This is not a promise to supply copyrighted movies, commercial music libraries, paid games or subscriptions without permission.',
    sections: [
      { title: 'Confirm content rights and the destination', text: 'Suitable requests can include your own recordings, family media, public-domain material and files distributed under a licence that permits the requested copying. Permission to stream a video does not necessarily allow downloading or transferring it. We do not bypass paywalls, DRM, subscription rules or account security. Explain where the files came from and what rights apply before transfer begins; if permission is unclear, the content cannot be treated as automatically eligible.' },
      { title: 'Check formats, capacity and storage health', text: 'A keypad phone may accept different audio or video formats from an Android handset, and an older player may not read a large memory card or a particular file system. We discuss the destination model, available capacity, folder layout and sample playback before a larger transfer. A corrupt or unreliable card may need replacement rather than repeated copying. Compatible branded storage or an adapter can be considered if available, with its separate price and terms confirmed first.' },
      { title: 'Back up originals and protect private files', text: 'Keep another copy of your original collection before bringing a card or USB drive for work. Formatting erases existing files, so it should happen only after you understand and approve that step. Tell us which folders must remain untouched and avoid including sensitive documents that are not needed for the transfer. File checks cannot guarantee a device is free of every threat, and copying media is not the same as recovering deleted or physically damaged storage.' },
      { title: 'Agree the transfer and test playback', text: 'The catalog starting amount and short turnaround are indicative only. File volume, transfer speed, card condition, format conversion where permitted and compatibility checks affect the final cost and timing. Confirm the requested folders and any separately priced storage before proceeding. Test a representative audio file and video on the actual target device before leaving. A successful copy does not guarantee every codec will play, and platform-controlled downloads may remain usable only within the original authorised app.' },
    ],
    faqs: [
      { question: 'Can you load any movie, song or paid game I request?', answer: 'No. Only owned, public-domain or appropriately licensed content can be considered. We do not provide pirated libraries, cracked applications or methods to defeat download restrictions.' },
      { question: 'Can you recover files deleted from my memory card?', answer: 'Ordinary transfer does not include data recovery. Stop writing new files to the card and explain the situation first. Recovery may be impossible, and no outcome is guaranteed.' },
    ],
    relatedSlugs: ['computer-mobile-accessories-sale', 'mobile-repair-flash-unlock'],
    categories: [
      { slug: 'phone-accessories', label: 'Phone Accessories', reason: 'Ask about compatible transfer cables, adapters and available storage.' },
      { slug: 'speakers', label: 'Speakers', reason: 'Compare playback devices for audio you are authorised to use.' },
      { slug: 'wired-earphones', label: 'Wired Earphones', reason: 'Check the correct connector for private listening on your phone.' },
    ],
  },
  {
    slug: 'computer-mobile-accessories-sale',
    title: 'Computer & Mobile Accessories Advice',
    description: 'Choose compatible chargers, cables, audio and everyday accessories in Hili. Confirm device support, stock, pricing and product-specific warranty terms.',
    intro: 'A useful accessory is one that actually works with your device and daily routine. At Muhit Telecom in Hakimpur (Hili), you can ask about mobile and computer accessories with your model, connector and intended use in mind. Rather than assuming the highest advertised wattage or newest wireless label is the best choice, compare the requirements that matter. Available products, brands, prices and warranty coverage must be confirmed for the specific item.',
    sections: [
      { title: 'Start with the compatibility question', text: 'Bring your phone, laptop or the exact model information where possible. For a charging problem, the cable, adapter, port and battery may each need consideration; buying another accessory will not fix a damaged internal circuit. Audio choices depend on the device’s socket, Bluetooth support and whether a USB-C port supports the required adapter. Computer peripherals can also depend on operating system support, available ports and power requirements. Explain the symptom before deciding to replace a product.' },
      { title: 'Compare specifications instead of slogans', text: 'For chargers and power banks, compare supported charging protocols, usable ports and the cable rating as well as headline capacity or wattage. The phone decides how much power it can accept, so a higher-rated adapter does not guarantee faster charging. For headsets, speakers and earbuds, consider fit, microphone use, connectivity and charging method. Ask which specifications are documented by the manufacturer and which features can be checked with your device before purchase.' },
      { title: 'Brand, replacement and warranty choices', text: 'Stock can include different brands and price levels; confirm the actual item, packaging, supplier information and applicable product terms rather than assuming every accessory carries the same official warranty. A compatible alternative is not the same as a manufacturer-original replacement. Keep the receipt and ask about claim procedures, covered faults and exclusions. The service catalog’s indicative warranty period does not automatically apply to every cable, charger or peripheral. Special-order availability and delivery arrangements require separate confirmation.' },
      { title: 'Setup, data care and the final quote', text: 'The listed starting amount is a guide to entry-level accessories, not a fixed bundle or a repair fee covering every item. Final price and pickup timing depend on the chosen product, stock and any agreed setup. Back up data before moving files, formatting storage or pairing software that could change settings. Avoid sharing account passwords during a basic accessory demonstration. Before leaving, check fit, charging or audio operation as appropriate and clarify whether additional adapters or batteries are needed.' },
    ],
    faqs: [
      { question: 'Does a fast charger guarantee maximum speed on my phone?', answer: 'No. The adapter, cable and phone must support compatible protocols, and battery temperature and charge level affect speed. Confirm the model and supported combination rather than relying on wattage alone.' },
      { question: 'Do all accessories have a one-year replacement warranty?', answer: 'No. Warranty and replacement eligibility are product-specific and may depend on the supplier and fault. Confirm the written terms for your chosen item; the catalog estimate is not automatic coverage.' },
    ],
    relatedSlugs: ['battery-replacement', 'mobile-multimedia-downloading'],
    categories: [
      { slug: 'adapters-chargers', label: 'Adapters & Chargers', reason: 'Match charging protocols and connector requirements.' },
      { slug: 'headsets', label: 'Headsets', reason: 'Compare microphone and listening options for work or calls.' },
      { slug: 'tws', label: 'TWS', reason: 'Explore true wireless earbuds and device compatibility.' },
      { slug: 'neckbands', label: 'Neckbands', reason: 'Consider a connected-earpiece alternative for daily listening.' },
      { slug: 'smart-watches', label: 'Smart Watches', reason: 'Check phone app and operating system requirements before choosing a watch.' },
    ],
  },
];
