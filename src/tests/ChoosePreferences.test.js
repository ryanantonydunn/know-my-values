import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/svelte";

import ChoosePreferences from "../screens/ChoosePreferences.svelte";

const originalOrder = ["v1", "v2", "v3", "v4"];
const desiredOrder = ["v3", "v4", "v2", "v1"];
const findIndexInDesiredOrder = (node) =>
  desiredOrder.findIndex((str) => node.innerHTML.indexOf(str) !== -1);

describe("Choose preferences screen", () => {
  test("Chosen values can be sorted", async () => {
    const setPage = jest.fn();
    const { getByTestId } = render(ChoosePreferences, {
      values: originalOrder,
      setPage,
    });

    // choose preferences based on desired order
    let i = 0;
    while (setPage.mock.calls.length === 0 && i < 14) {
      // get index of each choice
      const choice1 = getByTestId("choice1");
      const choice2 = getByTestId("choice2");
      const i1 = findIndexInDesiredOrder(choice1);
      const i2 = findIndexInDesiredOrder(choice2);

      // press the preferred button
      const choice = i1 < i2 ? choice1 : choice2;
      await fireEvent.click(choice);
      i++;
    }

    // check that the step was completed accurately
    expect(setPage.mock.calls.length).toBe(1);
    expect(setPage.mock.calls[0][1]).toEqual(desiredOrder);
  });
});
