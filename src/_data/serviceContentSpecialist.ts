import type { ServiceContent } from '@/_data/serviceContent';

export const specialistServiceContent: ServiceContent[] = [
  {
    slug: 'pc-motherboard-repair',
    title: 'PC & Mobile Motherboard Repair',
    description: 'Discuss no-power, liquid damage and board fault diagnosis in Hili. Repair feasibility, component choices and data risks are assessed before approval.',
    intro: 'A dead laptop, desktop board or phone needs fault isolation before expensive components are replaced. Muhit Telecom in Hakimpur (Hili) accepts enquiries about motherboard diagnosis, including no-power symptoms, charging faults and damage following liquid exposure. The aim is to identify whether a repair is practical for the device’s condition and value. Component-level work is not suitable for every failure, and inspection may conclude that replacement or no further work is the more sensible choice.',
    sections: [
      { title: 'Describe the failure and previous attempts', text: 'Bring the model information and explain whether the fault began during charging, after a spill, after a power interruption or following another repair. On a PC, an adapter, power supply, memory module or peripheral may cause symptoms that look like motherboard failure. On a phone, battery and connector faults also need consideration. The diagnostic scope depends on the device; we do not claim every no-power condition requires an IC replacement or processor work.' },
      { title: 'Repair scope and realistic component choices', text: 'Possible work depends on the damaged circuit and access to suitable components. A quote should distinguish connector replacement, component-level repair and full board replacement. Some parts may be compatible replacements or verified donor components rather than new manufacturer stock; ask what is proposed and why. Extensive corrosion, damaged internal board layers or unavailable chips can make a repair impractical. CPU, storage and security-linked components carry additional risks and must not be treated as routine guaranteed fixes.' },
      { title: 'Liquid damage and data precautions', text: 'After a spill, disconnect external power when safe and stop trying to start or charge the device. Do not apply household heat or assume that drying the outside removes corrosion inside. Back up important files before any repair if the machine remains accessible. For computers, discuss whether storage can remain with you or be disconnected during diagnosis. Phone storage may be soldered and encrypted; repairing power does not guarantee data recovery, and replacing a board may make existing data inaccessible.' },
      { title: 'Agree a staged quote and collection checks', text: 'The catalog price and multi-day turnaround are indicative, with the final estimate depending on testing, damage, replacement parts and any further approval. Confirm diagnostic charges, any stop-work limit and warranty scope before authorising intervention. Do not assume a no-fix-no-fee arrangement unless it has been explicitly agreed. After work, test the original symptom plus relevant ports, charging, startup and sustained normal use. Liquid-damaged equipment may develop additional faults later, even when an initial repair is successful.' },
    ],
    faqs: [
      { question: 'Can every liquid-damaged motherboard be repaired?', answer: 'No. Corrosion depth, damaged layers, chip availability and the device’s value affect feasibility. Inspection may reveal that reliable repair is not realistic, and successful startup does not promise long-term recovery from all liquid damage.' },
      { question: 'Is motherboard repair a data recovery service?', answer: 'Not automatically. Data access depends on the storage and security system as well as the board fault. Tell us if preserving files is your priority before approving any replacement or destructive work.' },
    ],
    relatedSlugs: ['battery-replacement', 'mobile-repair-flash-unlock'],
    categories: [
      { slug: 'adapters-chargers', label: 'Adapters & Chargers', reason: 'Check the correct power supply before assuming a charging circuit has failed.' },
      { slug: 'mobile-phones', label: 'Mobile Phones', reason: 'Compare replacement options if board repair is uneconomical.' },
    ],
  },
  {
    slug: 'mobile-display-replacements',
    title: 'Mobile Display & Frame Replacement',
    description: 'Model-specific display assembly and frame assessment in Hili for curved screens, bent housings and fit problems. Confirm parts and features at inspection.',
    intro: 'A new screen needs a sound mounting surface. If your phone’s housing is bent, its display is lifting or an edge has been crushed, replacing only the panel may leave the original problem unresolved. This service at Muhit Telecom in Hili focuses on display assemblies, frame condition and model-specific fit. It complements our screen fault diagnosis service rather than assuming every cracked display needs the most expensive assembly.',
    sections: [
      { title: 'Inspect the housing as well as the image', text: 'Mention previous drops, repairs and any gap between the glass and frame. Lifting can come from bent housing, failed adhesive or a swollen battery, so the underlying cause must be checked before fitting another screen. Inspection considers mounting points, edge pressure, connectors and signs of liquid ingress. A curved screen or foldable model may need specialist parts or support that is not locally available; acceptance is confirmed individually, not guaranteed by model category.' },
      { title: 'Choose the right assembly for the model', text: 'Some replacement displays are supplied with a frame, while others require transferring the panel or additional components into the existing housing. Ask whether the quote uses a manufacturer service assembly, refurbished panel or compatible alternative. A low-cost part may have different brightness, refresh rate, thickness or fingerprint behaviour. “OLED” on its own does not establish original quality. Availability, calibration requirements and the need to transfer cameras, sensors or buttons should be discussed before selecting a part.' },
      { title: 'Backup and handling before the visit', text: 'Save important files while the phone still responds and keep account recovery details accessible. Do not clamp a lifting display shut or keep charging if swelling is suspected. A cracked curved edge may expose sharp glass, so avoid pressing damaged areas. For foldables, do not repeatedly flex a damaged hinge or remove the inner protective layer yourself. Describe your priority, whether it is restoring daily use, retaining a particular feature or deciding if replacement is more economical.' },
      { title: 'Fitting, feature checks and limitations', text: 'The published starting price and estimated fitting time are only a guide; model-specific assemblies, frame work and parts lead times can change the quote substantially. Confirm total cost and applicable warranty exclusions after inspection. At collection, check edge touch, screen alignment, brightness, supported refresh settings, sensors and fingerprint access where available. We do not guarantee retention of every factory feature or water-resistance rating. Accidental damage, pressure and liquid exposure should be distinguished from any covered part fault.' },
    ],
    faqs: [
      { question: 'Does a display assembly always include a new frame?', answer: 'No. Suppliers package parts differently. Ask whether the quoted item includes the housing frame and which components need transferring; this affects labour, fit and the overall cost.' },
      { question: 'Are curved and foldable displays always available?', answer: 'No. Stock, exact model variant and repair feasibility must be checked first. A specialist or manufacturer service route may be more appropriate, and no repair should be assumed possible before assessment.' },
    ],
    relatedSlugs: ['screen-repair-replacement', 'battery-replacement'],
    categories: [
      { slug: 'phone-accessories', label: 'Phone Accessories', reason: 'Choose a case that fits the repaired frame without stressing display edges.' },
      { slug: 'mobile-phones', label: 'Mobile Phones', reason: 'Compare the full assembly quote with the cost of another handset.' },
    ],
  },
];
