
(function() {
  const componentSelector = 'sdf-menu-item';
  // Generated from 'src/themes/one/menu-item.css
  const componentTheme = ':host(:not([hidden])){display:flex;box-sizing:border-box;border-top-left-radius:.375rem;border-top-right-radius:.375rem;border-bottom-left-radius:.375rem;border-bottom-right-radius:.375rem;padding:.5rem;font-size:1rem;font-weight:400;line-height:1.5rem;letter-spacing:normal;text-align:start;align-items:center;background:transparent;border-color:transparent;border-width:0;color:#262321}:host(:not([hidden])) ::slotted(sdf-icon),:host(:not([hidden])) ::slotted(sdf-icon-legacy),:host(:not([hidden])) sdf-icon,:host(:not([hidden])) sdf-icon-legacy{color:#262321}:host(:not([hidden])):after{transition:box-shadow .2s ease-out}:host(:not([hidden]):focus){outline:0;position:relative}:host(:not([hidden]):focus):after{border-top-left-radius:.375rem;border-top-right-radius:.375rem;border-bottom-left-radius:.375rem;border-bottom-right-radius:.375rem}:host(:not([hidden])):empty{min-height:2.5rem}:host{gap:.5rem}:host(:hover:not([disabled])){background:#f2f0ed;border-color:transparent;border-width:0;color:#262321;cursor:pointer}:host(:hover:not([disabled])) ::slotted(sdf-icon),:host(:hover:not([disabled])) ::slotted(sdf-icon-legacy),:host(:hover:not([disabled])) sdf-icon,:host(:hover:not([disabled])) sdf-icon-legacy{color:#262321}:host(.selected:not([disabled])){background:#e8effa;border-color:transparent;border-width:0;color:#20337d;cursor:pointer}:host(.selected:not([disabled])) ::slotted(sdf-icon),:host(.selected:not([disabled])) ::slotted(sdf-icon-legacy),:host(.selected:not([disabled])) sdf-icon,:host(.selected:not([disabled])) sdf-icon-legacy{color:#20337d}:host(:hover.selected:not([disabled])){cursor:pointer}:host(:focus:hover.selected:not([disabled])){background:#f2f0ed;border-color:transparent;border-width:0;color:#20337d;cursor:pointer}:host(:focus:hover.selected:not([disabled])) ::slotted(sdf-icon),:host(:focus:hover.selected:not([disabled])) ::slotted(sdf-icon-legacy),:host(:focus:hover.selected:not([disabled])) sdf-icon,:host(:focus:hover.selected:not([disabled])) sdf-icon-legacy{color:#20337d}:host([disabled]){background:transparent;border-color:transparent;border-width:0;color:#938c85;cursor:not-allowed;pointer-events:none}:host([disabled]) ::slotted(sdf-icon),:host([disabled]) ::slotted(sdf-icon-legacy),:host([disabled]) sdf-icon,:host([disabled]) sdf-icon-legacy{color:#938c85}:host(:focus:hover.selected:not([disabled])):after,:host(:focus:hover:not([disabled])):after,:host(:focus:not([disabled])):after{display:block;content:"";inset:0;position:absolute;pointer-events:none;z-index:1;box-shadow:0 0 0 1px #fff,0 0 0 3px #476bc3}div.menu-prefix,div.menu-suffix{flex-grow:0;flex-shrink:0}div.menu-label{flex-grow:1}';
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
