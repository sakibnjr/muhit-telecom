import { ImageResponse } from 'next/og';

export const alt = 'Muhit Telecom | Gadgets and mobile repair in Hili, Dinajpur';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function SocialImage() {
  return new ImageResponse(
    <div style={{ display: 'flex', width: '100%', height: '100%', padding: 34, background: 'linear-gradient(135deg, rgb(240, 246, 252), rgb(225, 237, 249))', color: 'rgb(15, 38, 61)' }}>
      <div style={{ display: 'flex', width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'space-between', padding: 48, border: '1px solid rgb(213, 226, 240)', borderRadius: 32, background: 'rgba(255,255,255,.88)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <svg width="68" height="68" viewBox="0 0 64 64" fill="none">
            <defs><linearGradient id="mark" x1="5" y1="5" x2="57" y2="61" gradientUnits="userSpaceOnUse"><stop stopColor="#0879E8" /><stop offset="1" stopColor="#0750A7" /></linearGradient></defs>
            <rect x="1.5" y="1.5" width="61" height="61" rx="18" fill="url(#mark)" />
            <rect x="2" y="2" width="60" height="60" rx="17.5" stroke="#B8E8FF" strokeOpacity=".32" />
            <rect x="16.5" y="7.5" width="31" height="49" rx="7.5" stroke="#F8FCFF" strokeWidth="2.4" />
            <path d="M27 13.5h10" stroke="#A7ECFF" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M21.5 39V22.5l8.2 8 8.2-8V39" stroke="#F8FCFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M38 24h7.5M41.75 24v15" stroke="#A7ECFF" strokeWidth="3" strokeLinecap="round" />
            <circle cx="32" cy="50.5" r="1.5" fill="#F8FCFF" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
              <span style={{ fontSize: 31, lineHeight: 1, fontWeight: 800, letterSpacing: '.4px' }}>MUHIT</span>
              <span style={{ fontSize: 22, lineHeight: 1, fontWeight: 700, letterSpacing: '1.5px', color: 'rgb(8, 116, 216)' }}>TELECOM</span>
            </div>
            <span style={{ fontSize: 15, color: 'rgb(97, 117, 138)' }}>মুহিত টেলিকম • হিলি</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', maxWidth: 900, fontSize: 72, lineHeight: 1.04, fontWeight: 750, letterSpacing: '-2px' }}>Everyday tech. Expert care.</div>
          <div style={{ display: 'flex', fontSize: 27, color: 'rgb(71, 91, 112)' }}>Gadgets, accessories and mobile repair in Hili, Dinajpur.</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 20, color: 'rgb(8, 97, 188)' }}>
          <span>Visit our store. Shop from anywhere.</span>
          <span>01910-755835</span>
        </div>
      </div>
    </div>,
    size,
  );
}
