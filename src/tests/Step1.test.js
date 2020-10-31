import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/svelte";

import Step1 from "../screens/Step1.svelte";

const MIN_ITEMS = 4;
const MAX_ITEMS = 12;

const defaultValues = Array.from({ length: 15 }, (_, i) => `t${i}`);

test("items in list are selectable", async () => {
  const next = jest.fn();
  const { getByText, getByTestId } = render(Step1, { defaultValues, next });

  // first item exists
  expect(getByText(defaultValues[0])).toBeInTheDocument();

  // get proceed button
  const proceed = getByTestId("proceed");
  expect(proceed).toBeDisabled();

  // select enough items
  for (let i = 0; i < MIN_ITEMS; i++) {
    await fireEvent.click(getByTestId(defaultValues[i]));
  }
  expect(proceed).toBeEnabled();
  await fireEvent.click(proceed);
  expect(next.mock.calls.length).toBe(1);
  expect(next.mock.calls[0][0]).toEqual(defaultValues.slice(0, MIN_ITEMS));

  // select too many items
  for (let i = MIN_ITEMS; i <= MAX_ITEMS; i++) {
    await fireEvent.click(getByTestId(defaultValues[i]));
  }
  expect(proceed).toBeDisabled();

  // unselect an item
  await fireEvent.click(getByTestId(defaultValues[0]));
  expect(proceed).toBeEnabled();
  await fireEvent.click(proceed);
  expect(next.mock.calls.length).toBe(2);
  expect(next.mock.calls[1][0]).toEqual(defaultValues.slice(1, MAX_ITEMS + 1));
});
