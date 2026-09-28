<script>
  window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const amount = urlParams.get('amount');

    if (name) {
      const nameEl = document.getElementById('clientNameDisplay');
      nameEl.innerText = name;
      nameEl.classList.remove('text-slate-400', 'italic');
    }

    if (amount) {
      const num = Number(amount);
      const clientAmount = !isNaN(num) && num > 0 ? `${num.toLocaleString()}/- PKR` : amount;
      const amountEl = document.getElementById('voucherAmountDisplay');
      amountEl.innerText = clientAmount;
      amountEl.classList.remove('text-slate-400', 'italic');
    }

    // QR code ab seedha website par jayega
    const qrText = 'https://culturalvoyagers.com/';
    document.getElementById("qrcode").innerHTML = "";
    new QRCode(document.getElementById("qrcode"), {
      text: qrText,
      width: 90,
      height: 90,
      colorDark: "#0f172a",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  };
</script>