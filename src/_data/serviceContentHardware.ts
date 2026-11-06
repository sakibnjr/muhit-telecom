import type { ServiceContent } from '@/_data/serviceContent';

export const hardwareServiceContent: ServiceContent[] = [
  {
    slug: 'battery-replacement',
    title: 'Phone Battery Replacement',
    description: 'Ask about phone battery diagnosis and replacement in Hili, Dinajpur. Compare compatible parts, backup precautions and inspection-based estimates.',
    intro: 'A phone that needs charging several times a day does not always need a new battery. At Muhit Telecom in Hakimpur (Hili), battery replacement starts with understanding your model, charging habits and symptoms. Sudden shutdowns, a lifting screen or unusual heat deserve attention, but a damaged cable, charging port or software problem can produce similar behaviour. Bring the phone and the charger you normally use so the likely cause can be assessed together.',
    sections: [
      { title: 'Battery diagnosis before replacement', text: 'Tell us when the drain began, whether the phone was dropped or exposed to liquid, and if the issue started after an update. Inspection can include battery condition information where the device provides it, charging behaviour and visible swelling. A battery-health percentage is only one clue; it does not prove the rest of the charging circuit is healthy. If board damage appears more likely, discuss further diagnosis before buying a replacement cell.' },
      { title: 'Choosing a suitable replacement cell', text: 'The available choices depend on the exact model and current supply. Ask whether a quoted battery is a manufacturer service part or a compatible third-party part, and what evidence supports its origin. Capacity claims, connector fit and protection circuitry matter more than an oversized capacity label. Some phones display a parts notification or require manufacturer pairing procedures. We explain known limitations rather than promising every replacement will show a particular health percentage.' },
      { title: 'Prepare safely and protect your data', text: 'Back up photos, contacts, authenticator recovery information and important messages before handing over the phone. Routine battery fitting is not intended to erase storage, but any repair carries risk. If the battery is swollen, stop charging, avoid pressing the screen down and do not puncture or heat the device. Contact the shop about safe handling instead of continuing to use it. Replacement adhesive does not guarantee restoration of the original water-resistance rating.' },
      { title: 'Quote, fitting and collection checks', text: 'The listed starting price and turnaround are indicative, not a fixed offer for every iPhone, Samsung, Redmi or other model. Inspection, parts availability, adhesive work and any charging fault affect the final quotation and collection time. Agree the part, labour charge and applicable warranty exclusions before authorising work. At collection, check charging, touch, buttons and normal startup. Continued overheating or abnormal drain needs reassessment rather than repeated charging to force improvement.' },
    ],
    faqs: [
      { question: 'Will a new battery fix every fast-drain problem?', answer: 'No. Poor signal, background apps, a faulty charger or a motherboard fault may also cause drain. Battery replacement is recommended only when the findings support it; longer runtime cannot be guaranteed for an untested device.' },
      { question: 'Is the advertised battery warranty automatic?', answer: 'No. Ask which part is available and confirm the written coverage at inspection. Duration, qualifying faults, physical damage and liquid-damage exclusions depend on the agreed battery and service terms.' },
    ],
    relatedSlugs: ['pc-motherboard-repair', 'mobile-repair-flash-unlock'],
    categories: [
      { slug: 'adapters-chargers', label: 'Adapters & Chargers', reason: 'Check a compatible charger when charging performance is inconsistent.' },
      { slug: 'power-banks', label: 'Power Banks', reason: 'Compare portable charging options after the phone is safe to charge.' },
    ],
  },
  {
    slug: 'screen-repair-replacement',
    title: 'Screen Repair & Replacement',
    description: 'Explore cracked screen and touch fault assessment in Hili. Understand glass-only repair, display assemblies, parts trade-offs and inspection-based quotes.',
    intro: 'Cracked glass, black patches, flickering and ghost touches can make a phone difficult or unsafe to use. Screen repair at Muhit Telecom in Hili begins by distinguishing damage to the outer glass from failure of the touch layer or display panel. A phone that rings with a black screen may have a panel fault, but connector or board problems are also possible. Describing what happened before the fault helps narrow the repair scope.',
    sections: [
      { title: 'Separate glass damage from panel faults', text: 'Where practical, inspection checks the visible image, touch response across the screen, brightness and damage around the edges. Glass-only work may be considered only when the underlying display and touch system remain suitable and the required process is available. Green lines, spreading ink-like patches or dead touch zones often require a different approach. We do not assume every cracked phone qualifies for a cheaper glass repair or that all display lines share one cause.' },
      { title: 'Understand display part options', text: 'Depending on the model, options may include a manufacturer service assembly, a refurbished original panel or a compatible aftermarket assembly. Ask which option is actually being quoted. Brightness, colour, refresh rate, viewing angle and power use can differ, especially when a lower-cost LCD is proposed for a phone designed for OLED. Availability of fingerprint support, calibration and parts pairing must be checked; original appearance and every software feature cannot simply be promised.' },
      { title: 'Before handing over a cracked phone', text: 'Back up important files while the device still works, and avoid entering passwords if ghost touches are making unintended selections. Do not peel off loose shards or press on exposed areas. Mention any liquid exposure or previous screen repair because hidden corrosion or damaged connectors can change the quote. If the frame is bent, fitting a new panel alone may not solve lifting or pressure damage; a display-and-frame assessment may be more appropriate.' },
      { title: 'Approval and checks after installation', text: 'Starting prices and fitting times are estimates to confirm after inspection and parts checks. Agree the part grade, any additional frame work, total cost and warranty conditions before proceeding. On collection, test typing near all edges, brightness adjustment, calls, proximity behaviour and any supported biometric function. New adhesive is not a promise of factory water resistance. Physical impact, liquid exposure and unrelated board faults may be outside the agreed warranty, so request clear written terms.' },
    ],
    faqs: [
      { question: 'How is this different from display-and-frame replacement?', answer: 'This service focuses on diagnosing glass, image and touch faults. Our dedicated display replacement page covers housing fit, curved assemblies and frame-related damage where a full assembly may be the better option.' },
      { question: 'Can my photos be kept during a screen repair?', answer: 'Screen replacement normally does not require erasing storage, but data preservation is not guaranteed. Back up first if possible and discuss access restrictions before work; an unusable screen can limit backup options.' },
    ],
    relatedSlugs: ['mobile-display-replacements', 'battery-replacement'],
    categories: [
      { slug: 'phone-accessories', label: 'Phone Accessories', reason: 'Find a model-matched case or protector after the screen fit is checked.' },
      { slug: 'mobile-phones', label: 'Mobile Phones', reason: 'Compare replacement phones if the repair quote exceeds your budget.' },
    ],
  },
];
