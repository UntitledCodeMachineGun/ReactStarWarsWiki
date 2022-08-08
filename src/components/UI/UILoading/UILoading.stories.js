import UILoading from "./UILoading";

export default {
  title: 'Ui-Kit/UI-Loading',
  component: UILoading
}

const Template = ( args ) => <UILoading { ...args } />

const props = {
  theme: 'black',
  isShadow: false,
  classes: ''
}

export const White = Template.bind({});
export const Black = Template.bind({});
export const Blue = Template.bind({});

White.args = {
  ...props,
  theme: 'white',
}

Black.args = {
  ...props,
  theme: 'black',
}

Blue.args = {
  ...props,
  theme: 'blue',
}