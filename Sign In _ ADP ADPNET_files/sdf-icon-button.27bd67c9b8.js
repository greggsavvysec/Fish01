
(function() {
  const componentSelector = 'sdf-icon-button';
  // Generated from 'src/themes/one/icon-button.css
  const componentTheme = ':host(:not([hidden])){display:inline-flex;justify-content:center;align-items:center;box-sizing:border-box}:host{transition:box-shadow .2s ease-out;box-shadow:0 0 0 0 transparent,0 0 0 0 transparent}:host([shape=rounded]){border-top-right-radius:.5rem;border-top-left-radius:.5rem;border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem}:host([shape=circle]){border-top-right-radius:9999px;border-top-left-radius:9999px;border-bottom-right-radius:9999px;border-bottom-left-radius:9999px}button{color:inherit;font-size:inherit;background-color:transparent;border-style:none;padding:0}button,button:focus{outline:0}:host(:focus-within){box-shadow:0 0 0 1px #fff,0 0 0 3px #476bc3}:host(:hover){cursor:pointer}';
  // End ui-framework generated code
  window.SynergThemes = window.SynergThemes || {};
  window.SynergThemes['one'] = window.SynergThemes['one'] || {};

  window.SynergThemes['one'][componentSelector] = {
    raw: componentTheme
  };
  try {
      const css = new CSSStyleSheet();

      css.replaceSync(componentTheme);
      window.SynergThemes['one'][componentSelector].constructable = css;

  } catch(e) {
     // not supported yet
  }
})();
