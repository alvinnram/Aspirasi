document.getElementById('submitBtn').addEventListener('click', function() {
    const nim = document.getElementById('nim').value;
    const password = document.getElementById('password').value;
    // Ganti "halaman_lain.html" dengan URL halaman tujuan
    window.location.href = 'LandingPage.html?nim=' + nim + '&password=' + password;
  });
  