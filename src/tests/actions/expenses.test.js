import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("Should set up remove expense", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("Shoud set up edit expense", () => {
  const action = editExpense("12345a", { note: "new note value" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "12345a",
    updates: { note: "new note value" },
  });
});

test("Should set up Add Expense", () => {
  const action = addExpense({
    description: "clunge",
    note: "Only this once",
    amount: 100000,
    createdAt: 4500,
  });
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "clunge",
      note: "Only this once",
      amount: 100000,
      createdAt: 4500,
    },
  });
});

test("Should set up Add Expense with defaults", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
    },
  });
});
