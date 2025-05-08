import Lenis from '@studio-freight/lenis';

// 声明全局类型
declare global {
  interface Window {
    lenis: Lenis;
  }
}

export default defineNuxtPlugin(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // 使用 window 而不是 globalThis
  window.lenis = lenis;
});
