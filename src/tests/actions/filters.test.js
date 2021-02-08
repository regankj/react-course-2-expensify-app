import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "../../actions/filters";

test("Should set up setTextFilter", () => {
  const action = setTextFilter("YES");
  expect(action).toEqual({
    type: "TEXT_FILTER",
    text: "YES",
  });
});

test("Should set up setTextFilter with defaults", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "TEXT_FILTER",
    text: "",
  });
});

test("should set up sort by amount", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});

test("should set up sort by date", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE",
  });
});

test("should set up set end date", () => {
  const action = setEndDate();
  expect(action).toEqual({
    type: "SET_END_DATE",
  });
});

test("should set up set start date", () => {
  const action = setStartDate();
  expect(action).toEqual({
    type: "SET_START_DATE",
  });
});
