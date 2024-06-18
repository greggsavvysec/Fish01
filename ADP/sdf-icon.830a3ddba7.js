
(function() {
  const componentSelector = 'sdf-icon';
  // Generated from 'src/themes/one/icon.css
  const componentTheme = ':host(:not([hidden])){display:inline-flex;vertical-align:text-bottom;align-items:center;justify-content:center;line-height:1;word-wrap:normal;text-transform:none;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-feature-settings:"liga"}:host(:not([hidden])) span{line-height:inherit}';
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
