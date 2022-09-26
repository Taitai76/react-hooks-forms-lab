import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ItemForm from "../components/ItemForm";
import App from "../components/App";

test("calls the onItemFormSubmit callback prop when the form is submitted", () => {
  const onItemFormSubmit = jest.fn();
  render(<ItemForm onItemFormSubmit={onItemFormSubmit} />);

  fireEvent.change(screen.queryByLabelText(/Name/), {
    target: { value: "Ice Cream" },
  });

  fireEvent.change(screen.queryByLabelText(/Category/), {
    target: { value: "Dessert" },
  });

  fireEvent.submit(screen.queryByText(/Add to List/));

  expect(onItemFormSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      {"_reactName": "onSubmit", "_targetInst": null, "bubbles": true, "cancelable": true, "currentTarget": null, "defaultPrevented": false, "eventPhase": 3, "isDefaultPrevented": [Function functionThatReturnsFalse], "isPropagationStopped": [Function functionThatReturnsFalse], "isTrusted": false, "nativeEvent": {"isTrusted": false}, "target": <button type="submit">Add to List</button>, "timeStamp": 1664167330928, "type": "submit"}
    })
  );
});

test("adds a new item to the list when the form is submitted", () => {
  render(<App />);

  const dessertCount = screen.queryAllByText(/Dessert/).length;

  fireEvent.change(screen.queryByLabelText(/Name/), {
    target: { value: "Ice Cream" },
  });

  fireEvent.change(screen.queryByLabelText(/Category/), {
    target: { value: "Dessert" },
  });

  fireEvent.submit(screen.queryByText(/Add to List/));

  expect(screen.queryByText(/Ice Cream/)).toBeInTheDocument();

  expect(screen.queryAllByText(/Dessert/).length).toBe(dessertCount + 1);
});
