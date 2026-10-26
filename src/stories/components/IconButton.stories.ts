import IconButton from '@/components/IconButton.astro';

const icon = `
  <svg class="stroke-accent" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"
    fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 12h14"></path>
    <path d="M12 5v14"></path>
  </svg>
`;

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    position: { control: 'inline-radio', options: ['top', 'bottom'] },
  },
  args: {
    id: 'icon-button',
    ariaLabel: 'Add',
    slots: { default: icon },
  },
};

export const Top = {
  args: { position: 'top' },
};

export const Bottom = {
  args: { position: 'bottom' },
};
