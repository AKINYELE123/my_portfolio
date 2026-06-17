// About — formatted like a README.md file
function About() {
  return (
    <section id="about">
      <div className="sec-label">about.md</div>
      <h2 className="sec-title">README<span style={{ color: 'var(--ink-3)' }}>.md</span></h2>
      <p className="sec-sub">A short intro — who I am, how I work, and what I care about.</p>

      <div className="code-card">
        <div className="code-head">
          <div className="dots"><span className="dot r" /><span className="dot y" /><span className="dot g" /></div>
          <span style={{ marginLeft: 8 }}>about.md — preview</span>
          <span style={{ marginLeft: 'auto', color: 'var(--ink-4)' }}>markdown</span>
        </div>
        <div className="code-body">
          <div className="gutter">
            {Array.from({ length: 18 }, (_, i) => <span key={i}>{i + 1}</span>)}
          </div>
          <div className="code-content">
            <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}># Hello, world</div>
            <div style={{ color: 'var(--ink-2)', marginBottom: 16 }}>
              I'm an experienced software engineer based in <span className="tk-str">"Lagos, Nigeria"</span>,
              specialising in pixel-perfect cross-platform web and mobile applications. I've spent the last
              five years optimising performance and user experience across fintech, edtech, and consulting
              roles — currently building at <span className="tk-kw">D3Maven</span>.
            </div>

            <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4, marginTop: 18 }}>## What I do</div>
            <ul style={{ color: 'var(--ink-2)', margin: '0 0 16px', paddingLeft: 20 }}>
              <li>Build cross-platform iOS &amp; Android apps with React Native, Expo, and TypeScript.</li>
              <li>Integrate REST APIs and third-party services — payments, KYC, real-time sync.</li>
              <li>Ship companion web experiences in Next.js with consistent logic and UI patterns.</li>
              <li>Maintain modular, scalable codebases that accelerate team velocity and onboarding.</li>
            </ul>

            <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4, marginTop: 18 }}>## How I work</div>
            <div style={{ color: 'var(--ink-2)', marginBottom: 16 }}>
              I collaborate cross-functionally with PMs, designers, and backend engineers — translating
              high-level requirements into shipped features. I write tests where they pay rent, contribute to
              architecture discussions, and treat performance like a feature.
            </div>

            <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4, marginTop: 18 }}>## Currently</div>
            <div style={{ color: 'var(--ink-2)' }}>
              <span className="tk-cm">{`// `}</span>
              Leading React Native development at <span className="tk-kw">D3Maven (UAE)</span>. Open to
              senior &amp; lead mobile roles on remote, async-friendly teams.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.About = About;
