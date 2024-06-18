
(function() {
  const componentSelector = 'sdf-busy-indicator';
  // Generated from 'src/themes/one/busy-indicator.css
  const componentTheme = ':host(:not([hidden])){display:flex;justify-content:center;align-items:center}.track{stroke:#e3ddf4}:host([size=sm]) svg{width:1rem;height:1rem}:host([size=sm]) svg .path,:host([size=sm]) svg .track{stroke-width:.5rem}:host([size=md]) svg{width:2rem;height:2rem}:host([size=md]) svg .path,:host([size=md]) svg .track{stroke-width:.5rem}:host([size=lg]) svg{width:3rem;height:3rem}:host([size=lg]) svg .path,:host([size=lg]) svg .track{stroke-width:.5rem}:host([size=xl]) svg{width:4rem;height:4rem}:host([size=xl]) svg .path,:host([size=xl]) svg .track{stroke-width:.5rem}:host([fullscreen]),:host([overlay]){inset:0;background-color:hsla(0,0%,100%,.5)}:host([inverse][fullscreen]),:host([inverse][overlay]){background-color:rgba(38,35,33,.6)}:host([overlay]){position:absolute}:host([fullscreen]){position:fixed;z-index:50}:host .spinner{stroke:#7967ae;animation:rotator .9875s linear infinite}:host .track{stroke:#e3ddf4}:host([inverse]) .spinner{stroke:#fff}:host([inverse]) .track{stroke:transparent}@keyframes rotator{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.path,.track{fill:none;stroke-linecap:round}.path{transform-origin:center;stroke-dasharray:187;stroke-dashoffset:187;animation:dash 6s cubic-bezier(.42,.01,.58,1) infinite}@keyframes dash{0%{stroke-dashoffset:187;transform:rotate(0deg)}50%{stroke-dashoffset:46.75;transform:rotate(135deg)}to{stroke-dashoffset:187;transform:rotate(450deg)}}.wrapper{animation:dashrotator 6s ease-in-out infinite}@keyframes dashrotator{0%{transform:rotate(0deg)}to{transform:rotate(270deg)}}';
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
