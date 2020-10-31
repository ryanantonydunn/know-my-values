import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/svelte";

import SelectValues from "../screens/SelectValues.svelte";

const MIN_ITEMS = 4;
const MAX_ITEMS = 12;

const values = Array.from({ length: 15 }, (_, i) => `t${i}`);

test("items in list are selectable", async () => {
  const setPage = jest.fn();
  const { getByText, getByTestId } = render(SelectValues, {
    values,
    setPage,
  });

  // first item exists
  expect(getByText(values[0])).toBeInTheDocument();

  // get proceed button
  const proceed = getByTestId("proceed");
  expect(proceed).toBeDisabled();

  // select enough items
  for (let i = 0; i < MIN_ITEMS; i++) {
    await fireEvent.click(getByTestId(values[i]));
  }
  expect(proceed).toBeEnabled();
  await fireEvent.click(proceed);
  expect(setPage.mock.calls.length).toBe(1);
  expect(setPage.mock.calls[0][1]).toEqual(values.slice(0, MIN_ITEMS));

  // select too many items
  for (let i = MIN_ITEMS; i <= MAX_ITEMS; i++) {
    await fireEvent.click(getByTestId(values[i]));
  }
  expect(proceed).toBeDisabled();

  // unselect an item
  await fireEvent.click(getByTestId(values[0]));
  expect(proceed).toBeEnabled();
  await fireEvent.click(proceed);
  expect(setPage.mock.calls.length).toBe(2);
  expect(setPage.mock.calls[1][1]).toEqual(values.slice(1, MAX_ITEMS + 1));
});
