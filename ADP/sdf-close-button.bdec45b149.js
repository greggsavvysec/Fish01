
(function() {
  const componentSelector = 'sdf-close-button';
  // Generated from 'src/themes/one/close-button.css
  const componentTheme = ':host(:not([hidden])){display:inline-flex;box-sizing:border-box}.button:not([disabled]){box-shadow:0 0 0 0 transparent,0 0 0 0 transparent}.button:not([disabled]),.button:not([disabled]):focus{background:#e3dfda;color:#262321;border-color:transparent}.button:not([disabled]):focus{box-shadow:0 0 0 1px #fff,0 0 0 3px #476bc3}.button:not([disabled]):hover{background:#e3dfda;color:#262321;box-shadow:0 0 0 0 transparent,0 0 0 0 transparent;border-color:transparent}.button:not([disabled]):focus:hover{background:#e3dfda;color:#262321;box-shadow:0 0 0 1px #fff,0 0 0 3px #476bc3;border-color:transparent}.button[disabled]{background:#e3dfda;color:#938c85;box-shadow:0 0 0 0 transparent,0 0 0 0 transparent;border-color:transparent}.button.inverse:not([disabled]){background:#fff;color:#262321;box-shadow:0 0 0 0 transparent,0 0 0 0 transparent;border-color:transparent}.button.inverse:not([disabled]):focus{background:#fff;color:#262321;box-shadow:0 0 0 1px #fff,0 0 0 3px #476bc3;border-color:transparent}.button.inverse:not([disabled]):hover{background:#f2f0ed;color:#262321;box-shadow:0 0 0 0 transparent,0 0 0 0 transparent;border-color:transparent}.button.inverse:not([disabled]):focus:hover{background:#f2f0ed;color:#262321;box-shadow:0 0 0 1px #fff,0 0 0 3px #476bc3;border-color:transparent}.button.inverse[disabled]{background:#fff;color:#938c85;box-shadow:0 0 0 0 transparent,0 0 0 0 transparent;border-color:transparent}.button{display:flex;border:none;outline:0;transition:box-shadow .2s ease-out;margin:0;padding:0}.button:not([disabled]){cursor:pointer}.button{width:2.25rem;height:2.25rem;font-size:1.125rem}.button,.small{justify-content:center;align-items:center;border-top-right-radius:9999px;border-top-left-radius:9999px;border-bottom-right-radius:9999px;border-bottom-left-radius:9999px;border-style:solid;border-width:0}.small{width:1.5rem;height:1.5rem;font-size:.875rem}';
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
