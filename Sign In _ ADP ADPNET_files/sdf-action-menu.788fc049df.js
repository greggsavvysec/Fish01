
(function() {
  const componentSelector = 'sdf-action-menu';
  // Generated from 'src/themes/one/action-menu.css
  const componentTheme = ':host(:not([hidden])){display:inline-flex}:host(:not([hidden])) .action-menu-label{display:flex;flex-direction:row;gap:.25rem;align-items:center}::slotted(sdf-menu),sdf-menu{min-width:12rem;max-width:36rem}';
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
