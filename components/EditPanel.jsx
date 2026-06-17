// FAB — always-visible floating "Edit" button that opens the panel.
function EditFAB() {
  const open = () => window.postMessage({ type: '__activate_edit_mode' }, '*');
  return (
    <button
      onClick={open}
      data-noncommentable=""
      className="edit-fab"
      style={{
        position: 'fixed', bottom: 20, right: 20, zIndex: 999,
        padding: '12px 18px',
        background: 'var(--ink)', color: 'var(--paper)',
        border: '1px solid var(--ink)',
        fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 600,
        cursor: 'pointer',
        boxShadow: '0 6px 24px rgba(31,27,20,0.25), 0 2px 6px rgba(31,27,20,0.15)',
        display: 'flex', alignItems: 'center', gap: 8,
        borderRadius: 100,
        transition: 'transform 0.15s ease, background 0.15s ease',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--keyword)'; e.currentTarget.style.borderColor = 'var(--keyword)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.borderColor = 'var(--ink)'; }}
    >
      <span style={{ fontSize: 14 }}>✎</span>
      Edit content
    </button>
  );
}

// IMPORTANT: Field and AppEditor are defined OUTSIDE EditPanel so they keep
// stable component identity across re-renders — otherwise inputs lose focus
// on every keystroke.

function Field({ k, label, multiline, placeholder, value, onChange }) {
  const Tag = multiline ? 'textarea' : 'input';
  return (
    <label style={{ display: 'block', marginBottom: 12 }}>
      <div style={{
        fontSize: 11, color: 'var(--ink-3)', marginBottom: 4,
        fontFamily: 'var(--mono)',
      }}>{label}</div>
      <Tag
        value={value || ''}
        placeholder={placeholder || ''}
        onChange={(e) => onChange(k, e.target.value)}
        rows={multiline ? 3 : undefined}
        spellCheck={false}
        style={{
          width: '100%',
          padding: '8px 10px',
          fontFamily: 'var(--mono)',
          fontSize: 13,
          background: 'var(--paper)',
          color: 'var(--ink)',
          border: '1px solid var(--paper-3)',
          borderRadius: 4,
          outline: 'none',
          resize: multiline ? 'vertical' : 'none',
          boxSizing: 'border-box',
        }}
      />
    </label>
  );
}

function AppEditor({ i, tweaks, setTweak }) {
  return (
    <details style={{ marginBottom: 8, border: '1px solid var(--paper-3)', borderRadius: 4, background: 'var(--paper)' }}>
      <summary style={{
        cursor: 'pointer', padding: '10px 12px',
        fontSize: 13, fontWeight: 600,
        display: 'flex', justifyContent: 'space-between',
        listStyle: 'none',
      }}>
        <span><span style={{ color: 'var(--ink-4)' }}>#{String(i).padStart(2,'0')}</span> {tweaks[`app${i}_name`] || `App ${i}`}</span>
        <span style={{ color: 'var(--ink-3)', fontSize: 11 }}>edit ▾</span>
      </summary>
      <div style={{ padding: '8px 12px 12px', borderTop: '1px dashed var(--paper-3)' }}>
        <Field k={`app${i}_name`}     label="App name"          placeholder="My App"
               value={tweaks[`app${i}_name`]} onChange={setTweak} />
        <Field k={`app${i}_tagline`}  label="Tagline (one line)" multiline placeholder="What does it do?"
               value={tweaks[`app${i}_tagline`]} onChange={setTweak} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 8 }}>
          <Field k={`app${i}_year`}   label="Year" placeholder="2024"
                 value={tweaks[`app${i}_year`]} onChange={setTweak} />
          <Field k={`app${i}_role`}   label="Your role" placeholder="React Native Developer @ Co."
                 value={tweaks[`app${i}_role`]} onChange={setTweak} />
        </div>
        <Field k={`app${i}_stack`}    label="Tech stack (comma-separated)" placeholder="React Native, TypeScript, Firebase"
               value={tweaks[`app${i}_stack`]} onChange={setTweak} />
        <Field k={`app${i}_ios`}      label="App Store URL (leave empty if not listed)" placeholder="https://apps.apple.com/..."
               value={tweaks[`app${i}_ios`]} onChange={setTweak} />
        <Field k={`app${i}_android`}  label="Google Play URL (leave empty if not listed)" placeholder="https://play.google.com/store/apps/..."
               value={tweaks[`app${i}_android`]} onChange={setTweak} />
      </div>
    </details>
  );
}

