import throttle from 'lodash-es/throttle';

const root = document.documentElement;
let prevScrollY = window.scrollY;

function flip(attr: string, state: boolean) {
  root.setAttribute(attr, String(state));
}

// IntersectionObserver for "is at top" detection
const intersectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      flip('data-is-top', entry.isIntersecting);
    });
  },
  { root: null, rootMargin: '200px 0px 0px 0px' },
);

const scrollObserver = document.querySelector('[data-scroll-observer]');
if (scrollObserver) {
  intersectionObserver.observe(scrollObserver);
}

function scrollHandler() {
  const currentScrollY = window.scrollY;
  if (currentScrollY > prevScrollY) {
    flip('data-is-scrolling-up', false);
  } else if (currentScrollY < prevScrollY) {
    flip('data-is-scrolling-up', true);
  }
  prevScrollY = currentScrollY;
}

// Scroll listener for direction detection
window.addEventListener('scroll', throttle(scrollHandler, 100), {
  passive: true,
});
