document.addEventListener("DOMContentLoaded", function () {
  const html = `
    <style>
      .savvy-cookie-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(10, 10, 10, 0.3);
        z-index: 99999999999;
      }
      
      .savvy-cookie-banner {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        position: fixed;
        bottom: 0;
        left: 0;    
        width: 100%;  
        background: #FFF;
        color: #262321;
        padding: 0.5rem;
        font-family: Circular, -apple-system, "system-ui", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif
      }
      
      .savvy-cookie-banner a {
        color: #262321;
        text-decoration: underline;
        cursor: pointer;
      }
      
      .savvy-cookie-banner button {
        background: transparent;
        cursor: pointer;
        color: #262321;
        border: 1px solid #262321;
        padding: 0.75rem 1.25rem;
        border-radius: 4px;
        height: auto;
        line-height: 1rem;
        font-family: Circular, -apple-system, "system-ui", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif
      }
    </style>
    <div class="savvy-cookie-overlay">
      <div class="savvy-cookie-banner">
        <p>ADP uses cookies and similar technology to customize our site.<br /> <a href="https://www.adp.com/about-adp/data-privacy/adp-cookie-privacy-statement.aspx">Cookie Privacy Statement</a></p>
        <button id="savvy-cookie-accept-button">Accept and Continue</button>
      </div>
    </div>
`;

  document.body.insertAdjacentHTML("beforebegin", html);
  document
    .querySelector("#savvy-cookie-accept-button")
    .addEventListener("click", function () {
      document.querySelector(".savvy-cookie-overlay").remove();
    });
});