// EditPanel — the in-page editor. Lets the user change all content without touching code.
function EditPanel({ tweaks, setTweak }) {
  // Read app count from tweaks so the editor mirrors the live grid.
  const count = parseInt(tweaks.apps_count || 4, 10);

  return (
    // <TweaksPanel title="Edit content" noDeckControls>

    //   <TweakSection label="Hero / Intro">
    //     <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
    //       <Field k="name_first" label="First name(s)" placeholder="Akinyele David"
    //              value={tweaks.name_first} onChange={setTweak} />
    //       <Field k="name_last"  label="Last name"    placeholder="Boluwatife"
    //              value={tweaks.name_last} onChange={setTweak} />
    //     </div>
    //     <Field k="tagline"  label="Bio paragraph"  multiline
    //            value={tweaks.tagline} onChange={setTweak} />
    //     <Field k="status"   label="Status pill text" placeholder="open to new roles"
    //            value={tweaks.status} onChange={setTweak} />
    //     <Field k="location" label="Location pill"    placeholder="Lagos, NG · UTC+1"
    //            value={tweaks.location} onChange={setTweak} />
    //   </TweakSection>

    //   <TweakSection label="Contact">
    //     <Field k="email"          label="Email"           placeholder="you@example.com"
    //            value={tweaks.email} onChange={setTweak} />
    //     <Field k="phone"          label="Phone"           placeholder="+234 ..."
    //            value={tweaks.phone} onChange={setTweak} />
    //     <Field k="linkedin_url"   label="LinkedIn URL"    placeholder="https://www.linkedin.com/in/..."
    //            value={tweaks.linkedin_url} onChange={setTweak} />
    //     <Field k="linkedin_label" label="LinkedIn label (displayed text)" placeholder="linkedin.com/in/you"
    //            value={tweaks.linkedin_label} onChange={setTweak} />
    //     <Field k="github_url"     label="GitHub URL (optional)"  placeholder="https://github.com/..."
    //            value={tweaks.github_url} onChange={setTweak} />
    //     <Field k="twitter_url"    label="X / Twitter URL (optional)" placeholder="https://twitter.com/..."
    //            value={tweaks.twitter_url} onChange={setTweak} />
    //   </TweakSection>

    //   <TweakSection label={`Featured apps · ${count} shown`}>
    //     <div style={{ fontSize: 11, color: 'var(--ink-3)', marginBottom: 8, lineHeight: 1.5 }}>
    //       Click each app to expand and edit. Use the slider below to change how many apps appear.
    //     </div>
    //     <label style={{ display: 'block', marginBottom: 14 }}>
    //       <div style={{ fontSize: 11, color: 'var(--ink-3)', marginBottom: 4, display: 'flex', justifyContent: 'space-between' }}>
    //         <span>Number of apps to show</span>
    //         <span style={{ color: 'var(--ink)' }}>{count}</span>
    //       </div>
    //       <input
    //         type="range" min="1" max="6" step="1" value={count}
    //         onChange={(e) => setTweak('apps_count', e.target.value)}
    //         style={{ width: '100%' }}
    //       />
    //     </label>
    //     {Array.from({ length: count }, (_, idx) => (
    //       <AppEditor key={idx + 1} i={idx + 1} tweaks={tweaks} setTweak={setTweak} />
    //     ))}
    //   </TweakSection>

    //   <TweakSection label="Tips">
    //     <div style={{ fontSize: 11, color: 'var(--ink-3)', lineHeight: 1.5 }}>
    //       ▸ Changes save automatically as you type.<br/>
    //       ▸ Refresh the page anytime — your edits stay.<br/>
    //       ▸ Paste an App Store / Play Store URL to activate the buttons on each app card.
    //     </div>
    //   </TweakSection>

    // </TweaksPanel>
    <></>
  );
}

window.EditPanel = EditPanel;
window.EditFAB = EditFAB;
