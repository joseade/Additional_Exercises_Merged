import LineChart from "./LineChart";
import { ChartThree } from "./LineChart.stories";
import { render, screen } from "@testing-library/react";

test("should render", () => {
  render(
    <LineChart
      color="blue"
      data={[
        { x: 3, y: 6 },
        { x: 1, y: 9 },
      ]}
    />
  );
  const chart = screen.getByTitle("Line Chart");
  expect(chart).toBeInTheDocument();
  expect(LineChart.defaultProps.height).toBe(500);
  expect(LineChart.defaultProps.width).toBe(1000);
  expect(LineChart.defaultProps.color).toBe("black");
});

test("Third Story", () => {
  render(<ChartThree {...ChartThree.args} />);
  const chart = screen.getByTitle("Line Chart");
  expect(chart).toBeInTheDocument();
  expect(ChartThree.args.data.length).toBe(315);
  expect(ChartThree.args.height).toBe(500);
  expect(ChartThree.args.width).toBe(1000);
  expect(ChartThree.args.color).toBe("green");
});
