import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import useSessionStorageState from "./useSessionStorageState";

test("Persists on component unmounts and rerenders", () => {
  const Comp = () => {
    const [value, setValue] = useSessionStorageState("value", 0);
    return (
      <div>
        <div>{value}</div>
        <button onClick={() => setValue(value + 1)}>Add value</button>
      </div>
    );
  };
  const { getByText, rerender, unmount } = render(<Comp />);
  expect(getByText(/0/i)).toBeInTheDocument();
  fireEvent.click(getByText(/add value/i));
  expect(getByText(/1/i)).toBeInTheDocument();

  unmount();
  rerender(<Comp />);
  expect(getByText(/1/i)).toBeInTheDocument();
});
