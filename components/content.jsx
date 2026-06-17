// content.jsx — single source of truth for all editable text on the site.
// Wrapped in EDITMODE markers so the Tweaks panel can persist changes to disk.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "name_first": "Akinyele David",
  "name_last": "Boluwatife",
  "tagline": "Mobile developer with 5+ years building pixel-perfect cross-platform apps in React Native. I've shipped fintech, edtech, and consumer products across iOS and Android — and a few Next.js web companions along the way.",
  "status": "open to new roles",
  "location": "Lagos, NG · UTC+1",

  "email": "boluwatifeakinyele1@gmail.com",
  "phone": "+234 813 158 9332",
  "linkedin_url": "https://www.linkedin.com/in/akinyele-david",
  "linkedin_label": "linkedin.com/in/akinyele-david",
  "github_url": "",
  "twitter_url": "",

  "apps_count": "4",

  "app1_name": "TribaPay",
  "app1_tagline": "Fintech super-app — payments, transfers, and KYC for everyday users.",
  "app1_year": "2024",
  "app1_role": "React Native Developer @ Tribapay",
  "app1_stack": "React Native, TypeScript, REST APIs, Redux Toolkit",
  "app1_ios": "",
  "app1_android": "",

  "app2_name": "TribaPay Business",
  "app2_tagline": "Merchant-side companion app for accepting payments and managing payouts.",
  "app2_year": "2024",
  "app2_role": "React Native Developer @ Tribapay",
  "app2_stack": "React Native, TypeScript, REST APIs, Next.js (web)",
  "app2_ios": "",
  "app2_android": "",

  "app3_name": "Eezee Data",
  "app3_tagline": "Data, airtime, and bills — a Nigerian utility wallet built for speed.",
  "app3_year": "2023",
  "app3_role": "React Native Developer @ Spinel",
  "app3_stack": "React Native, Redux, Firebase, REST APIs",
  "app3_ios": "",
  "app3_android": "",

  "app4_name": "Bammby",
  "app4_tagline": "Consumer mobile product — built end-to-end with React Native and TypeScript.",
  "app4_year": "2023",
  "app4_role": "React Native Developer",
  "app4_stack": "React Native, TypeScript, Expo, Firebase",
  "app4_ios": "",
  "app4_android": "",

  "app5_name": "App five",
  "app5_tagline": "",
  "app5_year": "",
  "app5_role": "",
  "app5_stack": "",
  "app5_ios": "",
  "app5_android": "",

  "app6_name": "App six",
  "app6_tagline": "",
  "app6_year": "",
  "app6_role": "",
  "app6_stack": "",
  "app6_ios": "",
  "app6_android": ""
}/*EDITMODE-END*/;

window.TWEAK_DEFAULTS = TWEAK_DEFAULTS;

// ContentContext — a tiny React context to share content across components
window.ContentContext = React.createContext(TWEAK_DEFAULTS);
window.useContent = () => React.useContext(window.ContentContext);

// Helper to split comma-list strings into arrays
window.splitList = (s) => (s || '').split(',').map(x => x.trim()).filter(Boolean);
