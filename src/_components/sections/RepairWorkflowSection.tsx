function StepArtwork({ step }: { step: number }) {
  if (step === 1) {
    return (
      <svg viewBox="0 0 88 88" fill="none" className="size-full" aria-hidden="true">
        <rect x="9" y="9" width="70" height="70" rx="24" fill="#E8F2FF" />
        <path d="M21 28a8 8 0 0 1 8-8h30a8 8 0 0 1 8 8v17a8 8 0 0 1-8 8H43l-12 9v-9h-2a8 8 0 0 1-8-8V28Z" fill="white" stroke="#0A63CE" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M32 33h23M32 41h15" stroke="#0A63CE" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="67" cy="63" r="9" fill="#23B6A5" />
        <path d="m63.5 63 2.3 2.3 4.8-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (step === 2) {
    return (
      <svg viewBox="0 0 88 88" fill="none" className="size-full" aria-hidden="true">
        <rect x="9" y="9" width="70" height="70" rx="24" fill="#E8F7F5" />
        <path d="M20 39 44 21l24 18v27H20V39Z" fill="white" stroke="#0A63CE" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M34 66V47h20v19M28 41h32" stroke="#0A63CE" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M44 32v4" stroke="#23B6A5" strokeWidth="3" strokeLinecap="round" />
        <circle cx="65" cy="26" r="9" fill="#23B6A5" />
        <path d="M65 22.5a3 3 0 0 0-3 3c0 2.3 3 5 3 5s3-2.7 3-5a3 3 0 0 0-3-3Z" fill="white" />
        <circle cx="65" cy="25.5" r="1" fill="#23B6A5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 88 88" fill="none" className="size-full" aria-hidden="true">
      <rect x="9" y="9" width="70" height="70" rx="24" fill="#FFF3E8" />
      <rect x="24" y="18" width="37" height="52" rx="8" fill="white" stroke="#0A63CE" strokeWidth="2.5" />
      <rect x="29" y="25" width="27" height="31" rx="3" fill="#E8F2FF" />
      <path d="m37 41 5 5 8-10" stroke="#23B6A5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M38 63h9" stroke="#0A63CE" strokeWidth="2.5" strokeLinecap="round" />
      <path d="m65 24 2.2 4.6 5.1.7-3.7 3.6.9 5.1-4.5-2.4-4.5 2.4.9-5.1-3.7-3.6 5.1-.7L65 24Z" fill="#FFB547" />
      <circle cx="66" cy="60" r="7" fill="#23B6A5" />
      <path d="m63.5 60 1.8 1.8 3.5-3.7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function RepairWorkflowSection() {
  const steps = [
    {
      title: "Tell us what you need",
      desc: "Describe your issue via phone or WhatsApp and get a free instant quote.",
    },
    {
      title: "Bring your device",
      desc: "Visit our store at Sonarpatti Road, Hili or send it via local drop-off.",
    },
    {
      title: "Get it repaired with care",
      desc: "Tested, certified, and handed back to you with warranty support.",
    },
  ];

  return (
    <section className="bg-background py-6 sm:py-14">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="mx-auto mb-8 w-full text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            How our repair service works
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Simple, transparent, and trusted process
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-[16.6%] right-[16.6%] top-[52px] hidden h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 md:block"
          />
          <ol
            aria-label="Repair service steps"
            className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6"
          >
            {steps.map((step, idx) => (
              <li
                key={step.title}
                className="surface-panel relative flex h-full flex-col p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md sm:p-6"
              >
                <div className="mb-5 flex items-start justify-between">
                  <span className="relative z-10 flex size-16 items-center justify-center rounded-full border-4 border-card bg-primary text-base font-bold text-primary-foreground shadow-md shadow-primary/20">
                    0{idx + 1}
                  </span>
                  <div className="size-20 shrink-0 sm:size-24">
                    <StepArtwork step={idx + 1} />
                  </div>
                </div>
                <h3 className="text-base font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {step.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
