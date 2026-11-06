'use client';

import { siteConfig } from '@/_data/siteConfig';

export function WhatsAppFloating() {
  const message = encodeURIComponent(
    'Hello! I would like to inquire about a gadget / mobile repair service at Muhit Telecom.'
  );

  return (
    <a
      href={`https://wa.me/${siteConfig.phoneIntl.replace('+', '')}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-[calc(5rem_+_env(safe-area-inset-bottom))] right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl transition-all duration-200 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-2xl active:scale-95 md:bottom-6 md:right-6 md:h-14 md:w-14"
      aria-label="Chat on WhatsApp"
      title="Chat with Masum Hossain on WhatsApp (01910-755835)"
    >
      <span aria-hidden="true" className="pointer-events-none absolute -inset-[3px] z-0 rounded-full border-2 border-[#15803d]/75 animate-whatsapp-ring" />
      <div className="relative z-10 flex items-center justify-center">
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19L7.55 18.82L4.43 19.64L5.26 16.58L5.06 16.27C4.23 14.95 3.79 13.45 3.79 11.91C3.79 7.37 7.5 3.66 12.05 3.66C14.25 3.66 16.32 4.52 17.88 6.08C19.44 7.64 20.3 9.71 20.3 11.91C20.29 16.46 16.59 20.16 12.05 20.16ZM16.58 14.39C16.33 14.26 15.11 13.66 14.88 13.58C14.65 13.5 14.49 13.46 14.32 13.71C14.15 13.96 13.68 14.51 13.53 14.68C13.39 14.84 13.24 14.86 13 14.74C12.75 14.61 11.96 14.35 11.02 13.52C10.29 12.87 9.8 12.07 9.65 11.82C9.51 11.58 9.64 11.44 9.76 11.32C9.88 11.03 10.02 11.03 10.15 10.88C10.27 10.74 10.31 10.63 10.39 10.47C10.47 10.31 10.43 10.16 10.37 10.04C10.31 9.92 9.82 8.71 9.62 8.21C9.42 7.73 9.21 7.79 9.06 7.79C8.92 7.78 8.75 7.78 8.59 7.78C8.42 7.78 8.16 7.84 7.93 8.09C7.71 8.34 7.07 8.93 7.07 10.14C7.07 11.35 7.96 12.51 8.08 12.67C8.21 12.84 9.81 15.31 12.28 16.37C12.87 16.62 13.32 16.77 13.68 16.89C14.28 17.07 14.82 17.05 15.25 16.98C15.73 16.91 16.73 16.37 16.94 15.79C17.14 15.2 17.14 14.71 17.08 14.6C17.02 14.5 16.85 14.44 16.58 14.39Z" />
        </svg>
      </div>
    </a>
  );
}
