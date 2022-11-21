// Button.stories.ts
import { Meta,Story } from "@storybook/angular/types-6-0";
import { ButtonComponent } from './button.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Componentes/Button',
  component: ButtonComponent,
  argTypes: {
    text: {control:'text'},
    bg_color:{ control: { type: 'color'}},
  },
} as Meta;

const Template : Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props:args
});

export const Primary = Template.bind({});
Primary.args = {
  text:'Button',
  bg_color:'#708A39',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text:'Button',
  bg_color: '#696eb7',
};
