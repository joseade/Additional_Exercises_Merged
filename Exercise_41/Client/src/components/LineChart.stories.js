import LineChart from "./LineChart";

export default {
  title: "Components/LineChart",
  component: LineChart,
};

const Template = (args) => <LineChart {...args} />;

const values = [];
for (let t = 0; t < 100; t++) {
  values.push({
    x: t,
    y: 50 - t,
  });
}
export const ChartOne = Template.bind({});
ChartOne.args = {
  data: values,
  height: 500,
  width: 1000,
  horizontalGuides: 5,
  verticalGuides: 3,
  color: "blue",
};

const valuesTwo = [];
for (let t = 0; t < Math.PI; t += 0.01) {
  valuesTwo.push({
    x: t,
    y: Math.sin(10 * t),
  });
}
export const ChartTwo = Template.bind({});
ChartTwo.args = {
  data: valuesTwo,
  height: 500,
  width: 1000,
  horizontalGuides: 7,
  verticalGuides: 7,
  color: "black",
};

const valuesThree = [];
for (let t = 0; t < Math.PI; t += 0.01) {
  valuesThree.push({
    x: t,
    y: Math.sign(Math.cos(10 * t)),
  });
}
export const ChartThree = Template.bind({});
ChartThree.args = {
  data: valuesThree,
  height: 500,
  width: 1000,
  horizontalGuides: 5,
  verticalGuides: 10,
  color: "green",
};
