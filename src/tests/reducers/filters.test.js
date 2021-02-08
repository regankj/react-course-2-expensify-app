import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("Should sort by date", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount",
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("Should set text filter", () => {
  const action = { type: "TEXT_FILTER", text: "yes" };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe("yes");
});

test("Should set start date", () => {
  const action = { type: "SET_START_DATE", date: 1000 };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(1000);
});

test("Should set end date", () => {
  const action = { type: "SET_END_DATE", date: 1000 };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(1000);
});
