# 📺 Netflix Screensaver Mode (Interactive)

Un proyecto experimental que recrea la experiencia cinematográfica de **Netflix** mediante un sistema de detección de inactividad con cuenta atrás dinámica.

## ✨ Características principales
- **Contador Dinámico:** Visualización en tiempo real de 5 a 0 antes de activar el modo protector.
- **Efecto "Tudum":** Activación del audio icónico de Netflix al iniciar el protector.
- **Estética Original:** Uso del logo oficial, efectos de viñeta (bordes oscuros) y resplandor ambiental (*glow*).
- **Lógica de Reset:** El sistema detecta cualquier interacción (ratón, teclado o click) para ocultar el protector y reiniciar la cuenta atrás instantáneamente.

## 🛠️ Tecnologías utilizadas
- **HTML5:** Estructura semántica y gestión de audio.
- **CSS3 Avanzado:** - Animaciones de pulsación (`@keyframes pulse`).
  - Transiciones de entrada con desenfoque cinematográfico.
  - Gradientes radiales para profundidad visual.
- **JavaScript (Vanilla):** - Gestión de intervalos (`setInterval`) y temporizadores.
  - Control de eventos globales del DOM.
  - Lógica de reinicio de estado.

## 🚀 Cómo utilizarlo
1. Clona el repositorio.
2. Abre el archivo `index.html` en tu navegador.
3. **Importante:** Haz clic en cualquier parte de la pantalla al cargar (los navegadores modernos bloquean el audio automático hasta que el usuario interactúa con la página).
4. Espera 5 segundos sin mover el ratón para ver el efecto.

---
Proyecto desarrollado para practicar el manejo de **Eventos de Inactividad** y **Animaciones CSS** de alto impacto.
