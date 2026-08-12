module.exports = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TAGFREEFIREMAX - Admin Panel</title>
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
  <div class="page">
    <div class="brand">
      <div class="mark">TAGFREEFIREMAX</div>
      <div class="sub">Admin Control Panel</div>
    </div>

    <!-- Login Box -->
    <div id="loginBox" class="glass admin-card" style="max-width:400px; margin:40px auto;">
      <h3>Admin Authentication</h3>
      <label>Password</label>
      <input type="password" id="loginPw" placeholder="Enter admin password">
      <button id="loginBtn" class="btn">Login</button>
    </div>

    <!-- Admin Body -->
    <div id="adminBody" style="display:none;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
        <h2 style="font-size:16px; color:var(--gold);">Control Dashboard</h2>
        <button id="logoutBtn" class="btn secondary">Logout</button>
      </div>

      <!-- Background Settings -->
      <div class="glass admin-card">
        <h3>Custom Backgrounds</h3>
        <div class="grid2">
          <div>
            <label>Main Background Image</label>
            <input type="file" id="bgFile" accept="image/*">
            <button id="saveBg" class="btn">Upload Background</button>
          </div>
          <div>
            <label>Scoreboard Banner</label>
            <input type="file" id="scoreboardFile" accept="image/*">
            <button id="saveScoreboard" class="btn">Upload Banner</button>
          </div>
        </div>
      </div>

      <!-- Player Management -->
      <div class="glass admin-card">
        <h3>Player Management</h3>
        <div id="playerList" style="margin-bottom:14px;"></div>
        <div class="grid2">
          <div>
            <label>Select Player</label>
            <select id="playerSelect"></select>
          </div>
          <div>
            <label>Update Photo</label>
            <input type="file" id="playerPhoto" accept="image/*">
          </div>
        </div>
        <button id="savePlayer" class="btn">Save Player Photo</button>
      </div>

      <!-- Tournament Management -->
      <div class="glass admin-card">
        <h3>Create New Tournament</h3>
        <div class="grid2">
          <div>
            <label>Tournament Type</label>
            <select id="tType">
              <option value="official">Official</option>
              <option value="unofficial">Unofficial</option>
            </select>
          </div>
          <div>
            <label>Tournament Name</label>
            <input type="text" id="tName" placeholder="e.g. FFWS 2026 Finals">
          </div>
        </div>
        <label>YouTube Stream / VOD Link (Optional)</label>
        <input type="url" id="tYt" placeholder="https://youtube.com/watch?v=...">
        <button id="createTournament" class="btn">Create Tournament</button>
      </div>

      <!-- Match Results Entry -->
      <div class="glass admin-card">
        <h3>Add Match Result</h3>
        <div id="mTournamentLabel" class="hint" style="color:var(--gold); margin-bottom:10px;"></div>
        <div class="grid2">
          <div>
            <label>Type</label>
            <select id="mType">
              <option value="official">Official</option>
              <option value="unofficial">Unofficial</option>
            </select>
          </div>
          <div>
            <label>Match #</label>
            <input type="number" id="mNumber" value="1" min="1">
          </div>
        </div>
        <div class="grid2">
          <div>
            <label>Map Name</label>
            <select id="mMap">
              <option value="Bermuda">Bermuda</option>
              <option value="Kalahari">Kalahari</option>
              <option value="Purgatory">Purgatory</option>
              <option value="Alpine">Alpine</option>
              <option value="NeXTTERRA">NeXTTERRA</option>
            </select>
          </div>
          <div>
            <label>Player</label>
            <select id="mPlayer"></select>
          </div>
        </div>
        <div class="grid3">
          <div>
            <label>Kills</label>
            <input type="number" id="mKills" value="0" min="0">
          </div>
          <div>
            <label>Position</label>
            <input type="number" id="mPosition" value="1" min="1">
          </div>
          <div>
            <label>Kill Pts Multiplier</label>
            <input type="number" id="mKillPointValue" value="1" min="0">
          </div>
        </div>
        <div class="grid2">
          <div>
            <label>Position Points</label>
            <input type="number" id="mPositionPoints" value="12" min="0">
          </div>
          <div>
            <label>Total Match Points Preview</label>
            <div id="totalPreview" style="font-family:'Orbitron'; font-size:20px; color:var(--gold); padding:8px 0;">12</div>
          </div>
        </div>
        <button id="saveMatch" class="btn">Save Match Result</button>
      </div>

      <a href="/" class="admin-link">← Back to Homepage</a>
    </div>
  </div>

  <div id="toast" class="toast"></div>

  <script src="/js/admin.js"></script>
</body>
</html>`;
