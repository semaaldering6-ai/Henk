const HTML = `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Design Thinking – De 5 Stappen</title>
  <style>
    /* ── Reset & base ── */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --clr-bg:        #0f172a;
      --clr-surface:   #1e293b;
      --clr-border:    #334155;
      --clr-text:      #e2e8f0;
      --clr-muted:     #94a3b8;

      --step-1: #f97316;  /* Empathize  – orange  */
      --step-2: #eab308;  /* Define     – yellow  */
      --step-3: #22c55e;  /* Ideate     – green   */
      --step-4: #3b82f6;  /* Prototype  – blue    */
      --step-5: #a855f7;  /* Test       – purple  */

      --radius: 1rem;
      --transition: 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'Segoe UI', system-ui, sans-serif;
      background: var(--clr-bg);
      color: var(--clr-text);
      min-height: 100vh;
      line-height: 1.7;
    }

    /* ── Hero ── */
    header {
      background: linear-gradient(135deg, #1e293b 0%, #0f172a 60%, #1e1035 100%);
      text-align: center;
      padding: 5rem 1.5rem 4rem;
      position: relative;
      overflow: hidden;
    }

    header::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse at 50% 0%, rgba(168,85,247,.18) 0%, transparent 70%);
      pointer-events: none;
    }

    header h1 {
      font-size: clamp(2rem, 6vw, 4rem);
      font-weight: 800;
      letter-spacing: -0.03em;
      background: linear-gradient(135deg, #f97316, #eab308, #22c55e, #3b82f6, #a855f7);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 1rem;
    }

    header p {
      max-width: 640px;
      margin: 0 auto 2.5rem;
      color: var(--clr-muted);
      font-size: 1.1rem;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: .5rem;
      background: rgba(255,255,255,.06);
      border: 1px solid var(--clr-border);
      border-radius: 999px;
      padding: .4rem 1rem;
      font-size: .85rem;
      color: var(--clr-muted);
    }

    /* ── Nav dots ── */
    .step-nav {
      display: flex;
      justify-content: center;
      gap: .75rem;
      padding: 1.5rem 1rem;
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(15,23,42,.85);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--clr-border);
    }

    .step-nav a {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: .8rem;
      font-weight: 700;
      text-decoration: none;
      color: var(--clr-muted);
      border: 2px solid var(--clr-border);
      transition: var(--transition);
    }

    .step-nav a:hover,
    .step-nav a.active {
      color: #fff;
      transform: scale(1.15);
    }

    .step-nav a[data-step="1"] { --c: var(--step-1); }
    .step-nav a[data-step="2"] { --c: var(--step-2); }
    .step-nav a[data-step="3"] { --c: var(--step-3); }
    .step-nav a[data-step="4"] { --c: var(--step-4); }
    .step-nav a[data-step="5"] { --c: var(--step-5); }

    .step-nav a:hover,
    .step-nav a.active {
      border-color: var(--c);
      background: color-mix(in srgb, var(--c) 15%, transparent);
      color: var(--c);
    }

    /* ── Main layout ── */
    main {
      max-width: 900px;
      margin: 0 auto;
      padding: 4rem 1.5rem;
    }

    /* ── Intro box ── */
    .intro-box {
      background: var(--clr-surface);
      border: 1px solid var(--clr-border);
      border-radius: var(--radius);
      padding: 2rem;
      margin-bottom: 4rem;
    }

    .intro-box h2 {
      font-size: 1.4rem;
      margin-bottom: .75rem;
      color: #fff;
    }

    .intro-box p { color: var(--clr-muted); }

    .pill-row {
      display: flex;
      flex-wrap: wrap;
      gap: .5rem;
      margin-top: 1.25rem;
    }

    .pill {
      font-size: .8rem;
      font-weight: 600;
      padding: .3rem .85rem;
      border-radius: 999px;
      border: 1px solid;
      opacity: .9;
    }

    /* ── Step cards ── */
    .step-card {
      position: relative;
      background: var(--clr-surface);
      border: 1px solid var(--clr-border);
      border-radius: var(--radius);
      padding: 2rem;
      margin-bottom: 2rem;
      overflow: hidden;
      transition: var(--transition);
      cursor: pointer;
    }

    .step-card::before {
      content: '';
      position: absolute;
      left: 0; top: 0; bottom: 0;
      width: 5px;
      background: var(--accent);
      border-radius: var(--radius) 0 0 var(--radius);
      transition: width var(--transition);
    }

    .step-card:hover::before { width: 8px; }

    .step-card:hover {
      border-color: color-mix(in srgb, var(--accent) 50%, var(--clr-border));
      box-shadow: 0 0 0 1px color-mix(in srgb, var(--accent) 20%, transparent),
                  0 8px 32px -4px rgba(0,0,0,.4);
      transform: translateY(-2px);
    }

    .step-card[data-step="1"] { --accent: var(--step-1); }
    .step-card[data-step="2"] { --accent: var(--step-2); }
    .step-card[data-step="3"] { --accent: var(--step-3); }
    .step-card[data-step="4"] { --accent: var(--step-4); }
    .step-card[data-step="5"] { --accent: var(--step-5); }

    .card-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.25rem;
    }

    .step-icon {
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      flex-shrink: 0;
      background: color-mix(in srgb, var(--accent) 15%, var(--clr-bg));
      border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);
    }

    .step-label {
      display: flex;
      flex-direction: column;
      gap: .15rem;
    }

    .step-number {
      font-size: .75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: .08em;
      color: var(--accent);
    }

    .step-title {
      font-size: 1.3rem;
      font-weight: 700;
      color: #fff;
    }

    .step-subtitle {
      font-size: .9rem;
      color: var(--clr-muted);
    }

    .card-body p { color: var(--clr-muted); margin-bottom: 1rem; }
    .card-body p:last-child { margin-bottom: 0; }

    /* ── Expandable extra content ── */
    .card-extra {
      max-height: 0;
      overflow: hidden;
      transition: max-height .4s ease, opacity .3s ease;
      opacity: 0;
    }

    .step-card.open .card-extra {
      max-height: 600px;
      opacity: 1;
    }

    .card-extra-inner {
      border-top: 1px solid var(--clr-border);
      margin-top: 1.25rem;
      padding-top: 1.25rem;
    }

    .tip-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: .6rem;
    }

    .tip-list li {
      display: flex;
      align-items: flex-start;
      gap: .6rem;
      color: var(--clr-muted);
      font-size: .95rem;
    }

    .tip-list li::before {
      content: '✓';
      color: var(--accent);
      font-weight: 700;
      flex-shrink: 0;
      margin-top: .05rem;
    }

    .expand-hint {
      display: flex;
      align-items: center;
      gap: .4rem;
      font-size: .8rem;
      color: var(--clr-muted);
      margin-top: 1rem;
      transition: color var(--transition);
    }

    .step-card:hover .expand-hint { color: var(--accent); }

    .expand-hint svg {
      transition: transform var(--transition);
    }

    .step-card.open .expand-hint svg { transform: rotate(180deg); }

    /* ── Process flow diagram ── */
    .flow {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: .5rem;
      margin: 3rem 0;
      padding: 2rem;
      background: var(--clr-surface);
      border: 1px solid var(--clr-border);
      border-radius: var(--radius);
    }

    .flow-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: .3rem;
      padding: .75rem 1rem;
      border-radius: .75rem;
      font-size: .8rem;
      font-weight: 600;
      min-width: 80px;
      text-align: center;
    }

    .flow-item span:first-child { font-size: 1.4rem; }

    .flow-arrow {
      font-size: 1.2rem;
      color: var(--clr-muted);
    }

    .flow-note {
      width: 100%;
      text-align: center;
      font-size: .8rem;
      color: var(--clr-muted);
      margin-top: .5rem;
      font-style: italic;
    }

    /* ── Footer ── */
    footer {
      text-align: center;
      padding: 3rem 1rem;
      border-top: 1px solid var(--clr-border);
      color: var(--clr-muted);
      font-size: .85rem;
    }

    footer a {
      color: #a855f7;
      text-decoration: none;
    }

    footer a:hover { text-decoration: underline; }

    /* ── Responsive ── */
    @media (max-width: 600px) {
      .step-icon { width: 2.8rem; height: 2.8rem; font-size: 1.3rem; }
      .step-title { font-size: 1.1rem; }
      .flow-arrow { display: none; }
    }
  </style>
</head>
<body>

<header>
  <h1>Design Thinking</h1>
  <p>Een mensgerichte methode om complexe problemen op te lossen en innovatie te stimuleren.</p>
  <span class="badge">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5L6.5 12 8 10.5l4 4 8-8 1.5 1.5-9.5 9z"/></svg>
    Gebaseerd op Herbert Simon's 5-stappen model
  </span>
</header>

<!-- Sticky navigation -->
<nav class="step-nav" aria-label="Stap navigatie">
  <a href="#step-1" data-step="1" title="Empathize">1</a>
  <a href="#step-2" data-step="2" title="Define">2</a>
  <a href="#step-3" data-step="3" title="Ideate">3</a>
  <a href="#step-4" data-step="4" title="Prototype">4</a>
  <a href="#step-5" data-step="5" title="Test">5</a>
</nav>

<main>

  <!-- Intro -->
  <div class="intro-box">
    <h2>Wat is Design Thinking?</h2>
    <p>
      De kern van de methode is het transformeren van een <strong style="color:#e2e8f0">bestaande situatie</strong>
      naar een <strong style="color:#e2e8f0">betere, gewenste toekomst</strong>. Het proces is
      <strong style="color:#e2e8f0">niet-lineair</strong>: je keert regelmatig terug naar een eerdere fase wanneer
      je nieuwe inzichten opdoet.
    </p>
    <div class="pill-row">
      <span class="pill" style="color:var(--step-1);border-color:var(--step-1)">Mensgericht</span>
      <span class="pill" style="color:var(--step-3);border-color:var(--step-3)">Iteratief</span>
      <span class="pill" style="color:var(--step-4);border-color:var(--step-4)">Creatief</span>
      <span class="pill" style="color:var(--step-5);border-color:var(--step-5)">Innovatief</span>
    </div>
  </div>

  <!-- Process flow -->
  <div class="flow" role="img" aria-label="Design Thinking processtroom">
    <div class="flow-item" style="background:color-mix(in srgb,var(--step-1) 12%,transparent);color:var(--step-1)">
      <span>🤝</span>Empathize
    </div>
    <span class="flow-arrow">→</span>
    <div class="flow-item" style="background:color-mix(in srgb,var(--step-2) 12%,transparent);color:var(--step-2)">
      <span>🎯</span>Define
    </div>
    <span class="flow-arrow">→</span>
    <div class="flow-item" style="background:color-mix(in srgb,var(--step-3) 12%,transparent);color:var(--step-3)">
      <span>💡</span>Ideate
    </div>
    <span class="flow-arrow">→</span>
    <div class="flow-item" style="background:color-mix(in srgb,var(--step-4) 12%,transparent);color:var(--step-4)">
      <span>🔧</span>Prototype
    </div>
    <span class="flow-arrow">→</span>
    <div class="flow-item" style="background:color-mix(in srgb,var(--step-5) 12%,transparent);color:var(--step-5)">
      <span>🧪</span>Test
    </div>
    <p class="flow-note">Het proces is niet-lineair — je kunt altijd terugkeren naar een eerdere fase.</p>
  </div>

  <!-- Step 1: Empathize -->
  <article id="step-1" class="step-card" data-step="1" tabindex="0" role="button" aria-expanded="false">
    <div class="card-header">
      <div class="step-icon">🤝</div>
      <div class="step-label">
        <span class="step-number">Stap 1</span>
        <span class="step-title">Empathize</span>
        <span class="step-subtitle">Inleven in de eindgebruiker</span>
      </div>
    </div>
    <div class="card-body">
      <p>
        Dit is de <strong style="color:#e2e8f0">belangrijkste fase</strong>. Je probeert de menselijke behoefte van de
        eindgebruiker echt te begrijpen. Je zet je eigen aannames opzij en verzamelt data door middel van
        interviews, observaties en enquêtes.
      </p>
      <p>
        <strong style="color:var(--step-1)">Doel:</strong> Ontdekken wat gebruikers motiveert en waar zij tegenaan lopen.
      </p>
    </div>
    <div class="card-extra">
      <div class="card-extra-inner">
        <ul class="tip-list">
          <li>Voer diepte-interviews met echte gebruikers</li>
          <li>Observeer gebruikers in hun natuurlijke omgeving</li>
          <li>Gebruik empathy maps om inzichten te visualiseren</li>
          <li>Stel open vragen — vermijd ja/nee antwoorden</li>
          <li>Zoek naar emoties, frustraties én verlangens</li>
        </ul>
      </div>
    </div>
    <div class="expand-hint">
      Klik voor technieken &amp; tips
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
    </div>
  </article>

  <!-- Step 2: Define -->
  <article id="step-2" class="step-card" data-step="2" tabindex="0" role="button" aria-expanded="false">
    <div class="card-header">
      <div class="step-icon">🎯</div>
      <div class="step-label">
        <span class="step-number">Stap 2</span>
        <span class="step-title">Define</span>
        <span class="step-subtitle">Het probleem scherp formuleren</span>
      </div>
    </div>
    <div class="card-body">
      <p>
        Met de informatie uit de eerste fase ga je het <strong style="color:#e2e8f0">daadwerkelijke probleem</strong>
        omschrijven. In plaats van een breed probleem formuleer je het vanuit de gebruiker.
      </p>
      <p>
        <strong style="color:var(--step-2)">Voorbeeld:</strong>
        <em>"De gebruiker heeft behoefte aan een klein apparaat dat snel één kopje sterke espresso kan zetten."</em>
      </p>
    </div>
    <div class="card-extra">
      <div class="card-extra-inner">
        <ul class="tip-list">
          <li>Gebruik een Point-of-View (POV) statement: <em>[Gebruiker] needs [behoefte] because [inzicht]</em></li>
          <li>Clustereer inzichten uit de Empathize-fase met affinity mapping</li>
          <li>Focus op de kern: wat is het werkelijke probleem?</li>
          <li>Vermijd oplossingen in je probleemstelling</li>
          <li>Betrek alle teamleden bij het definiëren</li>
        </ul>
      </div>
    </div>
    <div class="expand-hint">
      Klik voor technieken &amp; tips
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
    </div>
  </article>

  <!-- Step 3: Ideate -->
  <article id="step-3" class="step-card" data-step="3" tabindex="0" role="button" aria-expanded="false">
    <div class="card-header">
      <div class="step-icon">💡</div>
      <div class="step-label">
        <span class="step-number">Stap 3</span>
        <span class="step-title">Ideate</span>
        <span class="step-subtitle">Ideeën genereren zonder oordeel</span>
      </div>
    </div>
    <div class="card-body">
      <p>
        Nu je weet wat het probleem is, ga je brainstormen. In deze fase is
        <strong style="color:#e2e8f0">kwantiteit belangrijker dan kwaliteit</strong> — elk idee is welkom, hoe gek ook.
        Oordelen is verboden, want dat remt de creativiteit.
      </p>
      <p>
        <strong style="color:var(--step-3)">Doel:</strong> Het probleem vanuit zoveel mogelijk verschillende invalshoeken bekijken.
      </p>
    </div>
    <div class="card-extra">
      <div class="card-extra-inner">
        <ul class="tip-list">
          <li>Brainstorm: genereer zo veel mogelijk ideeën in korte tijd</li>
          <li>Crazy 8's: schets 8 ideeën in 8 minuten</li>
          <li>SCAMPER-methode: Substitute, Combine, Adapt, Modify, Put to other use, Eliminate, Reverse</li>
          <li>Mind mapping om verbanden tussen ideeën te ontdekken</li>
          <li>Selecteer daarna de meest kansrijke ideeën via dot-voting</li>
        </ul>
      </div>
    </div>
    <div class="expand-hint">
      Klik voor technieken &amp; tips
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
    </div>
  </article>

  <!-- Step 4: Prototype -->
  <article id="step-4" class="step-card" data-step="4" tabindex="0" role="button" aria-expanded="false">
    <div class="card-header">
      <div class="step-icon">🔧</div>
      <div class="step-label">
        <span class="step-number">Stap 4</span>
        <span class="step-title">Prototype</span>
        <span class="step-subtitle">Ideeën tastbaar maken</span>
      </div>
    </div>
    <div class="card-body">
      <p>
        De meest veelbelovende ideeën worden omgezet in <strong style="color:#e2e8f0">tastbare, goedkope versies</strong>.
        Dit kan een papieren schets zijn, een kleimodel of een simpele digitale simulatie.
      </p>
      <p>
        <strong style="color:var(--step-4)">Doel:</strong> Onderzoeken of de voorgestelde oplossingen in de praktijk werken.
      </p>
    </div>
    <div class="card-extra">
      <div class="card-extra-inner">
        <ul class="tip-list">
          <li>Paper prototype: snel en goedkoop schetsen op papier</li>
          <li>Wireframes of mockups voor digitale producten</li>
          <li>Klei- of kartonmodellen voor fysieke producten</li>
          <li>Rollenspel (role play) om diensten te simuleren</li>
          <li>Bouw snel — perfectie is nu niet het doel</li>
        </ul>
      </div>
    </div>
    <div class="expand-hint">
      Klik voor technieken &amp; tips
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
    </div>
  </article>

  <!-- Step 5: Test -->
  <article id="step-5" class="step-card" data-step="5" tabindex="0" role="button" aria-expanded="false">
    <div class="card-header">
      <div class="step-icon">🧪</div>
      <div class="step-label">
        <span class="step-number">Stap 5</span>
        <span class="step-title">Test</span>
        <span class="step-subtitle">Leren van echte gebruikers</span>
      </div>
    </div>
    <div class="card-body">
      <p>
        De prototypes worden getest door de <strong style="color:#e2e8f0">echte gebruikers</strong>. Je kijkt hoe zij
        reageren, wat zij voelen en hoe ze het product gebruiken. De feedback gebruik je om het product te verbeteren.
      </p>
      <p>
        <strong style="color:var(--step-5)">Resultaat:</strong> Testresultaten leiden er vaak toe dat je teruggaat naar
        <em>Ideate</em> of zelfs <em>Define</em> om de oplossing verder aan te scherpen.
      </p>
    </div>
    <div class="card-extra">
      <div class="card-extra-inner">
        <ul class="tip-list">
          <li>Gebruik usability testing: observeer gebruikers zonder te sturen</li>
          <li>Stel open vragen na de test: "Wat vond je verrassend?"</li>
          <li>Documenteer feedback systematisch (notities, video)</li>
          <li>Analyseer patronen: wat gaat goed, wat niet?</li>
          <li>Besluit daarna of je itereert of door gaat naar implementatie</li>
        </ul>
      </div>
    </div>
    <div class="expand-hint">
      Klik voor technieken &amp; tips
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
    </div>
  </article>

</main>

<footer>
  <p>Design Thinking · Gebaseerd op het model van <a href="https://en.wikipedia.org/wiki/Herbert_A._Simon" target="_blank" rel="noopener">Herbert Simon</a></p>
  <p style="margin-top:.5rem">Gebouwd met <a href="https://workers.cloudflare.com/" target="_blank" rel="noopener">Cloudflare Workers</a></p>
</footer>

<script>
  // ── Expand/collapse step cards ──
  document.querySelectorAll('.step-card').forEach(card => {
    function toggle() {
      const isOpen = card.classList.toggle('open');
      card.setAttribute('aria-expanded', isOpen);
    }
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });

  // ── Sticky nav active state on scroll ──
  const sections = document.querySelectorAll('[id^="step-"]');
  const navLinks = document.querySelectorAll('.step-nav a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });

  sections.forEach(s => observer.observe(s));
</script>

</body>
</html>`;

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Health check endpoint
    if (url.pathname === '/health') {
      return new Response(JSON.stringify({ status: 'ok', service: 'design-thinking-app' }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Serve the main HTML page for all other routes
    return new Response(HTML, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
        'Cache-Control': 'public, max-age=3600',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Content-Security-Policy': "default-src 'self'; style-src 'unsafe-inline'; script-src 'unsafe-inline'; img-src 'self' data:;",
      },
    });
  },
};
