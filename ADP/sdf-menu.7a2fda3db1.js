
(function() {
  const componentSelector = 'sdf-menu';
  // Generated from 'src/themes/one/menu.css
  const componentTheme = ':host(:not([hidden])){display:block;box-sizing:border-box;padding:.5rem}';
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
