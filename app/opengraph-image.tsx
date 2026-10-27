import { ImageResponse } from 'next/server';

export const runtime = 'edge';
export const alt =
  'CheckMyVan — independent van, campervan and motorhome inspections';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          background:
            'linear-gradient(115deg, #071629 0%, #0d2742 58%, #12385a 100%)',
          color: '#ffffff',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: -120,
            top: -250,
            width: 690,
            height: 690,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(14,165,233,0.28) 0%, rgba(14,165,233,0) 68%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100%',
            height: 8,
            background: '#0ea5e9',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: 720,
            padding: '64px 0 64px 76px',
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              marginBottom: 58,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 58,
                height: 58,
                borderRadius: 16,
                background: '#0ea5e9',
                boxShadow: '0 10px 30px rgba(14,165,233,0.28)',
              }}
            >
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2.8 20 6v5.5c0 5.2-3.4 8.7-8 10.2-4.6-1.5-8-5-8-10.2V6l8-3.2Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="m8.3 12.2 2.4 2.4 5-5"
                  stroke="white"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div style={{ display: 'flex', fontSize: 33, fontWeight: 800, letterSpacing: -1.5 }}>
              <span>CheckMy</span>
              <span style={{ color: '#38bdf8' }}>Van</span>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              color: '#7dd3fc',
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: 'uppercase',
              marginBottom: 18,
            }}
          >
            Confidence before you buy
          </div>
          <div
            style={{
              display: 'flex',
              maxWidth: 620,
              fontSize: 56,
              lineHeight: 1.08,
              letterSpacing: -2,
              fontWeight: 800,
            }}
          >
            Know your van. Drive with confidence.
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 24,
              color: '#c4d2e0',
              fontSize: 22,
              lineHeight: 1.4,
            }}
          >
            Independent checks for vans, campervans &amp; motorhomes.
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginTop: 38,
              color: '#ffffff',
              fontSize: 17,
              fontWeight: 700,
            }}
          >
            <span style={{ color: '#38bdf8', fontSize: 24 }}>✓</span>
            Clear findings. Better decisions.
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            right: 68,
            top: 146,
            display: 'flex',
            flexDirection: 'column',
            width: 300,
            padding: 24,
            borderRadius: 22,
            border: '1px solid rgba(255,255,255,0.18)',
            background: 'rgba(255,255,255,0.09)',
            boxShadow: '0 24px 70px rgba(0,0,0,0.2)',
            transform: 'rotate(3deg)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 22,
              color: '#dceaf6',
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            VEHICLE REPORT
            <span
              style={{
                display: 'flex',
                width: 10,
                height: 10,
                borderRadius: 10,
                background: '#38bdf8',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 118,
              marginBottom: 22,
              borderRadius: 14,
              background:
                'linear-gradient(145deg, rgba(14,165,233,0.25), rgba(255,255,255,0.07))',
            }}
          >
            <svg width="178" height="78" viewBox="0 0 178 78" fill="none">
              <path
                d="M23 47h12l12-21c2-4 5-6 10-6h56c5 0 8 2 11 6l14 21h13c5 0 8 4 8 9v8h-12a14 14 0 0 0-28 0H63a14 14 0 0 0-28 0H23V47Z"
                stroke="#d7efff"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path d="M52 24h30v23H39l13-23Zm37 0h24l14 23H89V24Z" stroke="#d7efff" strokeWidth="3" />
              <circle cx="49" cy="64" r="9" fill="#0d2742" stroke="#38bdf8" strokeWidth="4" />
              <circle cx="133" cy="64" r="9" fill="#0d2742" stroke="#38bdf8" strokeWidth="4" />
            </svg>
          </div>
          <div
            style={{
              display: 'flex',
              color: '#ffffff',
              fontSize: 21,
              fontWeight: 700,
              marginBottom: 18,
            }}
          >
            Inspection summary
          </div>
          {['Safety checks', 'Diagnostics', 'Photo report'].map((item) => (
            <div
              key={item}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 11,
                marginTop: 10,
                color: '#d5e5f2',
                fontSize: 16,
              }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 22,
                  height: 22,
                  borderRadius: 20,
                  background: 'rgba(56,189,248,0.2)',
                  color: '#7dd3fc',
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                ✓
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
