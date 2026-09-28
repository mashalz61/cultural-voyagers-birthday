<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cultural Voyagers | Dashboard</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; background: #070b19; color: #f8fafc; }
    .font-cinzel { font-family: 'Cinzel', serif; }
  </style>
</head>
<body class="min-h-screen p-4 md:p-8">

  <div class="max-w-7xl mx-auto">
    <!-- Header -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
      <div>
        <a href="../" class="text-xs tracking-widest uppercase text-amber-400 hover:underline mb-2 inline-block">← Back to Portal</a>
        <h1 class="font-cinzel text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent">Voyager Birthday Dashboard</h1>
      </div>
      <a href="../" class="bg-slate-800 border border-slate-700 text-slate-300 hover:text-white px-4 py-2 rounded-xl text-sm transition">Home Portal</a>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div class="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl backdrop-blur-md">
        <p class="text-xs text-slate-400 uppercase tracking-wider mb-1">Total Voyagers</p>
        <h3 id="statTotal" class="text-2xl font-bold font-cinzel text-amber-400">0</h3>
      </div>
      <div class="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl backdrop-blur-md">
        <p class="text-xs text-slate-400 uppercase tracking-wider mb-1">Birthdays Today</p>
        <h3 id="statToday" class="text-2xl font-bold font-cinzel text-amber-400">0</h3>
      </div>
      <div class="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl backdrop-blur-md">
        <p class="text-xs text-slate-400 uppercase tracking-wider mb-1">Next 7 Days</p>
        <h3 id="statWeek" class="text-2xl font-bold font-cinzel text-amber-400">0</h3>
      </div>
      <div class="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl backdrop-blur-md">
        <p class="text-xs text-slate-400 uppercase tracking-wider mb-1">Next 30 Days</p>
        <h3 id="statMonth" class="text-2xl font-bold font-cinzel text-amber-400">0</h3>
      </div>
    </div>

    <!-- Today Alert Banner -->
    <div id="todayAlert" class="hidden bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent border border-amber-500/30 p-6 rounded-2xl mb-8">
      <h2 class="font-cinzel text-lg font-bold text-amber-300 mb-3">🎉 Today's Birthdays!</h2>
      <div id="todayCards" class="grid grid-cols-1 md:grid-cols-3 gap-4"></div>
    </div>

    <!-- Main Content Layout (Form + Table) -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      <!-- Add Voyager Form -->
      <div class="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl backdrop-blur-md h-fit">
        <h2 class="font-cinzel text-lg font-bold text-white mb-4">Add New Voyager</h2>
        <form id="birthdayForm" class="space-y-4">
          <div>
            <label class="block text-xs uppercase tracking-wider text-slate-400 mb-1">Full Name</label>
            <input type="text" id="nameInput" required class="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-400">
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider text-slate-400 mb-1">Email Address</label>
            <input type="email" id="emailInput" required class="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-400">
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider text-slate-400 mb-1">Category</label>
            <input type="text" id="categoryInput" placeholder="e.g. VIP Voyager, Partner" required class="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-400">
          </div>
          <div>
            <label class="block text-xs uppercase tracking-wider text-slate-400 mb-1">Birthday Date</label>
            <input type="date" id="dateInput" required class="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-400">
          </div>
          <button type="submit" class="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-xl transition cursor-pointer">Save Voyager Record</button>
        </form>
      </div>

      <!-- Records Table Section -->
      <div class="lg:col-span-2 bg-slate-900/60 border border-slate-800 p-6 rounded-2xl backdrop-blur-md">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h2 class="font-cinzel text-lg font-bold text-white">Voyager Directory</h2>
          <input type="text" id="searchInput" placeholder="Search by name, email..." class="bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-amber-400 w-full sm:w-64">
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm">
            <thead>
              <tr class="border-b border-slate-800 text-slate-400 text-xs uppercase tracking-wider">
                <th class="pb-3 font-semibold">Name</th>
                <th class="pb-3 font-semibold">Email</th>
                <th class="pb-3 font-semibold">Category</th>
                <th class="pb-3 font-semibold">Birthday</th>
                <th class="pb-3 font-semibold">Countdown</th>
                <th class="pb-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody id="tableBody" class="divide-y divide-slate-800/60"></tbody>
          </table>
          <p id="emptyMsg" class="hidden text-center py-8 text-slate-500 text-sm">No voyager records found.</p>
        </div>
      </div>

    </div>
  </div>

  <!-- Invite Drawer Overlay -->
  <div id="drawerOverlay" class="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 hidden transition-opacity">
    <div id="drawerContainer" class="absolute right-0 top-0 h-full w-full max-w-lg bg-slate-900 border-l border-slate-800 p-6 overflow-y-auto transform translate-x-full transition-transform duration-300">
      <div class="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
        <h3 class="font-cinzel text-xl font-bold text-amber-300">Send Invitation & Voucher</h3>
        <button onclick="closeInviteDrawer()" class="text-slate-400 hover:text-white text-xl font-bold">&times;</button>
      </div>

      <!-- Recipient Badge -->
      <div class="flex items-center gap-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800 mb-6">
        <div id="drawerAvatar" class="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold flex items-center justify-content: center text-lg"></div>
        <div>
          <h4 id="drawerRecipientName" class="font-bold text-white"></h4>
          <p id="drawerRecipientEmail" class="text-xs text-slate-400"></p>
        </div>
      </div>

      <!-- Letter Preview -->
      <div class="mb-6">
        <label class="block text-xs uppercase tracking-wider text-slate-400 mb-2">Personalized Letter Preview</label>
        <div id="drawerLetterPreview" class="bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm text-slate-300 space-y-3 leading-relaxed"></div>
      </div>

      <!-- Voucher Code & Link Sharing -->
      <div class="space-y-4 mb-6">
        <div>
          <label class="block text-xs uppercase tracking-wider text-slate-400 mb-1">Generated Voucher Code</label>
          <div class="bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-amber-400 font-mono font-bold text-sm" id="drawerVoucherCode"></div>
        </div>
        <div>
          <label class="block text-xs uppercase tracking-wider text-slate-400 mb-1">Direct Invitation Link</label>
          <div class="flex gap-2">
            <input type="text" id="drawerShareLink" readonly class="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300 focus:outline-none">
            <button id="copyBtn" onclick="copyInviteLink()" class="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-xl text-xs font-semibold transition">Copy</button>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="space-y-3">
        <button onclick="sendViaGmail()" class="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer">
          <span>✉️ Send via Gmail Draft</span>
        </button>
        <button onclick="viewVoucher()" class="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer">
          <span>🎁 Preview Voucher Page</span>
        </button>
      </div>

    </div>
  </div>

  <!-- JavaScript Logic with LocalStorage -->
  <script>
    // ================= Storage =================
    const STORAGE_KEY = 'cvBirthdayRecords';

    function getStoredRecords() {
      try {
        let data = JSON.parse(localStorage.getItem(STORAGE_KEY));
        // Agar localStorage khali ho toh sample records daal dein taaki shuru mein khali na lage
        if (!data || data.length === 0) {
          data = [
            { id: 1, name: "Ayesha Khan", email: "ayesha@example.com", category: "Voyager", date: "2026-10-05" },
            { id: 2, name: "Bilal Ahmed", email: "bilal@example.com", category: "Partner", date: "2026-10-15" }
          ];
          saveRecords(data);
        }
        return data;
      } catch (e) {
        return [];
      }
    }

    function saveRecords(records) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    }

    // ================= Helpers =================
    function escapeHtml(str) {
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    function daysUntilBirthday(dateStr) {
      const [, m, d] = dateStr.split('-').map(Number);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      let next = new Date(today.getFullYear(), m - 1, d);
      if (next < today) next = new Date(today.getFullYear() + 1, m - 1, d);

      return Math.round((next - today) / 86400000);
    }

    function formatBirthday(dateStr) {
      const [y, m, d] = dateStr.split('-').map(Number);
      return new Date(y, m - 1, d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    }

    // ================= Render =================
    function renderAll() {
      const records = getStoredRecords();
      const query = document.getElementById('searchInput').value.trim().toLowerCase();

      // Stats
      const withDays = records.map(r => ({ ...r, days: daysUntilBirthday(r.date) }));
      document.getElementById('statTotal').innerText = records.length;
      document.getElementById('statToday').innerText = withDays.filter(r => r.days === 0).length;
      document.getElementById('statWeek').innerText = withDays.filter(r => r.days <= 7).length;
      document.getElementById('statMonth').innerText = withDays.filter(r => r.days <= 30).length;

      // Aaj ki birthdays
      const todayList = withDays.filter(r => r.days === 0);
      const alertBox = document.getElementById('todayAlert');
      alertBox.classList.toggle('hidden', todayList.length === 0);
      document.getElementById('todayCards').innerHTML = todayList.map(r => `
        <div class="bg-slate-950/60 border border-amber-500/30 p-4 rounded-xl">
          <strong class="text-white block font-semibold">${escapeHtml(r.name)}</strong>
          <span class="text-xs text-amber-400 block mb-2">${escapeHtml(r.category)}</span>
          <button onclick="openInviteDrawer(${r.id})" class="bg-white text-slate-950 text-xs px-3 py-1.5 rounded-lg font-bold hover:bg-amber-300 transition cursor-pointer">Send Invite</button>
        </div>
      `).join('');

      // Table
      const filtered = withDays
        .filter(r => (r.name + r.email + r.category).toLowerCase().includes(query))
        .sort((a, b) => a.days - b.days);

      document.getElementById('tableBody').innerHTML = filtered.map(r => `
        <tr class="hover:bg-slate-900/40 transition">
          <td class="py-3.5 font-medium text-white">${escapeHtml(r.name)}</td>
          <td class="py-3.5 text-slate-300">${escapeHtml(r.email)}</td>
          <td class="py-3.5 text-slate-300">${escapeHtml(r.category)}</td>
          <td class="py-3.5 text-slate-300">${formatBirthday(r.date)}</td>
          <td class="py-3.5 font-semibold ${r.days === 0 ? 'text-amber-400' : 'text-slate-300'}">${r.days === 0 ? '🎉 Today' : r.days + ' days'}</td>
          <td class="py-3.5">
            <button onclick="openInviteDrawer(${r.id})" class="bg-slate-800 hover:bg-slate-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold mr-2 transition cursor-pointer">Invite</button>
            <button onclick="deleteRecord(${r.id})" class="bg-red-500/10 hover:bg-red-500/20 text-red-400 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer">Delete</button>
          </td>
        </tr>
      `).join('');

      document.getElementById('emptyMsg').classList.toggle('hidden', filtered.length !== 0);
    }

    // ================= Add / Delete =================
    document.getElementById('birthdayForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const records = getStoredRecords();
      records.push({
        id: Date.now(),
        name: document.getElementById('nameInput').value.trim(),
        email: document.getElementById('emailInput').value.trim(),
        category: document.getElementById('categoryInput').value.trim(),
        date: document.getElementById('dateInput').value
      });
      saveRecords(records);

      this.reset();
      renderAll();
    });

    function deleteRecord(id) {
      if (!confirm('Is client ko delete karna hai?')) return;
      saveRecords(getStoredRecords().filter(item => item.id !== id));
      renderAll();
    }

    document.getElementById('searchInput').addEventListener('input', renderAll);

    // ================= Invite Drawer =================
    function openInviteDrawer(id) {
      const records = getStoredRecords();
      const r = records.find(item => item.id === id);
      if (!r) return;

      const safeName = escapeHtml(r.name);
      const safeCategory = escapeHtml(r.category);

      document.getElementById('drawerRecipientName').innerText = r.name;
      document.getElementById('drawerRecipientEmail').innerText = r.email;
      document.getElementById('drawerAvatar').innerText = r.name.substring(0, 2).toUpperCase();

      const voucherCode = `CV-BDAY-${r.name.replace(/\s+/g, '').toUpperCase()}-2026`;
      document.getElementById('drawerVoucherCode').innerText = voucherCode;

      const liveInvitationUrl = `https://glowing-tarsier-6e7668.netlify.app/?code=${voucherCode}`;
      document.getElementById('drawerShareLink').value = liveInvitationUrl;

      const voucherUrl = `https://lighthearted-rugelach-b971a6.netlify.app/?name=${encodeURIComponent(r.name)}&amount=5000`;
      window.currentVoucherUrl = voucherUrl;

      document.getElementById('drawerLetterPreview').innerHTML = `
        <p>Dear <strong class="text-amber-400">${safeName}</strong>,</p>
        <p>Warmest wishes from Cultural Voyagers on your special day!</p>
        <p>As a valued <strong>${safeCategory}</strong>, we are delighted to present you with an exclusive <strong>PKR 5,000 Luxury Travel Voucher</strong> for your next journey.</p>
        <p class="text-slate-400 italic">"May your upcoming year be filled with unforgettable destinations and rich experiences."</p>
      `;

      const subject = encodeURIComponent(`A Birthday Journey Awaits - Cultural Voyagers! 🎉`);
      const bodyText = `Dear ${r.name},\n\nWarmest wishes from Cultural Voyagers on your special day!\n\nWe have designed an exclusive personalized birthday experience for you:\n${liveInvitationUrl}\n\nYour Birthday Voucher:\n${voucherUrl}\n\nYour Voucher Code: ${voucherCode}\n(Valid for PKR 5,000 credit on any international voyage booking)\n\n"May your upcoming year be filled with unforgettable destinations and rich experiences."\n\nBest regards,\nCultural Voyagers Team`;

      window.currentGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(r.email)}&su=${subject}&body=${encodeURIComponent(bodyText)}`;

      const overlay = document.getElementById('drawerOverlay');
      const container = document.getElementById('drawerContainer');
      overlay.classList.remove('hidden');
      setTimeout(() => container.classList.remove('translate-x-full'), 10);
    }

    function closeInviteDrawer() {
      const overlay = document.getElementById('drawerOverlay');
      const container = document.getElementById('drawerContainer');
      container.classList.add('translate-x-full');
      setTimeout(() => overlay.classList.add('hidden'), 300);
    }

    function sendViaGmail() {
      if (window.currentGmailUrl) window.open(window.currentGmailUrl, '_blank');
    }

    function viewVoucher() {
      if (window.currentVoucherUrl) window.open(window.currentVoucherUrl, '_blank');
    }

    function copyInviteLink() {
      const input = document.getElementById('drawerShareLink');
      navigator.clipboard.writeText(input.value).then(() => {
        const btn = document.getElementById('copyBtn');
        btn.innerText = 'Copied!';
        setTimeout(() => (btn.innerText = 'Copy'), 1500);
      });
    }

    // ================= Start =================
    renderAll();
  </script>
</body>
</html>