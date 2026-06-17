// Apps — featured app showcase with iPhone frames and store links
function Apps() {
  const apps = [
  {
    id: 'app1',
    name: 'TribaPay',
    tagline: 'Tribapay is a fintech app that offers cross border payment',
    year: '2024',
    role: 'Lead React Native Developer',
    stack: ['React Native', 'TypeScript', 'Redux', 'REST API', 'Push Notification'],
    ios: 'https://apps.apple.com/us/app/tribapay-redefining-payments/id163068680',  
    android: 'https://play.google.com/store/apps/details?id=com.tribapay&hl=en', 
  },
  {
    id: 'app2',
    name: 'Tribapay Business',
    tagline: 'Tribapay is a fintech app that offers cross border payment. This is the Business side of Tribapay',
    year: '2023',
    role: 'React Native Developer',
    stack: ['React Native', 'JavaScript', 'Firebase', 'REST API', 'Push Notification'],
    ios: 'https://apps.apple.com/us/app/tribapay-business/id6497878820',
    android: 'https://play.google.com/store/apps/details?id=com.tpbusiness',
  },
  {
    id: 'app3',
    name: 'EeZee Data',
    tagline: 'This is a data collection app for enumerators. It allows users to accept survey jobs and collect responses from people in their local community.',
    year: '2023',
    role: 'React Native Developer',
    stack: ['React Native', 'JavaScript', 'Maps', 'Typescript'],
    ios: 'https://apps.apple.com/us/app/eezee-data-collectors/id1672099422',
    android: 'https://play.google.com/store/apps/details?id=consulting.spinel.enumerator.dataco&pcampaignid=web_share',
  },
  {
    id: 'app4',
    name: 'Parrot',
    tagline: 'Parrot is the community where real customers, creators, and pro-reviewers have honest conversations about their buying experiences — that businesses cannot delete',
    year: '2023',
    role: 'React Native Developer',
    stack: ['React Native', 'JavaScript', 'Firebase', 'Typescript', 'Maps'],
    ios: null,
    android: 'https://play.google.com/store/apps/details?id=com.zacrac.parrot&pcampaignid=web_share',
  },
  // Add more apps here...
];

const count = apps.length;

  // Store badge SVG icons (inline so they render cleanly on the warm paper bg)
  const AppleIcon = () => (
    <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor" aria-hidden="true">
      <path d="M11.1 8.5c0-1.8 1.5-2.7 1.6-2.7-0.9-1.3-2.2-1.5-2.7-1.5-1.1-0.1-2.2 0.7-2.8 0.7s-1.5-0.7-2.4-0.6c-1.2 0-2.4 0.7-3 1.8-1.3 2.2-0.3 5.5 0.9 7.3 0.6 0.9 1.4 1.9 2.4 1.8s1.3-0.6 2.5-0.6 1.5 0.6 2.5 0.6 1.7-0.9 2.3-1.8c0.7-1 1-2 1-2.1S11.1 10.3 11.1 8.5zM9.4 3c0.5-0.6 0.9-1.5 0.8-2.4-0.8 0-1.7 0.5-2.2 1.2-0.5 0.6-0.9 1.5-0.8 2.4C8 4.3 8.9 3.7 9.4 3z" />
    </svg>
  );
  const PlayIcon = () => (
    <svg width="14" height="16" viewBox="0 0 14 16" aria-hidden="true">
      <path d="M0.5 0.7c-0.2 0.2-0.3 0.5-0.3 0.9v12.8c0 0.4 0.1 0.7 0.3 0.9l7.4-7.3-7.4-7.3z" fill="#5A7A2B" />
      <path d="M11 5.5l-2.5-1.5L1 0.4 9.5 8.9 11 5.5z" fill="#B8431C" />
      <path d="M9.5 8.9l-8.5 8.5 7.5-4.1 2.5-1.4-1.5-3z" fill="#A86A1F" />
      <path d="M13.4 7.7l-2.4-1.4-1.5 3 1.5 1.5 2.4-1.4c0.6-0.3 0.6-1.2 0-1.7z" fill="#6A4E9C" />
    </svg>
  );

  // Empty-phone placeholder content — terminal-themed, no fake app UI.
  const EmptyScreen = ({ app }) => (
    <div style={{
      paddingTop: 68,
      height: '100%',
      background: '#F5F0E6',
      fontFamily: 'JetBrains Mono, ui-monospace, monospace',
      color: '#1F1B14',
      display: 'flex', flexDirection: 'column',
      alignItems: 'stretch',
    }}>
      {/* Tiny "editor" header */}
      <div style={{
        padding: '8px 16px',
        borderBottom: '1px solid #E0D6C0',
        color: '#8A8170', fontSize: 11,
      }}>
        ~/{(app.name || 'app').toLowerCase().replace(/[^a-z0-9]+/g, '-')}.tsx
      </div>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
        <div style={{ textAlign: 'center' }}>
          {/* Big monogram from app name */}
          <div style={{
            fontSize: 64, fontWeight: 700, lineHeight: 1,
            color: '#1F1B14', letterSpacing: '-0.04em',
          }}>
            {(app.name || '?').trim().split(/\s+/).slice(0, 2).map(w => w[0] || '').join('').toUpperCase() || '?'}
          </div>
          <div style={{ marginTop: 14, fontSize: 14, fontWeight: 600 }}>
            {app.name || 'Untitled app'}
          </div>
          {app.year && (
            <div style={{ marginTop: 4, fontSize: 11, color: '#8A8170' }}>{app.year}</div>
          )}
        </div>
      </div>

      {/* <div style={{
        padding: '10px 16px',
        borderTop: '1px dashed #E0D6C0',
        color: '#9A9078', fontSize: 10,
        textAlign: 'center',
      }}>
        <span style={{ color: '#B8431C' }}>$</span> screenshot coming soon
      </div> */}
    </div>
  );

  return (
    <section id="apps">
      <div className="sec-label">apps/ · {count} {count === 1 ? 'item' : 'items'}</div>
      <h2 className="sec-title">featured apps<span style={{ color: 'var(--ink-3)' }}>()</span></h2>
      <p className="sec-sub">Production apps I've shipped to the App Store and Google Play. Tap a store badge to install.</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: count === 1
          ? '1fr'
          : 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 56,
        alignItems: 'start',
        justifyItems: count === 1 ? 'center' : 'stretch',
      }}>
        {apps.map((app, i) => (
          <div key={app.id} className="app-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Phone — sized via a fixed-height wrapper, scaled inside */}
            <div className="phone-wrap" style={{
              width: 280, height: 609, // 874 * 0.6965 ≈ 609
              position: 'relative',
              overflow: 'visible',
            }}>
              <div style={{
                transform: 'scale(0.6965)',
                transformOrigin: 'top left',
                width: 402, height: 874,
                transition: 'transform 0.35s ease',
              }}>
                <IOSDevice width={402} height={874}>
                  <EmptyScreen app={app} />
                </IOSDevice>
              </div>
            </div>

            {/* Meta */}
            <div style={{ width: '100%', maxWidth: 320, marginTop: 28 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span className="tk-num" style={{ fontSize: 12 }}>#{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontSize: 12, color: 'var(--ink-4)' }}>{app.year}</span>
              </div>
              <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.01em', marginTop: 4 }}>
                {app.name}<span style={{ color: 'var(--ink-3)', fontWeight: 400 }}>.app</span>
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-2)', marginTop: 4, lineHeight: 1.45 }}>
                {app.tagline}
              </div>
              {app.role && (
                <div style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 6 }}>
                  <span className="tk-cm">// role: </span>{app.role}
                </div>
              )}

              {app.stack.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
                  {app.stack.map(s => <span key={s} className="pill" style={{ fontSize: 10, padding: '2px 8px' }}>{s}</span>)}
                </div>
              )}

              <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
                {app.ios ? (
                  <a className="btn" href={app.ios} target="_blank" rel="noopener" style={{ flex: 1, justifyContent: 'center', padding: '10px 12px', fontSize: 12 }}>
                    <AppleIcon /> App Store
                  </a>
                ) : (
                  <span className="btn" style={{ flex: 1, justifyContent: 'center', padding: '10px 12px', fontSize: 12, opacity: 0.4, cursor: 'not-allowed' }}>
                    <AppleIcon /> not listed
                  </span>
                )}
                {app.android ? (
                  <a className="btn" href={app.android} target="_blank" rel="noopener" style={{ flex: 1, justifyContent: 'center', padding: '10px 12px', fontSize: 12 }}>
                    <PlayIcon /> Google Play
                  </a>
                ) : (
                  <span className="btn" style={{ flex: 1, justifyContent: 'center', padding: '10px 12px', fontSize: 12, opacity: 0.4, cursor: 'not-allowed' }}>
                    <PlayIcon /> not listed
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.Apps = Apps;
