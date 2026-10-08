// ── HEADER COMPONENT ──
// Edit this ONE file to update the nav across every page of the site

const NAV_HTML = `
<nav>
  <a class="nav-brand" href="/">
    <div class="nav-logo-text">
      Stairway Mortgage
      <div class="nav-logo-sub">&amp; Blackburn Realty Group</div>
    </div>
  </a>
  <div class="nav-divider-v"></div>
  <ul class="nav-links">
    <li><a href="/live-here-settle-estate">Live Here, Settle Estate</a></li>
    <li><a href="/sell-as-is">Sell As-Is</a></li>
    <li><a href="/renovate-first">Renovate First</a></li>
    <li><a href="/rent-it-buy-another">Rent It, Buy Another</a></li>
    <li><a href="/eliminate-payment">Eliminate Payment</a></li>
    <li><a href="/blog">Blog</a></li>
    <li><a href="/contact">Contact</a></li>
    <li><a href="/planning-guide" class="nav-cta">Start Planning &rarr;</a></li>
  </ul>
</nav>
`;

// ── FOOTER COMPONENT ──
// Edit this ONE file to update the footer across every page of the site

const FOOTER_HTML = `
<footer>
  <strong>Stairway Mortgage</strong> &middot; A Division of NEXA Mortgage LLC &middot; NMLS #1660690 &middot; Jim Blackburn NMLS #1072866 &middot; Fort Lauderdale, Florida<br>
  <strong>Blackburn Realty Group</strong> &middot; Olga Blackburn &middot; The Keyes Company &middot; Licensed Real Estate Professional<br><br>
  This website is for informational and educational purposes only and does not constitute financial, legal, or tax advice.<br>
  All mortgage products subject to qualification. Equal Housing Lender.
</footer>
`;

// ── AUTO INJECT ──
// Injects header + footer into every page automatically
document.addEventListener('DOMContentLoaded', () => {
  // Inject nav
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.innerHTML = NAV_HTML;

  // Inject footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.innerHTML = FOOTER_HTML;

  // Highlight active nav link
  const currentPath = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a').forEach(link => {
    const linkPath = link.getAttribute('href').split('/').pop();
    if (linkPath === currentPath) link.classList.add('active');
  });
});
