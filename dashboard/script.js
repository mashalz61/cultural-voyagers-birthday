function openInviteDrawer(id) {
  const records = getStoredRecords();
  const r = records.find(item => item.id === id);
  if (!r) return;

  // Drawer Details Update
  document.getElementById('drawerRecipientName').innerText = r.name;
  document.getElementById('drawerRecipientEmail').innerText = r.email;
  document.getElementById('drawerAvatar').innerText = r.name.substring(0, 2).toUpperCase();

  const voucherCode = `CV-BDAY-${r.name.replace(/\s+/g, '').toUpperCase()}-2026`;
  document.getElementById('drawerVoucherCode').innerText = voucherCode;

  // Live Netlify Link with Voucher Code
  const liveInvitationUrl = `https://glowing-tarsier-6e7668.netlify.app/?code=${voucherCode}`;
  document.getElementById('drawerShareLink').value = liveInvitationUrl;

  // Letter Preview Content
  document.getElementById('drawerLetterPreview').innerHTML = `
    <p>Dear <strong class="text-amber-400">${r.name}</strong>,</p>
    <p>Warmest wishes from Cultural Voyagers on your special day!</p>
    <p>As a valued <strong>${r.category}</strong>, we are delighted to present you with an exclusive <strong>PKR 5,000 Luxury Travel Voucher</strong> for your next journey.</p>
    <p class="text-slate-400 italic">"May your upcoming year be filled with unforgettable destinations and rich experiences."</p>
  `;

  // Gmail Compose Setup
  const subject = encodeURIComponent(`A Birthday Journey Awaits - Cultural Voyagers! 🎉`);
  const bodyText = `Dear ${r.name},\n\nWarmest wishes from Cultural Voyagers on your special day!\n\nWe have designed an exclusive personalized birthday experience for you:\n${liveInvitationUrl}\n\nYour Voucher Code: ${voucherCode}\n(Valid for PKR 5,000 credit on any international voyage booking)\n\n"May your upcoming year be filled with unforgettable destinations and rich experiences."\n\nBest regards,\nCultural Voyagers Team`;

  // Save Gmail URL globally for the button
  window.currentGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(r.email)}&su=${subject}&body=${encodeURIComponent(bodyText)}`;

  // Open Drawer UI
  const overlay = document.getElementById('drawerOverlay');
  const container = document.getElementById('drawerContainer');
  overlay.classList.remove('hidden');
  setTimeout(() => {
    container.classList.remove('translate-x-full');
  }, 10);
}