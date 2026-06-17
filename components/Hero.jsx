// Hero — terminal welcome with typewriter intro
function Hero() {
  const c = window.useContent();
  const [typed, setTyped] = React.useState('');
  const full = 'akinyele.bio()';
  React.useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i++;
      setTyped(full.slice(0, i));
      if (i >= full.length) clearInterval(t);
    }, 75);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" style={{ paddingTop: 72, paddingBottom: 72 }}>
      <div className="sec-label reveal in">user / introduction</div>

      {/* Terminal block */}
      <div className="code-card reveal in" style={{ marginBottom: 40 }}>
        <div className="code-head">
          <div className="dots"><span className="dot r" /><span className="dot y" /><span className="dot g" /></div>
          <span style={{ marginLeft: 8 }}>~/akinyele-david — zsh — 80×24</span>
        </div>
        <div style={{ padding: '20px 24px', fontSize: 14, lineHeight: 1.7 }}>
          <div><span className="tk-kw">$</span> whoami</div>
          <div style={{ paddingLeft: 14 }}>akinyele-david</div>
          <div style={{ marginTop: 8 }}><span className="tk-kw">$</span> <span>{typed}</span><span className="cursor" /></div>
        </div>
      </div>

      {/* Big headline */}
      <h1 style={{
        fontFamily: 'var(--mono)',
        fontSize: 'clamp(36px, 6.5vw, 84px)',
        fontWeight: 700,
        lineHeight: 1.02,
        letterSpacing: '-0.03em',
        margin: '0 0 24px',
        textWrap: 'balance',
      }} className="reveal in">
        {c.name_first}<br />
        <span style={{ color: 'var(--keyword)' }}>{c.name_last}</span><span style={{ color: 'var(--ink-3)' }}>.</span>
      </h1>

      <div className="reveal in" style={{
        display: 'flex', flexWrap: 'wrap', gap: 18,
        color: 'var(--ink-2)', fontSize: 16, marginBottom: 32,
        maxWidth: '70ch',
      }}>
        <div>
          <span className="tk-cm">{`/* `}</span>
          {c.tagline}
          <span className="tk-cm">{` */`}</span>
        </div>
      </div>

      {/* Status pills */}
      <div className="reveal in" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 36 }}>
        <span className="pill live">{c.status}</span>
        <span className="pill">{c.location}</span>
        <span className="pill">react-native</span>
        <span className="pill">typescript</span>
        <span className="pill">Android</span>
        <span className="pill">iOS</span>
        <span className="pill">CI/CD</span>
        <span className="pill">REST API</span>
        <span className="pill">Redux Toolkit</span>
        <span className="pill">Jest</span>
      </div>

      {/* CTAs */}
      <div className="reveal in" style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        <a className="btn primary" href="#apps">
          view apps <span className="arrow">→</span>
        </a>
        <a className="btn" href="#contact">
          get in touch
        </a>
        <a className="btn" href="resume.pdf" download>
          $ curl -O resume.pdf
        </a>
      </div>
    </section>
  );
}

window.Hero = Hero;
