// Experience — styled as `git log` output. Real history from Akinyele's resume.
function Experience() {
  const log = [
    {
      hash: 'a4f9c12',
      date: 'Jan 2025 — April 2026',
      role: 'React Native Developer',
      company: 'D3Maven',
      location: 'UAE · Remote · Full-time',
      branch: 'main',
      bullets: [
        'Lead end-to-end development of mobile applications using React Native — owning feature implementation, performance tuning, and UI responsiveness across iOS and Android.',
        'Maintain a scalable codebase by building modular components and shared utilities, accelerating velocity for new features and onboarding.',
        'Contribute to web features using Next.js and TypeScript, ensuring consistent logic and UI patterns across mobile and web.',
      ],
    },
    {
      hash: '8d2b047',
      date: 'May 2024 — Jan 2025',
      role: 'React Native Developer',
      company: 'Tribapay',
      location: 'Lagos, Nigeria · Remote · Full-time',
      branch: 'release/tribapay',
      bullets: [
        'Collaborated cross-functionally with PMs, designers, and backend engineers — translating business requirements into technical deliverables.',
        'Integrated RESTful APIs and third-party services for seamless financial transactions, KYC verification, and real-time data sync.',
        'Optimized mobile responsiveness and cross-device compatibility, ensuring consistent UI/UX across diverse devices.',
        'Authored test plans for new functionality and supported QA during release cycles.',
      ],
    },
    {
      hash: '3e1a6f8',
      date: 'Mar 2024 — Apr 2024',
      role: 'React Native Developer',
      company: 'Tech Workstation',
      location: 'Lagos, Nigeria · Remote · Contract',
      branch: 'feature/offline-first',
      bullets: [
        'Built front-end user interface using React Native and JavaScript for iOS and Android.',
        'Used React Redux for transient app state and implemented an offline-first approach with react-native-offline.',
        'Debugged and resolved mobile issues, improving overall application stability and window load times.',
      ],
    },
    {
      hash: '0c7e451',
      date: 'Sep 2022 — Mar 2025',
      role: 'React Native Developer',
      company: 'Spinel Consulting',
      location: 'Lagos, Nigeria · Remote · Full-time',
      branch: 'main',
      bullets: [
        'Coordinated with designers and back-end developers to create web and mobile applications with distinctive user interfaces.',
        'Implemented new features in line with existing codebase conventions across the engineering team.',
        'Participated in design discussions on application architecture and feature implementation.',
      ],
    },
    {
      hash: 'b71d309',
      date: 'Jan 2022 — Jan 2023',
      role: 'React Native Developer',
      company: 'Pluralcode Technologies',
      location: 'Lagos, Nigeria · Hybrid · Full-time',
      branch: 'main',
      bullets: [
        'Collaborated with the development team to continually innovate on software functionality and design.',
        'Implemented features using React, React Native, and Redux Toolkit.',
        'Wrote unit tests to ensure code quality before submitting pull requests.',
        'Supported designers on UI/UX decisions and created mock-ups as needed.',
      ],
    },
    {
      hash: 'f5a4c83',
      date: 'Sep 2020 — Dec 2021',
      role: 'React Native Developer',
      company: 'Skannet',
      location: 'Ibadan, Nigeria · On-site · Full-time',
      branch: 'main',
      bullets: [
        'Built front-end UIs using React, React Native, and JavaScript for web, iOS, and Android applications.',
        'Wrote clean, maintainable React Native code and contributed to app architecture discussions.',
        'Assisted in debugging mobile applications, improving stability across releases.',
      ],
    },
  ];

  return (
    <section id="experience">
      <div className="sec-label">git log --oneline --graph</div>
      <h2 className="sec-title">work history<span style={{ color: 'var(--ink-3)' }}>/</span></h2>
      <p className="sec-sub">Five years of commits across fintech, edtech, and consulting. Most recent first.</p>

      <div className="code-card">
        <div className="code-head">
          <div className="dots"><span className="dot r" /><span className="dot y" /><span className="dot g" /></div>
          <span style={{ marginLeft: 8 }}>$ git log --pretty=oneline --graph</span>
        </div>
        <div style={{ padding: '24px 28px', fontSize: 14, lineHeight: 1.7 }}>
          {log.map((entry, i) => (
            <div key={entry.hash} style={{
              display: 'grid',
              gridTemplateColumns: '24px 1fr',
              gap: 16,
              paddingBottom: i === log.length - 1 ? 0 : 28,
              position: 'relative',
            }}>
              {/* Graph rail */}
              <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  width: 2, background: 'var(--paper-3)',
                  position: 'absolute', top: 6, bottom: i === log.length - 1 ? '50%' : -28,
                }} />
                <div style={{
                  width: 12, height: 12, borderRadius: '50%',
                  background: i === 0 ? 'var(--keyword)' : 'var(--paper)',
                  border: '2px solid ' + (i === 0 ? 'var(--keyword)' : 'var(--ink-3)'),
                  position: 'relative', zIndex: 1, marginTop: 4,
                }} />
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'baseline' }}>
                  <span className="tk-num" style={{ fontSize: 13 }}>{entry.hash}</span>
                  <span style={{ color: 'var(--func)', fontSize: 12 }}>
                    (<span style={{ textDecoration: 'underline', textUnderlineOffset: 2 }}>{entry.branch}</span>)
                  </span>
                  <span style={{ color: 'var(--ink-4)', fontSize: 12, marginLeft: 'auto' }}>{entry.date}</span>
                </div>

                <div style={{ marginTop: 4, fontSize: 18, fontWeight: 700, color: 'var(--ink)' }}>
                  {entry.role} <span style={{ color: 'var(--ink-3)', fontWeight: 400 }}>@ {entry.company}</span>
                </div>
                <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>
                  <span className="tk-cm">// </span>{entry.location}
                </div>

                <ul style={{ margin: '10px 0 0', paddingLeft: 18, color: 'var(--ink-2)' }}>
                  {entry.bullets.map((b, j) => (
                    <li key={j} style={{ marginBottom: 2 }}>
                      <span className="tk-cm">▸ </span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education + Certs strip */}
      <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
        <div>
          <div className="tk-cm" style={{ fontSize: 12, marginBottom: 6 }}>// education</div>
          <div style={{ fontSize: 15, fontWeight: 600 }}>B.Sc. Software Engineering</div>
          <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>First Technical University · 2017–2021</div>
        </div>
        <div>
          <div className="tk-cm" style={{ fontSize: 12, marginBottom: 6 }}>// certificates (IBM, 2018)</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {['AI Intro','Blockchain','Cloud','Coding','Cybersecurity','Data Science','IoT'].map(c => (
              <span key={c} className="pill" style={{ fontSize: 10, padding: '3px 9px' }}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.Experience = Experience;
