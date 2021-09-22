import React from "react";
import PropTypes from "prop-types";

const LineChart = ({
  data,
  height,
  width,
  horizontalGuides,
  verticalGuides,
  color,
}) => {
  //   const height = 500;
  //   const width = 1000;
  const matrix = `matrix(1 0 0 -1 0 ${height})`;
  const padding = 80;
  const chartWidth = width - 2 * padding;
  const chartHeight = height - 2 * padding;

  const minX = Math.min(...data.map((p) => p.x));
  const maxX = Math.max(...data.map((p) => p.x));
  const minY = Math.min(...data.map((p) => p.y));
  const maxY = Math.max(...data.map((p) => p.y));
  const points = data.map((point) => {
    const xNormalized =
      (point.x - minX) * (chartWidth / (maxX - minX)) + padding;
    const yNormalized =
      (point.y - minY) * (chartHeight / (maxY - minY)) + padding;
    return `${xNormalized.toString()},${yNormalized.toString()}`;
  });
  const XAxis = () => {
    return (
      <polyline
        fill="none"
        stroke="#ccc"
        strokeWidth="0.5"
        points={`${padding},${height - padding},${width - padding},${
          height - padding
        }`}
      />
    );
  };
  const YAxis = () => {
    return (
      <polyline
        fill="none"
        stroke="#ccc"
        strokeWidth="0.5"
        points={`${padding},${padding},${padding},${height - padding}`}
      />
    );
  };
  const HorizontalGuides = () => {
    return new Array(10).fill(null).map((x, index) => {
      const r = (index + 1) / horizontalGuides;
      const y = chartHeight - chartHeight * r + padding;
      const delta = (maxY - minY) / horizontalGuides;
      return (
        <React.Fragment key={index}>
          {" "}
          <polyline
            fill="none"
            stroke="#ccc"
            strokeWidth="0.5"
            points={`${padding},${y},${width - padding},${y}`}
          />
          <text x={padding - 40} y={y}>
            {parseFloat(minY + delta * (index + 1)).toFixed(2)}
          </text>
        </React.Fragment>
      );
    });
  };
  const VerticalGuides = () => {
    return new Array(10).fill(null).map((_, index) => {
      const r = (index + 1) / verticalGuides;
      const x = padding + r * (width - 2 * padding);
      const delta = (maxX - minX) / verticalGuides;

      return (
        <React.Fragment key={index}>
          {" "}
          <polyline
            fill="none"
            stroke="#ccc"
            strokeWidth="0.5"
            points={`${x},${padding},${x},${height - padding}`}
          />
          <text x={x - 20} y={padding + chartHeight + 20}>
            {parseFloat(minX + delta * (index + 1)).toFixed(2)}
          </text>
        </React.Fragment>
      );
    });
  };
  return (
    <>
      <svg height={height} width={width}>
        <title>Line Chart</title>
        <XAxis />
        <YAxis />
        <HorizontalGuides />
        <VerticalGuides />
        <polyline
          transform={matrix}
          points={points.join(",")}
          style={{ fill: "none", stroke: color, strokeWidth: 3 }}
        />
        Sorry, your browser does not support inline SVG.
      </svg>
    </>
  );
};

LineChart.defaultProps = {
  height: 500,
  width: 1000,
  horizontalGuides: 10,
  verticalGuides: 10,
  color: "black",
};

LineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    })
  ).isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  horizontalGuides: PropTypes.number,
  verticalGuides: PropTypes.number,
  color: PropTypes.string,
};

export default LineChart;
