import { ComponentStory, ComponentMeta } from "@storybook/react";

import Gallery from "./Gallery";

export default {
  title: "Example/Gallery",
  component: Gallery,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Gallery>;

const Template: ComponentStory<typeof Gallery> = (args) => (
  <Gallery {...args} />
);
const images = [
  {
    src: "https://picsum.photos/id/0/5616/3744",
    width: 5616,
    height: 3744,
  },
  {
    src: "https://picsum.photos/id/1/5616/3744",
    width: 5616,
    height: 3744,
  },
  {
    src: "https://picsum.photos/id/10/2500/1667",
    width: 2500,
    height: 1667,
  },
  {
    src: "https://picsum.photos/id/100/2500/1656",
    width: 2500,
    height: 1656,
  },
  {
    src: "https://picsum.photos/id/1000/5626/3635",
    width: 5626,
    height: 3635,
  },
  {
    src: "https://picsum.photos/id/1001/5616/3744",
    width: 5616,
    height: 3744,
  },
  {
    src: "https://picsum.photos/id/1002/4312/2868",
    width: 4312,
    height: 2868,
  },
  {
    src: "https://picsum.photos/id/1003/1181/1772",
    width: 1181,
    height: 1772,
  },
  {
    src: "https://picsum.photos/id/1004/5616/3744",
    width: 5616,
    height: 3744,
  },
  {
    src: "https://picsum.photos/id/1005/5760/3840",
    width: 5760,
    height: 3840,
  },
];
export const FirstGallery = Template.bind({});
FirstGallery.args = {
  data: images,
};

const secondImages = [
  {
    src: "https://picsum.photos/id/349/3264/2176",
    width: 3264,
    height: 2176,
  },
  {
    src: "https://picsum.photos/id/35/2758/3622",
    width: 2758,
    height: 3622,
  },
  {
    src: "https://picsum.photos/id/350/6016/4016",
    width: 6016,
    height: 4016,
  },
  {
    src: "https://picsum.photos/id/351/3994/2443",
    width: 3994,
    height: 2443,
  },
  {
    src: "https://picsum.photos/id/352/3264/2176",
    width: 3264,
    height: 2176,
  },
  {
    src: "https://picsum.photos/id/353/6016/3376",
    width: 6016,
    height: 3376,
  },
  {
    src: "https://picsum.photos/id/354/3800/2850",
    width: 3800,
    height: 2850,
  },
  {
    src: "https://picsum.photos/id/355/5340/3588",
    width: 5340,
    height: 3588,
  },
  {
    src: "https://picsum.photos/id/356/3264/2448",
    width: 3264,
    height: 2448,
  },
  {
    src: "https://picsum.photos/id/357/3888/2592",
    width: 3888,
    height: 2592,
  },
];

export const SecondGallery = Template.bind({});
SecondGallery.args = {
  data: secondImages,
};
