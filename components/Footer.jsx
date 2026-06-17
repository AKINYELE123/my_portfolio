// Footer — contact + resume CTA + terminal-style sign-off
function FooterSection() {
  const c = window.useContent();
  return (
    <section id="contact" style={{ paddingBottom: 48 }}>
      <div className="sec-label">contact.sh</div>
      <h2 className="sec-title">let's build something<span style={{ color: 'var(--keyword)' }}>.</span></h2>
      <p className="sec-sub">If you're hiring a senior React Native engineer or have a mobile build that needs to ship — get in touch.</p>

      <div className="code-card" style={{ maxWidth: 720 }}>
        <div className="code-head">
          <div className="dots"><span className="dot r" /><span className="dot y" /><span className="dot g" /></div>
          <span style={{ marginLeft: 8 }}>~/contact</span>
        </div>
        <div style={{ padding: '20px 24px', fontSize: 14, lineHeight: 1.8 }}>
          <div><span className="tk-kw">$</span> cat contact.json</div>
          <div style={{ paddingLeft: 14, marginTop: 4 }}>
            <div><span className="tk-var">{'{'}</span></div>
            <div style={{ paddingLeft: 18 }}>
              <span className="tk-prop">"email"</span>: <a className="tk-fn" href={`mailto:${c.email}`}>"{c.email}"</a>,
            </div>
            <div style={{ paddingLeft: 18 }}>
              <span className="tk-prop">"phone"</span>: <a className="tk-fn" href={`tel:${(c.phone || '').replace(/\s+/g,'')}`}>"{c.phone}"</a>,
            </div>
            <div style={{ paddingLeft: 18 }}>
              <span className="tk-prop">"linkedin"</span>: <a className="tk-fn" href={c.linkedin_url} target="_blank" rel="noopener">"{c.linkedin_label}"</a>,
            </div>
            {c.github_url && (
              <div style={{ paddingLeft: 18 }}>
                <span className="tk-prop">"github"</span>: <a className="tk-fn" href={c.github_url} target="_blank" rel="noopener">"{c.github_url.replace(/^https?:\/\//,'')}"</a>,
              </div>
            )}
            {c.twitter_url && (
              <div style={{ paddingLeft: 18 }}>
                <span className="tk-prop">"twitter"</span>: <a className="tk-fn" href={c.twitter_url} target="_blank" rel="noopener">"{c.twitter_url.replace(/^https?:\/\//,'')}"</a>,
              </div>
            )}
            <div style={{ paddingLeft: 18 }}>
              <span className="tk-prop">"location"</span>: <span className="tk-str">"Lagos, Nigeria"</span>,
            </div>
            <div style={{ paddingLeft: 18 }}>
              <span className="tk-prop">"timezone"</span>: <span className="tk-str">"UTC+1 (WAT)"</span>,
            </div>
            <div style={{ paddingLeft: 18 }}>
              <span className="tk-prop">"open_to"</span>: [<span className="tk-str">"senior"</span>, <span className="tk-str">"lead"</span>, <span className="tk-str">"contract"</span>]
            </div>
            <div><span className="tk-var">{'}'}</span></div>
          </div>

          <div style={{ marginTop: 18 }}>
            <span className="tk-kw">$</span> curl -O resume.pdf
          </div>
          <div style={{ paddingLeft: 14, color: 'var(--ink-3)' }}>
            <span className="tk-cm">// Akinyele_David_Resume.pdf</span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 16 }}>
            <a className="btn primary" href="resume.pdf" download="Akinyele_David_Resume.pdf">
              ↓ download resume.pdf
            </a>
            <a className="btn" href={`mailto:${c.email}`}>
              ✉ send email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PageFooter() {
  const c = window.useContent();
  return (
    <footer>
      <div>
        <div><span className="tk-cm">// last build: </span>{new Date().toISOString().slice(0,10)}</div>
        <div style={{ marginTop: 4 }}>© {new Date().getFullYear()} {c.name_first} {c.name_last}. Hand-written.</div>
      </div>
      <div className="links">
        <a href="#hero">↑ top</a>
        <a href={c.linkedin_url} target="_blank" rel="noopener">linkedin</a>
        <a href={`mailto:${c.email}`}>email</a>
      </div>
    </footer>
  );
}

Object.assign(window, { FooterSection, PageFooter });
