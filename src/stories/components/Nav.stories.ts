import Nav from '@/components/Nav.astro';

export default {
  title: 'Components/Nav',
  component: Nav,
};

export const Closed = {};

export const Open = {
  parameters: { overlayOpen: true },
};
