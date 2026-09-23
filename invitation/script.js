// Destinations Data for Cultural Voyagers
// Destinations Data with Working High-Res Unsplash Images
// Destinations Data with Working High-Res Unsplash Images
const destinations = [
  {
    name: "Hunza Valley, Pakistan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgHSX9-TLo516-RqEQb9chDL4tQe5Rt7iswXVK2LJY5lrGwd81JdDSnbZ8&s=10",
    desc: "Majestic mountains, turquoise lakes, and serene landscapes perfect for a relaxing getaway."
  },
  {
    name: "Baku, Azerbaijan",
    image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800&auto=format&fit=crop",
    desc: "Where futuristic architecture meets rich historic eastern culture."
  },
  {
    name: "Phuket, Thailand",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop",
    desc: "Golden tropical beaches, vibrant island life, and unforgettable sunsets."
  }
];
// Extract Client Name from URL query parameter (e.g., ?name=Sanober)
function getClientName() {
  const urlParams = new URLSearchParams(window.location.search);
  const nameParam = urlParams.get('name');
  if (nameParam) {
    // Capitalize first letter
    return nameParam.charAt(0).toUpperCase() + nameParam.slice(1);
  }
  // Default fallback updated from "Traveler" to "Voyagers"
  return "Voyagers";
}

document.addEventListener("DOMContentLoaded", () => {
  // Set Client Name
  const clientNameElement = document.getElementById("clientName");
  if (clientNameElement) {
    clientNameElement.textContent = getClientName();
  }

  // Populate Destination Cards
  const cardGrid = document.getElementById("cardGrid");
  if (cardGrid) {
    cardGrid.innerHTML = ""; // Clear existing grid contents if any
    destinations.forEach(dest => {
      const card = document.createElement("div");
      card.className = "dest-card";
      card.innerHTML = `
        <img src="${dest.image}" alt="${dest.name}" class="dest-img" loading="lazy">
        <div class="dest-info">
          <h3>${dest.name}</h3>
          <p>${dest.desc}</p>
        </div>
      `;
      cardGrid.appendChild(card);
    });
  }

  // Reveal Button Event Listener
  const revealBtn = document.getElementById("revealBtn");
  if (revealBtn) {
    revealBtn.addEventListener("click", () => {
      // Smooth transition between sections
      document.getElementById("opening").classList.add("hidden");
      
      setTimeout(() => {
        document.getElementById("reveal").classList.remove("hidden");
        document.getElementById("destinations").classList.remove("hidden");
        document.getElementById("footer").classList.remove("hidden");

        // Trigger Confetti Celebration Effect
        triggerConfetti();

        // Smooth scroll to reveal section
        window.scrollTo({
          top: document.getElementById("reveal").offsetTop,
          behavior: "smooth"
        });
      }, 400);
    });
  }

  // Initialize Canvas Starfield Effect
  initStars();
});

// Canvas Background Stars
function initStars() {
  const canvas = document.getElementById("starsCanvas");
  if (!canvas) return;
  
  const ctx = canvas.getContext("2d");
  let stars = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  for (let i = 0; i < 120; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      alpha: Math.random(),
      speed: Math.random() * 0.02
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
      star.alpha += star.speed;
      if (star.alpha > 1 || star.alpha < 0) star.speed = -star.speed;
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(star.alpha)})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// Confetti Effect Function
function triggerConfetti() {
  if (typeof confetti !== "function") return;

  const count = 200;
  const defaults = { origin: { y: 0.7 } };

  function fire(particleRatio, opts) {
    confetti(Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio)
    }));
  }

  fire(0.25, { spread: 26, startVelocity: 55 });
  fire(0.2, { spread: 60 });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  fire(0.1, { spread: 120, startVelocity: 45 });
}