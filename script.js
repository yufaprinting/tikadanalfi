// Countdown menuju hari akad (misalnya: 10 Juni 2025)
const countdown = document.getElementById('countdown');
const weddingDate = new Date("2025-06-10T00:00:00");

function updateCountdown() {
  const now = new Date();
  const timeLeft = weddingDate - now;

  if (timeLeft <= 0) {
    countdown.textContent = "Hari Bahagia Telah Tiba!";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  countdown.textContent = `Menuju Hari Bahagia: ${days}h ${hours}j ${minutes}m ${seconds}d`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Scroll ke atas
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Handle RSVP
function submitRSVP(event) {
  event.preventDefault();
  alert("Terima kasih atas konfirmasi dan doanya!");
  event.target.reset();
}
<script>
  const music = document.getElementById('bg-music');
  const toggleBtn = document.getElementById('toggle-music');

  let isPlaying = true;

  toggleBtn.addEventListener('click', () => {
    if (isPlaying) {
      music.pause();
      toggleBtn.textContent = '🔇';
    } else {
      music.play();
      toggleBtn.textContent = '🔊';
    }
    isPlaying = !isPlaying;
  });

  // Autoplay workaround for some browsers
  document.addEventListener('click', () => {
    if (music.paused) {
      music.play();
    }
  }, { once: true });
</script>
