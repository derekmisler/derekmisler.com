import NavToggle from '@/components/NavToggle.astro';

export default {
  title: 'Components/NavToggle',
  component: NavToggle,
};

export const Closed = {};

export const Open = {
  parameters: { overlayOpen: true },
};
