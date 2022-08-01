import UIButton from "./UIButton";

export default {
  title: 'Ui-Kit/Ui-Button',
  component: UIButton
}

const Template = ( args ) => <UIButton { ...args } />

const props = {
  text: 'Jaba',
  onClick: () => console.log('Jaba'),
  disabled:'false',
  theme: 'dark',
  classes: ''
}

export const Light = Template.bind({});
export const Dark = Template.bind({});
export const Disabled = Template.bind({});

Light.args = {
  ...props,
  theme: 'light',
}

Dark.args = {
  ...props,
  theme: 'dark',
}

Disabled.args = {
  ...props,
  disabled: 'true'
}