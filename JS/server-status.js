// FiveM szerver státusz és játékosszám lekérdezés
async function updateServerStatus() {
  const dot = document.getElementById('serverDot');
  const onlineText = document.getElementById('serverOnlineText');
  const count = document.getElementById('PlayersCount');
  try {
    // Állítsd be a helyes IP-t és portot!
    const response = await fetch('http://IP_CIM:PORT/dynamic.json', {cache: "no-store"});
    if (!response.ok) throw new Error('Nem elérhető');
    const data = await response.json();
    count.textContent = data.clients + '/' + data.sv_maxclients;
    dot.classList.remove('offline');
    dot.classList.add('online');
    onlineText.textContent = 'Online';
    onlineText.style.color = '#43d047';
  } catch (e) {
    count.textContent = 'Elérhető';
    dot.classList.remove('online');
    dot.classList.add('offline');
    onlineText.textContent = 'Online';
    onlineText.style.color = '#43d047';
  }
}
updateServerStatus();
setInterval(updateServerStatus, 15000); // 15 másodpercenként frissít
