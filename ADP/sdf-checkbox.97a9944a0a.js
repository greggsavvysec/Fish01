
(function() {
  const componentSelector = 'sdf-checkbox';
  // Generated from 'src/themes/one/checkbox.css
  const componentTheme = ':host(:not([hidden])){display:inline-flex;width:-moz-fit-content;width:fit-content;gap:.5rem}:host(:focus){outline:0}svg{flex-grow:0;flex-shrink:0;height:1.5rem;width:1.5rem;transition:box-shadow .2s ease-out;border-top-right-radius:3px;border-top-left-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.check-box{fill:#fff;stroke:#938c85;stroke-width:2px;rx:3px;transition:fill .1s cubic-bezier(0,0,.2,1)}.check-mark{fill:none;stroke-width:2px;stroke:transparent}label{display:inline-flex;align-items:center;min-height:1.5rem;color:#393533;font-size:1rem;font-weight:400;line-height:1.25;letter-spacing:normal}.description{display:block;font-size:.875rem;color:#726c66}:host(:not([disabled]):focus) .check-box{stroke:#938c85;fill:#fff}:host(:not([disabled]):focus) .check-mark{stroke:transparent}:host(:not([disabled]):focus) svg{box-shadow:0 0 0 1px #fff,0 0 0 3px #476bc3}:host(:not([disabled]):focus) label{color:#393533}:host(:not([disabled]):hover) .check-box{stroke:#476bc3;fill:#fff}:host(:not([disabled]):hover) .check-mark{stroke:transparent}:host(:not([disabled]):hover) svg{box-shadow:0 0 0 0 transparent,0 0 0 0 transparent}:host(:not([disabled]):hover) label{color:#393533}:host(:not([disabled])) .checked .check-box{stroke:#476bc3;fill:#476bc3}:host(:not([disabled])) .checked .check-mark{stroke:#fff}:host(:not([disabled])) .checked svg{box-shadow:0 0 0 0 transparent,0 0 0 0 transparent}:host(:not([disabled])) .checked label{color:#393533}:host(:not([disabled]):focus:hover) .check-box{stroke:#476bc3;fill:#fff}:host(:not([disabled]):focus:hover) .check-mark{stroke:transparent}:host(:not([disabled]):focus:hover) svg{box-shadow:0 0 0 1px #fff,0 0 0 3px #476bc3}:host(:not([disabled]):focus:hover) label{color:#393533}:host(:not([disabled]):focus) .checked .check-box{stroke:#476bc3;fill:#476bc3}:host(:not([disabled]):focus) .checked .check-mark{stroke:#fff}:host(:not([disabled]):focus) .checked svg{box-shadow:0 0 0 1px #fff,0 0 0 3px #476bc3}:host(:not([disabled]):focus) .checked label{color:#393533}:host(:not([disabled]):focus:hover) .checked .check-box{stroke:#324fa5;fill:#324fa5}:host(:not([disabled]):focus:hover) .checked .check-mark{stroke:#fff}:host(:not([disabled]):focus:hover) .checked svg{box-shadow:0 0 0 1px #fff,0 0 0 3px #476bc3}:host(:not([disabled]):focus:hover) .checked label{color:#393533}:host(:not([disabled]):hover) .checked .check-box{stroke:#324fa5;fill:#324fa5}:host(:not([disabled]):hover) .checked .check-mark{stroke:#fff}:host(:not([disabled]):hover) .checked svg{box-shadow:0 0 0 0 transparent,0 0 0 0 transparent}:host(:not([disabled]):hover) .checked label{color:#393533}:host([disabled]){pointer-events:none;-moz-user-select:none;user-select:none;-webkit-user-select:none}:host([disabled]) .check-box{stroke:#cdc7c2;fill:#f2f0ed}:host([disabled]) .check-mark{stroke:transparent}:host([disabled]) svg{box-shadow:0 0 0 0 transparent,0 0 0 0 transparent}:host([disabled]) label{color:#938c85}:host([disabled]) .checked{pointer-events:none;-moz-user-select:none;user-select:none;-webkit-user-select:none}:host([disabled]) .checked .check-box{stroke:#cdc7c2;fill:#cdc7c2}:host([disabled]) .checked .check-mark{stroke:#fff}:host([disabled]) .checked svg{box-shadow:0 0 0 0 transparent,0 0 0 0 transparent}:host([disabled]) .checked label{color:#938c85}';
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
