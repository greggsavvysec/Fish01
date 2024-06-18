
(function() {
  const componentSelector = 'sdf-global';
  // Generated from 'src/themes/one/global.css
  const componentTheme = ':root{--theme-color:#2a70e8;--theme-hover-color:#b5d0ff;--theme-focus-color:#75a8ff;--sdf-window-inner-height:auto;--sdf-window-top-scroll:0}html{font-size:100%}body,html{font-variant:normal;font-feature-settings:normal;-webkit-font-smoothing:antialiased;font-family:Circular,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:400;line-height:1.25;color:#262321}body[data-synerg-modal-count]{overflow:hidden}html.sdf-floating-pane-locked,html.sdf-floating-pane-locked body{position:fixed;height:calc(var(--sdf-window-inner-height) - 1px);top:var(--sdf-window-top-scroll);overflow:hidden;box-sizing:border-box}input[type=text].sdf{font-size:.875rem;font-weight:400;line-height:1;color:#212125;display:inline;box-sizing:border-box;width:100%;padding:6px 8px;border-radius:.25rem;border:2px solid #e1e1e6;transition:border .25s,color .25s;resize:vertical}input[type=text]:hover.sdf{outline:0;border-color:var(--theme-focus-color,#75a8ff)}input[type=text]:focus.sdf,input[type=text]:focus:hover.sdf{outline:0;border-color:var(--theme-color,#2a70e8)}';
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
