import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = { type: "REMOVE_EXPENSE", id: expenses[1].id };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if no id", () => {
  const action = { type: "REMOVE_EXPENSE", id: -1 };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test("should add an expense", () => {
  const newExpense = {
    description: "rent",
    note: "",
    amount: 12,
    createdAt: 0,
  };
  const action = { type: "ADD_EXPENSE", expense: newExpense };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, newExpense]);
});

test("Should edit expense", () => {
  const updates = { description: "renting the gaff" };
  const action = { type: "EDIT_EXPENSE", id: expenses[0].id, updates: updates };
  const state = expensesReducer(expenses, action);
  expect(state[0].description).toBe(updates.description);
});

test("Should not edit expense if no expense found", () => {
  const updates = { amount: 120000 };
  const action = { type: "EDIT_EXPENSE", id: 0, updates };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
