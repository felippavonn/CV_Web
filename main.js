document.querySelectorAll('.pill').forEach(pill => {
  pill.addEventListener('mouseenter', () => {
    pill.classList.add('active');
    spawnRipple(pill);
  });
  pill.addEventListener('mouseleave', () => {
    pill.classList.remove('active');
  });
});

function spawnRipple(pill) {
  const ripple = document.createElement('span');
  ripple.style.cssText = `
    position: absolute;
    border-radius: 50%;
    background: rgba(255,255,255,0.35);
    width: 6px; height: 6px;
    top: 50%; left: 50%;
    transform: translate(-50%,-50%) scale(0);
    pointer-events: none;
    animation: rippleOut 0.45s ease forwards;
  `;
  pill.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove());
}

const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
  @keyframes rippleOut {
    to { transform: translate(-50%,-50%) scale(14); opacity: 0; }
  }
`;
document.head.appendChild(rippleStyle);
