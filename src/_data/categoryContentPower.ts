import type { CategoryContent } from "@/_data/categoryContent";

export const powerCategoryContent: Record<string, CategoryContent> = {
  "adapters-chargers": {
    heading: "Adapters & Chargers: Match Your Port, Protocol & Power",
    metaDescription: "Compare adapters and chargers at Muhit Telecom in Hili. Check USB-C PD, cable ratings, device compatibility and safe charging before choosing.",
    intro: "Charging performance depends on the adapter, cable and device working together. Start with your device's supported input rather than choosing an adapter only by its largest wattage number.",
    guide: [
      {
        title: "Match the connector and charging protocol",
        text: "Identify whether your device needs USB-C, Lightning, Micro-USB or a dedicated barrel connector. Then check the charging protocol: USB Power Delivery, PPS and proprietary fast-charging systems are not interchangeable promises of maximum speed. A USB-C socket describes the connector shape, not every supported voltage or feature. For an older iPhone with Lightning, the cable requirements differ from a USB-C iPhone. Share the exact phone, tablet or laptop model when asking for advice so the adapter's output profiles can be compared with the manufacturer's requirements rather than guessed from the brand alone.",
      },
      {
        title: "Read the output label and cable rating together",
        text: "An adapter may list several voltage and current combinations. Maximum watts are calculated from the supported combination, but your device negotiates the power it accepts. Multi-port chargers often divide their total output when more than one device is connected, so inspect the simultaneous-use ratings. For higher-power USB-C charging, choose a cable with the appropriate current rating and electronic marking where required. A charging cable may also offer only basic data transfer; fast charging, video output and high-speed data are separate capabilities that need explicit support from the cable and both devices.",
      },
      {
        title: "Separate USB adapters from dedicated power supplies",
        text: "A laptop or router supply with a round barrel plug needs the correct output voltage, polarity, connector dimensions and adequate current capacity. A plug that physically fits can still be electrically wrong. Do not substitute a random adapter or use a passive USB cable to power equipment that expects a different voltage. GaN describes a component technology that can help make a charger compact; it does not prove authenticity or safe design by itself. Look for a legible model label and manufacturer documentation, and confirm the adapter's mains input rating and plug arrangement before use.",
      },
      {
        title: "Protect the cable, socket and battery",
        text: "Use a stable wall socket and avoid loose connections, damaged insulation or strained cable ends. Mild warmth can occur during charging, but unusual heat, burning smells, crackling or discolouration are reasons to disconnect safely and stop using the equipment. Keep the adapter uncovered and away from wet surfaces. If several known-compatible chargers fail on the same phone, the issue may be the charging port or battery rather than insufficient wattage. Ask for an assessment instead of repeatedly buying stronger adapters. Confirm which cable is included and read the applicable warranty terms before purchasing a charging combination.",
      },
    ],
    faqs: [
      { question: "Will a higher-wattage USB-C PD charger force too much power into my phone?", answer: "With compliant, compatible USB-C PD equipment, the phone negotiates the power it accepts. Higher advertised wattage does not itself make charging faster; the cable and phone must support the required profile." },
      { question: "Can I use a phone charger for a router?", answer: "Not by connector fit alone. A router needs its specified voltage, polarity and current capability. Use a compatible supply rather than improvising a connection." },
      { question: "Why does charging slow down when I use two ports?", answer: "Many multi-port chargers redistribute their total output between connected devices. Check the model's shared-output table, not only the single-port maximum." },
    ],
    related: ["power-banks", "mobile-phones", "phone-accessories"],
    serviceSlugs: ["battery-replacement", "computer-mobile-accessories-sale"],
    enquiryHint: "Share your device model, connector type and a photo of the old adapter's input/output label if available.",
  },
  "power-banks": {
    heading: "Power Banks: Usable Capacity, Fast Charging & Safety",
    metaDescription: "Explore power banks at Muhit Telecom, Hili. Compare usable energy, USB-C input/output, PD compatibility and portable battery care before enquiring.",
    intro: "A portable battery should cover your real charging needs without unnecessary weight. Compare capacity, output profiles and recharge requirements, then confirm the particular model you want.",
    guide: [
      {
        title: "Compare energy, not just the mAh headline",
        text: "A power bank's milliamp-hour figure is usually measured at the internal battery voltage, while the phone charges through a converted USB output. Conversion losses and the phone's own charging behaviour reduce the energy that reaches its battery. That means dividing the advertised capacity by your phone's capacity does not give a reliable number of full charges. Compare watt-hours where provided, consider how much top-up you need during a day, and balance that against weight. A compact unit can be easier to carry regularly than a larger battery you leave at home.",
      },
      {
        title: "Check which ports charge devices and which recharge the bank",
        text: "Some USB-C sockets are input-only, while others support both input and output. Read the label or specification rather than assuming the connector works in both directions. Check USB Power Delivery, PPS or other protocol support against your phone's requirements, and use a suitably rated cable. If you want to charge a laptop, verify the required voltage profile and sustained output, not simply a high combined wattage. When two devices share the bank, the available output may fall or switch protocols, so inspect the simultaneous-output rating before planning around fast charging.",
      },
      {
        title: "Plan the power bank's own recharge cycle",
        text: "A large battery can take a long time to refill through a low-power adapter. Check its maximum input rating, the recommended charger and whether a cable is included. Passthrough charging, where the bank is being charged while powering another device, should only be used if explicitly supported by the manufacturer. It may generate additional heat and is not automatically an uninterrupted backup supply for a router. Small devices such as earbuds can also need a low-current mode to prevent automatic shutoff. Confirm those features for the exact model rather than treating all portable batteries as equivalent.",
      },
      {
        title: "Carry and store lithium batteries responsibly",
        text: "Keep the bank away from direct sun, a hot parked vehicle, moisture and metal objects that could damage or short its ports. Do not use a unit with swelling, a cracked enclosure, leaking material or unusual odour; arrange safe disposal through an appropriate battery collection channel. Store it according to the manufacturer's charge and temperature advice when not in regular use. For flights, check the airline's current watt-hour limits and cabin-baggage rules before travelling. Keep the capacity label readable and retain purchase details so any warranty enquiry can identify the exact unit and its condition.",
      },
    ],
    faqs: [
      { question: "Will a 10,000 mAh bank fully charge a 5,000 mAh phone twice?", answer: "Not necessarily. The figures may be measured at different voltages, and conversion losses reduce delivered energy. Phone use during charging also changes the result." },
      { question: "Does every USB-C power bank support laptop charging?", answer: "No. Check whether USB-C supports output and whether its voltage profiles and wattage meet the laptop's charging requirements. The cable must be suitable as well." },
      { question: "Can I take a power bank on a flight?", answer: "Rules depend on watt-hours and the airline's current policy. Check directly before travel; power banks are generally subject to cabin-baggage restrictions rather than ordinary checked-baggage treatment." },
    ],
    related: ["adapters-chargers", "mobile-phones", "tws"],
    serviceSlugs: ["battery-replacement", "computer-mobile-accessories-sale"],
    enquiryHint: "Tell us which devices you need to charge, how long you will be away from a socket and your preferred size.",
  },
  "rechargeable-fans": {
    heading: "Rechargeable Fans: Airflow, Runtime & Charging Advice",
    metaDescription: "Read rechargeable fan buying advice from Muhit Telecom, Hili. Compare airflow, speed-dependent runtime, charging inputs and safe placement; enquire for options.",
    intro: "Choose a rechargeable fan for the space and duration you need to cool, not only the battery number on its box. Ask about the exact model and current options before planning a purchase.",
    guide: [
      {
        title: "Choose a useful airflow pattern for your space",
        text: "A small desk fan is intended for personal airflow, while a larger table or standing model may circulate air over a wider area. Blade diameter alone does not establish performance; the motor, grille and speed settings matter too. Consider the distance between the fan and the person using it, whether the head tilts and whether oscillation is actually provided. Check the lowest speed as well as the highest, particularly for a quiet desk or sleeping area. A fan moves air rather than lowering room temperature like an air conditioner, so ventilation still matters.",
      },
      {
        title: "Read runtime claims alongside the speed setting",
        text: "Battery duration usually changes substantially with fan speed. A headline runtime measured on the lowest setting may not represent the airflow you need during a power interruption. Ask for the stated duration at each speed, the battery's voltage and capacity, and whether lights or other added features were used during testing. Battery age and charging habits also affect performance over time. For a longer evening of use, compare the realistic working duration with how often you can recharge rather than assuming a larger printed mAh value guarantees proportionally longer useful airflow.",
      },
      {
        title: "Verify the charging method and operating modes",
        text: "Some rechargeable fans use USB charging, while others require a dedicated adapter or mains lead. A USB-C socket does not automatically support phone-style fast charging, so follow the specified voltage and current. Confirm whether the fan can run while charging and whether that operating mode is recommended; this should not be assumed from the presence of a battery. If a power bank is part of your backup plan, check the fan's input needs and the bank's low-current behaviour. Identify the correct replacement charger before purchase, especially when the fan uses a less common connector.",
      },
      {
        title: "Prioritise stable placement and battery care",
        text: "Choose a stable base and keep loose cloth, hair and fingers away from the grille. A clip model needs a surface within its stated thickness range and a secure grip that will not slip under vibration. Keep the fan dry, leave charging ventilation unobstructed and stop use if the battery swells or the housing becomes unusually hot. Switch off and disconnect before cleaning, and follow the manual rather than opening the battery compartment yourself. Ask whether the battery is serviceable and what coverage applies to it separately from the motor. Confirm availability and specifications before making travel or backup arrangements.",
      },
    ],
    faqs: [
      { question: "Does the advertised runtime apply at full speed?", answer: "Often it is measured on a lower setting. Ask for speed-specific figures and whether extras such as a light were switched off during the stated test." },
      { question: "Can I operate a rechargeable fan while charging it?", answer: "Only if the particular model supports that mode and its instructions allow it. Some fans reduce performance or have different charging behaviour while running." },
      { question: "Can a phone power bank run a USB fan?", answer: "Possibly, if the output and input ratings match. Low-current automatic shutoff and the fan's connector requirements can affect operation, so confirm both devices' specifications." },
    ],
    related: ["power-banks", "adapters-chargers"],
    serviceSlugs: ["computer-mobile-accessories-sale"],
    enquiryHint: "Tell us whether you need a desk or larger fan, your required runtime and the charging source you plan to use.",
  },
};
