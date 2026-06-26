console.log('%cRehan Connect Loaded ✅', 'color:#9b00ff;font-size:16px;font-weight:600');

function showToast(msg) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position:fixed; bottom:30px; left:50%; transform:translateX(-50%);
        background:#6a00ff; color:white; padding:14px 28px; border-radius:50px;
        z-index:10000; box-shadow:0 10px 30px rgba(106,0,255,0.4);
    `;
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

// Global helpers
window.showToast = showToast;

