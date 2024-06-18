
(function() {
  const componentSelector = 'sdf-tooltip';
  // Generated from 'src/themes/one/tooltip.css
  const componentTheme = ':host(:not([hidden])){display:inline}:host sdf-floating-pane .tooltip-container,sdf-floating-pane-portal sdf-floating-pane .tooltip-container{background:#262321;color:#fff;font-size:.875rem;font-weight:400;line-height:1rem;letter-spacing:normal;border-top-right-radius:.5rem;border-top-left-radius:.5rem;border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem;padding:.75rem;border-style:solid;border-width:0;max-width:17.5rem}:host sdf-floating-pane .tooltip-container.error,sdf-floating-pane-portal sdf-floating-pane .tooltip-container.error{background:#c53422;color:#fff}:host sdf-floating-pane .tooltip-container.warning,sdf-floating-pane-portal sdf-floating-pane .tooltip-container.warning{background:#b65700;color:#fff}:host sdf-floating-pane .tooltip-container.info,sdf-floating-pane-portal sdf-floating-pane .tooltip-container.info{background:#476bc3;color:#fff}:host sdf-floating-pane .tooltip-container.success,sdf-floating-pane-portal sdf-floating-pane .tooltip-container.success{background:#407b30;color:#fff}@media only screen and (max-width:600px){:host sdf-floating-pane .tooltip-container,sdf-floating-pane-portal sdf-floating-pane .tooltip-container{max-width:100vw}}';
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
