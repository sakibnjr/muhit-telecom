import type { CategoryContent } from "@/_data/categoryContent";

export const deviceCategoryContent: Record<string, CategoryContent> = {
  "mobile-phones": {
    heading: "Mobile Phones in Hili: Smartphones & Keypad Phones",
    metaDescription: "Compare mobile phones at Muhit Telecom, Hili, Dinajpur. Read about SIM support, storage, displays and batteries, then enquire about your chosen model.",
    intro: "A good phone should suit the way you call, work and stay connected. Compare the listed smartphones and keypad phones, then check the exact variant and current availability with Muhit Telecom.",
    guide: [
      {
        title: "Start with calls, apps and the exact variant",
        text: "Decide whether you need a simple calling phone, an Android smartphone for apps, or a second handset for a separate SIM. A keypad can be easier for someone who values tactile buttons and a straightforward contact list. For smartphones, compare the physical RAM and storage rather than treating virtual RAM as equivalent. Similar model names can hide different memory, network or regional variants. Ask for the full model code, supported mobile bands and SIM arrangement, and check compatibility with your Bangladeshi operator before choosing an imported device.",
      },
      {
        title: "Choose a display you can use comfortably",
        text: "Screen size alone does not tell you whether a phone will be comfortable. Consider text readability, outdoor brightness and whether you can reach the keyboard with one hand. A higher refresh rate can make scrolling smoother, but also changes battery consumption. Check speaker loudness, earpiece clarity, vibration and the position of the fingerprint reader. If you use a memory card or wired earphones, verify that the exact handset has the required slot or socket; a shared SIM tray may force a choice between a second SIM and additional storage.",
      },
      {
        title: "Look beyond the battery capacity number",
        text: "Battery life depends on mobile signal, display brightness, background apps and battery condition, not only the printed milliamp-hour figure. Match the charging port and supported protocol to an appropriate adapter, and confirm what comes in the box. A USB-C connector does not automatically mean every fast charger will reach the handset's maximum speed. Stop using a swollen battery and arrange inspection rather than pressing a lifted screen back into place. If your existing phone mainly has poor battery life, a repair assessment may be more useful than immediately replacing it.",
      },
      {
        title: "Check software, ownership and after-sales details",
        text: "Ask about the installed operating system, manufacturer update policy and any regional limitations that affect your apps. Check the IMEI and applicable registration requirements through official channels, and confirm the seller's documentation and warranty terms for the particular unit. Back up contacts and photos before transferring data; keep your account passwords and verification codes private. Test the camera, microphone, charging connection and SIM calling where possible. A case and screen protector must match the precise model, so choose them after confirming the handset rather than relying on a similar-looking camera layout.",
      },
    ],
    faqs: [
      { question: "Can a dual-SIM phone also take a memory card?", answer: "It depends on the tray. Some phones have a dedicated microSD slot; others share that position with the second SIM. Check the exact model and variant before buying." },
      { question: "Should I replace my phone if its battery drains quickly?", answer: "Not necessarily. Battery age, apps and weak signal can all contribute. Ask about a battery assessment first, especially if the handset otherwise meets your needs. A swollen or unusually hot battery needs prompt inspection." },
      { question: "Does every smartphone include a charger?", answer: "No. Box contents vary by model and region. Confirm the included cable and adapter, then match any separate charger to the phone's supported protocol." },
    ],
    related: ["phone-accessories", "adapters-chargers", "power-banks"],
    serviceSlugs: ["battery-replacement", "screen-repair-replacement"],
    enquiryHint: "Send the phone model, preferred storage and whether you need a smartphone or keypad phone.",
  },
  "phone-accessories": {
    heading: "Phone Accessories: Cases, Protection & Everyday Fit",
    metaDescription: "Explore phone accessories at Muhit Telecom in Hili. Check exact-model case fit, screen protector edges, port clearance and practical compatibility.",
    intro: "The right accessory should fit your actual phone, not just a similar name. Use this guide to check cases, screen protection and everyday add-ons before asking about a specific model.",
    guide: [
      {
        title: "Identify the exact phone before choosing a case",
        text: "Find the model name and model number in your phone settings or on its original packaging. A standard, Pro, Plus or regional version can have different dimensions and camera positions even when the names sound almost identical. Check the power and volume buttons, charging opening, microphone holes and speaker grille. A case that needs force to install or presses a button continuously is not a good fit. If you already have a thick screen protector or camera lens cover, mention it because the case edges may overlap or lift that accessory.",
      },
      {
        title: "Balance grip, protection and daily access",
        text: "A soft finish can improve grip, while a rigid frame may help the case retain its shape. Neither material alone proves a particular level of drop protection. Look at corner coverage, raised screen edges and how the camera area rests on a flat table. Extra thickness can make the phone harder to pocket or prevent a clamp mount from closing properly. Check that your existing charging cable fits through the opening without bending at the connector. Remove trapped dust periodically, since grit between the case and phone can mark the surface over time.",
      },
      {
        title: "Match screen protection to the display and sensors",
        text: "Flat glass, curved glass and flexible film suit different screens. Ask whether a protector covers the usable display without blocking the earpiece, front camera or proximity sensor. Under-display fingerprint readers can be sensitive to thickness or adhesive, so verify compatibility and re-enrol fingerprints if the manufacturer recommends it. A protector cannot repair existing cracks or guarantee that a future drop will not damage the panel. If the display is lifting, flickering or losing touch response, arrange an assessment rather than hiding the fault under new glass or a tighter case.",
      },
      {
        title: "Check mounts, adapters and charging interactions",
        text: "For a stand or holder, measure the phone with its case fitted and consider the viewing angle, cable route and stability on your desk. Magnetic accessories need a compatible attachment system; a metal plate added for a car mount may interfere with wireless charging. OTG adapters require support from the phone as well as the right physical connector, and some storage devices draw more power than the phone can provide. Bring your handset or share a clear model reference when enquiring. Confirm product-specific coverage and keep the purchase details instead of assuming every accessory has the same warranty.",
      },
    ],
    faqs: [
      { question: "Will a case for the same series fit my phone?", answer: "Not reliably. Screen size, camera spacing and button locations can change between variants and model years. Match the full phone model, not only the series name." },
      { question: "Can a screen protector affect fingerprint unlocking?", answer: "Yes, particularly with under-display readers. Thickness, adhesive and surface quality matter. Check compatibility with your phone's sensor before fitting one." },
      { question: "Will a magnetic plate work with wireless charging?", answer: "A metal mounting plate can obstruct charging or cause heating. Use accessories specifically designed for your phone's charging and mounting system, following the manufacturer's placement instructions." },
    ],
    related: ["mobile-phones", "adapters-chargers", "wired-earphones"],
    serviceSlugs: ["screen-repair-replacement", "computer-mobile-accessories-sale"],
    enquiryHint: "Share the full phone model and the accessory you need; photos of the camera layout can help confirm fit.",
  },
  "smart-watches": {
    heading: "Smart Watches: Phone Compatibility, Wrist Fit & Features",
    metaDescription: "Compare smart watches at Muhit Telecom, Hili. Understand companion apps, Bluetooth calling, strap fit, battery use and water-resistance limitations.",
    intro: "Choose a smart watch around your phone, your wrist and the features you will actually use. Notifications, calling and fitness tracking each have different setup and battery requirements.",
    guide: [
      {
        title: "Check the companion app before the display",
        text: "A watch's appearance tells you little about how well it will work with your phone. Identify the required companion app and check its supported Android or iOS versions using the official app listing. Some features vary between operating systems, especially message replies, call handling and background notification delivery. Review the permissions requested for contacts, notifications and location, and enable only what the intended feature requires. A watch that pairs in Bluetooth settings may still need a separate app connection to synchronise time, activity records and watch faces correctly.",
      },
      {
        title: "Understand calling and notification limitations",
        text: "Bluetooth calling normally uses a nearby paired phone; it does not mean the watch has an independent SIM or mobile connection. Confirm whether the model has both a microphone and a speaker and whether call audio needs a second Bluetooth pairing. Notification mirroring does not necessarily allow typing replies or opening the full message. Before choosing, consider whether you want quiet alerts at work, hands-free calls at home or simply a readable clock outdoors. Check vibration strength, font size and control placement rather than relying only on a large advertised screen measurement.",
      },
      {
        title: "Treat fit and health information realistically",
        text: "Measure your wrist and check the strap's adjustment range, clasp and replacement attachment size. A sensor needs steady skin contact, but the strap should not cause pressure or irritation. Clean and dry the watch and skin after sweating, following the care instructions for the strap material. Consumer heart-rate, sleep and oxygen estimates are not a medical diagnosis and should not replace professional advice. Water-resistance markings have specific test conditions; do not assume they permit swimming, hot showers or salt water. Ask for the manufacturer's guidance for the exact model before exposing it to water.",
      },
      {
        title: "Plan charging and ongoing use",
        text: "Always-on displays, frequent calls, bright screens and continuous tracking can shorten runtime compared with standby figures. Ask which settings were used for any quoted battery duration and identify the supplied magnetic lead or charging cradle. Similar-looking charging contacts can have different spacing and polarity, so use a compatible replacement rather than forcing another cable into place. Keep the contacts dry and free of debris before charging. Check whether useful watch faces require payment or an account, and confirm product-specific warranty coverage. Keep your phone model and app name ready when asking for setup guidance.",
      },
    ],
    faqs: [
      { question: "Can a Bluetooth calling watch make calls without my phone?", answer: "Normally it needs the paired phone nearby. Independent calling requires a model with supported cellular hardware and a compatible service; Bluetooth calling alone does not provide that." },
      { question: "Are watch health readings suitable for diagnosis?", answer: "Consumer activity and health estimates are not a substitute for medical equipment or clinical advice. Motion, strap fit and skin contact can affect readings." },
      { question: "Can I use any magnetic watch charging cable?", answer: "No. Pin spacing, polarity and voltage requirements can differ. Match the charging lead to the exact watch model and keep the contacts dry." },
    ],
    related: ["mobile-phones", "lifestyle", "tws"],
    serviceSlugs: ["computer-mobile-accessories-sale"],
    enquiryHint: "Tell us your phone model, wrist-size needs and whether calling or fitness tracking is your priority.",
  },
};
