## Hogyan tedd elérhetővé a dynamic.json-t?

1. **Indítsd el a FiveM szervert** (a dynamic.json automatikusan elérhető lesz, ha a szerver fut).
2. **Győződj meg róla, hogy a szerver portja (pl. 30120) nyitva van a tűzfalon és a routeren is!**
3. **Külső eléréshez**:
   - A szerver IP-címét és portját add meg (pl. 123.123.123.123:30120).
   - Nyisd meg böngészőben:  
     `http://<IP-cím>:<port>/dynamic.json`  
     Példa:  
     `http://123.123.123.123:30120/dynamic.json`
4. **Ha megjelenik egy JSON tartalom (pl. `{ "clients": 5, ... }`), akkor elérhető.**
5. **Küldd el ezt a linket (pl. http://123.123.123.123:30120/dynamic.json) annak, aki a weboldalhoz szeretné használni.**

### Gyakori hibák
- Ha nem elérhető, akkor:
  - A szerver nem fut.
  - A port nincs kinyitva a tűzfalon vagy routeren.
  - A szerver csak localhoston érhető el (külső IP-ről nem).
  - Internet szolgáltató vagy VPS szolgáltató blokkolja a portot.

**Összefoglalva:**  
A dynamic.json automatikusan elérhető, csak a szerver IP-címét és portját kell megadni, és gondoskodni arról, hogy kívülről is elérhető legyen.
