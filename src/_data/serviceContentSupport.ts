import type { ServiceContent } from '@/_data/serviceContent';

export const supportServiceContent: ServiceContent[] = [
  {
    slug: 'mobile-country-unlock',
    title: 'Mobile Country & Carrier Unlock Support',
    description: 'Ownership-verified carrier unlock guidance in Hili for imported phones. Eligibility, network compatibility, costs and timing require individual checks.',
    intro: 'An imported phone displaying “SIM not supported” may be restricted to its original carrier. Muhit Telecom in Hakimpur (Hili) can help assess the message and discuss permitted carrier or manufacturer support routes. Country of purchase alone does not establish that a device can be unlocked. Carrier policy, account standing, ownership records and the exact model all matter. There is no automatic eligibility, universal unlock method or guaranteed successful outcome.',
    sections: [
      { title: 'Check what is actually blocking service', text: 'Bring the exact model number, original carrier details if known, proof of ownership and the message shown with your Bangladeshi SIM. A damaged SIM reader, inactive SIM, unsupported radio bands or a local network registration issue can resemble a carrier lock. These are different problems with different remedies. Even a legitimately unlocked handset may lack the bands or features needed for reliable service on a particular operator in your area.' },
      { title: 'Ownership and permitted support only', text: 'We require ownership verification and will only discuss support allowed by the carrier, manufacturer and applicable rules. A financed, reported lost, stolen, blacklisted or otherwise ineligible phone cannot be made eligible by a shop promise. We do not offer IMEI alteration, fraud-enabling workarounds or bypasses of activation locks and account security. If the original carrier requires the account holder to apply, the owner must follow that process directly.' },
      { title: 'Prepare records without exposing credentials', text: 'Back up your phone before any approved troubleshooting and keep purchase documents available. Do not send account passwords, verification codes or identity documents through the public booking description. Ask how any required records should be presented and what information is necessary. A carrier unlock is not the same as removing a screen passcode, Google verification or Apple Activation Lock. Those issues require the relevant account recovery or authorised support route instead.' },
      { title: 'Confirm eligibility, fees and timing first', text: 'The catalog starting amount and time range are indicative only. An eligibility check, carrier response, account requirements or a refusal can change both the scope and the schedule. Confirm whether any assessment charge applies, what the proposed support includes and how unsuccessful requests are handled before agreeing to proceed. Parts are generally not involved in an official carrier request; replacing hardware does not change the original carrier’s policy. No lifetime or all-network compatibility guarantee is implied.' },
    ],
    faqs: [
      { question: 'Will unlocking make any imported phone work on all local SIMs?', answer: 'No. Eligibility is carrier-specific, and successful unlocking does not add missing radio bands, resolve a blacklist or complete required local registration. Check model compatibility and operator requirements separately.' },
      { question: 'Can you remove someone else’s account or unpaid carrier restriction?', answer: 'No. We require legitimate ownership and permitted support. The original account holder, carrier, seller or manufacturer must resolve account, financing and security restrictions through their authorised procedures.' },
    ],
    relatedSlugs: ['mobile-repair-flash-unlock', 'pc-motherboard-repair'],
    categories: [
      { slug: 'mobile-phones', label: 'Mobile Phones', reason: 'Compare locally compatible alternatives if an imported device is ineligible.' },
      { slug: 'phone-accessories', label: 'Phone Accessories', reason: 'Choose accessories by the exact regional handset model.' },
    ],
  },
  {
    slug: 'mobile-repair-flash-unlock',
    title: 'Mobile Software Repair & Recovery Support',
    description: 'Bootloop diagnosis, supported firmware recovery and ownership-verified account recovery guidance in Hili. Data loss risks and eligibility explained.',
    intro: 'A phone stuck on its startup logo, repeatedly restarting or failing after an update may need software diagnosis rather than immediate replacement. Muhit Telecom in Hili assesses the symptoms and explains supported recovery options for your exact device. Despite the legacy “flash and unlock” service name, this is not an offer to bypass ownership checks or security protections. Legitimate ownership and manufacturer-permitted support are required before recovery work can be considered.',
    sections: [
      { title: 'Find out whether the fault is software', text: 'Tell us about recent updates, low storage, failed installations, drops, liquid exposure and previous repair attempts. We may need to distinguish a corrupted operating system from a weak battery, damaged storage or board fault. A bootloop does not prove that flashing will help. If the phone cannot maintain power or its storage is failing, repeated write attempts can be unhelpful; the next step may be hardware assessment rather than another reset.' },
      { title: 'Supported firmware and recovery scope', text: 'Where supported, options may include official recovery tools, a manufacturer-approved update or reinstalling firmware matched to the precise model and region. The correct package matters: a similar model name does not guarantee compatibility. We do not promise custom ROM installation, bootloader changes or retention of payment, banking and enterprise features. Parts are not normally needed for software recovery, but any discovered hardware fault receives a separate explanation and quotation before additional work.' },
      { title: 'Accounts, ownership and security boundaries', text: 'Bring proof of ownership and use your own account recovery details. Forgotten passwords, Google device verification, Apple Activation Lock, manufacturer accounts, enterprise MDM and financing restrictions must follow the relevant authorised process. We do not bypass anti-theft protections, remove someone else’s account or defeat employer controls. Business-managed devices require the organisation’s authorised administrator. Recovering an account may depend on the provider’s identity checks and waiting period, so eligibility and completion cannot be guaranteed.' },
      { title: 'Backup and consent before a reset', text: 'A reset or firmware reinstall can erase photos, messages, apps and locally stored authentication data. Back up accessible files and confirm that you can sign in again before approving a destructive procedure. Recovery of erased encrypted data is not promised. The listed price and time are estimates subject to inspection, download availability and device condition. Agree the proposed steps, erasure risk, any diagnostic fee and applicable service terms first, then check startup, connectivity and normal app use on collection.' },
    ],
    faqs: [
      { question: 'Can flashing recover my forgotten passcode without losing files?', answer: 'Not reliably. Modern encryption and security rules may prevent access without the correct credentials. An authorised reset may erase the device, and account verification can still be required afterward.' },
      { question: 'Will reinstalling software cure every restart problem?', answer: 'No. Battery, storage or motherboard faults can cause similar symptoms. We recommend a supported software step only when appropriate and explain when further hardware diagnosis is needed.' },
    ],
    relatedSlugs: ['pc-motherboard-repair', 'battery-replacement', 'mobile-country-unlock'],
    categories: [
      { slug: 'phone-accessories', label: 'Phone Accessories', reason: 'Ask about compatible cables for authorised transfers and backups.' },
      { slug: 'mobile-phones', label: 'Mobile Phones', reason: 'Compare alternatives if a device no longer receives usable software support.' },
    ],
  },
];
