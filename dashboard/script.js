:root {
  --orange: #f5a623;
  --orange-dark: #e08e00;
  --navy: #1b2a4a;
  --navy-light: #263a63;
  --bg: #f7f8fb;
  --white: #ffffff;
  --text: #2c2c2c;
  --muted: #7a7a7a;
}

* { margin:0; padding:0; box-sizing:border-box; font-family:'Segoe UI', Tahoma, sans-serif; }
body { background: var(--bg); color: var(--text); }

/* Navbar */
.navbar {
  display:flex; justify-content:space-between; align-items:center;
  background: var(--white); padding:15px 40px; box-shadow:0 2px 8px rgba(0,0,0,0.08);
  position:sticky; top:0; z-index:100;
}
.logo-area { display:flex; align-items:center; gap:10px; }
.logo-circle {
  width:45px; height:45px; border-radius:50%;
  background: linear-gradient(135deg, var(--orange), var(--navy));
  color:#fff; display:flex; align-items:center; justify-content:center;
  font-weight:bold;
}
.brand-name { font-weight:700; font-size:1.2rem; color:var(--navy); }
nav ul { list-style:none; display:flex; gap:25px; }
nav a { text-decoration:none; color:var(--navy); font-weight:600; }
nav a:hover { color:var(--orange); }

/* Hero */
.hero {
  background: linear-gradient(135deg, var(--navy), var(--navy-light));
  color:#fff; text-align:center; padding:60px 20px;
}
.hero h1 { font-size:2.2rem; margin-bottom:10px; }
.hero p { color:#d8dce8; }

/* Container */
.container { max-width:1100px; margin:0 auto; padding:40px 20px; }

/* Stats */
.stats { display:flex; gap:20px; margin-bottom:40px; flex-wrap:wrap; }
.stat-card {
  flex:1; min-width:150px; background:var(--white); border-radius:12px;
  padding:25px; text-align:center; box-shadow:0 4px 12px rgba(0,0,0,0.06);
  border-top:4px solid var(--orange);
}
.stat-card.highlight { border-top-color:var(--navy); background:#fff9ee; }
.stat-card h3 { font-size:2rem; color:var(--navy); }
.stat-card p { color:var(--muted); margin-top:5px; }

/* Today alert */
.today-alert { margin-bottom:40px; }
.today-alert h2 { color:var(--navy); margin-bottom:15px; }
.card-grid { display:flex; gap:15px; flex-wrap:wrap; }
.bday-card {
  background: linear-gradient(135deg, var(--orange), var(--orange-dark));
  color:#fff; padding:15px 20px; border-radius:10px; min-width:200px;
}
.bday-card strong { font-size:1.05rem; }
.hidden { display:none; }

/* Form */
.form-section {
  background:var(--white); padding:30px; border-radius:12px;
  box-shadow:0 4px 12px rgba(0,0,0,0.06); margin-bottom:40px;
}
.form-section h2 { color:var(--navy); margin-bottom:20px; }
#birthdayForm { display:grid; grid-template-columns:1fr 1fr; gap:15px; }
#birthdayForm input {
  padding:12px 15px; border:1px solid #ddd; border-radius:8px; font-size:0.95rem;
}
#birthdayForm input:focus { outline:none; border-color:var(--orange); }
#submitBtn {
  grid-column:span 2; background:var(--navy); color:#fff; border:none;
  padding:13px; border-radius:8px; font-weight:600; cursor:pointer; transition:0.2s;
}
#submitBtn:hover { background:var(--orange); }

/* List */
.list-section {
  background:var(--white); padding:30px; border-radius:12px;
  box-shadow:0 4px 12px rgba(0,0,0,0.06);
}
.list-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; flex-wrap:wrap; gap:10px; }
.list-header h2 { color:var(--navy); }
#searchInput { padding:10px 15px; border:1px solid #ddd; border-radius:8px; width:250px; }
table { width:100%; border-collapse:collapse; }
th, td { text-align:left; padding:12px; border-bottom:1px solid #eee; font-size:0.9rem; }
th { color:var(--navy); background:#fafafa; }
.del-btn {
  background:#ff5b5b; color:#fff; border:none; padding:6px 12px;
  border-radius:6px; cursor:pointer; font-size:0.8rem;
}
.del-btn:hover { background:#e03e3e; }
.days-left { font-weight:600; color:var(--orange-dark); }

footer { text-align:center; padding:20px; color:var(--muted); font-size:0.85rem; }

@media (max-width:600px) {
  #birthdayForm { grid-template-columns:1fr; }
  #submitBtn { grid-column:span 1; }
  nav ul { gap:12px; }
}