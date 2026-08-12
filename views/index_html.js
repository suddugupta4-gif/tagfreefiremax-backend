const styleCss = require('./style_css');

module.exports = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TAGFREEFIREMAX - Squad Stats & Tournament Tracker</title>
  <style>${styleCss}</style>
</head>
<body>
  <div class="page">
    <div class="brand">
      <div class="mark">TAGFREEFIREMAX</div>
      <div class="sub">Squad Stats & Tournament Tracker</div>
    </div>

    <div class="section-title">Squad Roster</div>
    <div class="players-row" id="playersRow"></div>

    <div class="section-title">Latest Tournament</div>
    <div class="type-toggle">
      <button id="btnOfficial" class="active">Official</button>
      <button id="btnUnofficial">Unofficial</button>
    </div>

    <div id="tournamentArea"></div>

    <div class="section-title">Overall Analysis</div>
    <div id="overallArea" class="glass"></div>

    <div class="section-title">Map Analysis</div>
    <div id="mapArea" class="glass"></div>

    <button id="pastBtn" class="past-btn">📜 Past Tournaments</button>
    <a href="/admin" class="admin-link">Admin Panel →</a>
  </div>

  <div id="pastModal" class="modal-backdrop">
    <div class="modal-box glass">
      <span id="closePast" class="close-x">&times;</span>
      <h3 style="color:var(--gold); margin-bottom:14px; font-size:16px;">Past Tournaments</h3>
      <div id="pastList"></div>
    </div>
  </div>

  <div id="toast" class="toast"></div>

  <script src="/js/app.js"></script>
</body>
</html>`;
