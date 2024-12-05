export function getIntersectionObserver(callback: (index: number) => void) {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          callback(index);
        }
      });
    },
    {
      threshold: 0.5,
      rootMargin: '0px'
    }
  );
}