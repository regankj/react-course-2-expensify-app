import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpense,
  startEditExpense,
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";

const uid = "testuid";
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database
    .ref(`users/${uid}/expenses`)
    .set(expensesData)
    .then(() => done());
});

test("Should set up remove expense", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should remove expense from firebase", (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[2].id;
  store
    .dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "REMOVE_EXPENSE",
        id,
      });
      return database.ref(`users/${uid}/expenses/${id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
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

test("should edit expenses from firebase", (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[0].id;
  const updates = { note: "this is my note" };
  store
    .dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "EDIT_EXPENSE",
        id,
        updates,
      });
      return database.ref(`users/${uid}/expenses/${id}`).once("value");
    })
    .then((snapshot) => {
      expect(snapshot.val().note).toBe("this is my note");
      done();
    });
});

test("Should set up Add Expense", () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2],
  });
});

// test("Should add expense to database and store", (done) => {
//   const store = createMockStore({});
//   const expenseData = {
//     description: "mouse",
//     amount: 3000,
//     note: "This one is better",
//     createdAt: 2355435,
//   };
//   store.dispatch(startAddExpense(expenseData)).then(() => {
//     const actions = store.getActions();
//     expect(actions[0]).toEqual({
//       type: "ADD_EXPENSE",
//       expense: {
//         id: expect.any(String),
//         ...expenseData,
//       },
//     });
//     database
//       .ref(`expenses/${actions[0].expenses.id}`)
//       .once("value")
//       .then((snapshot) => {
//         expect(snapshot).val().toEqual(expenseData);
//         done();
//       });
//   });
// });

// test("Should add expense with defaults to database and store", (done) => {
//   const store = createMockStore({});
//   const expenseData = {
//     description: "",
//     amount: 0,
//     note: "",
//     createdAt: 0,
//   };
//   store.dispatch(startAddExpense()).then(() => {
//     const actions = store.getActions();
//     expect(actions[0]).toEqual({
//       type: "ADD_EXPENSE",
//       expense: {
//         id: expect.any(String),
//         ...expenseData,
//       },
//     });
//     database
//       .ref(`expenses/${actions[0].expenses.id}`)
//       .once("value")
//       .then((snapshot) => {
//         expect(snapshot).val().toEqual(expenseData);
//         done();
//       });
//   });
// });

// test("Should set up Add Expense with defaults", () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: "ADD_EXPENSE",
//     expense: {
//       id: expect.any(String),
//       description: "",
//       note: "",
//       amount: 0,
//       createdAt: 0,
//     },
//   });
// });

test("should set up set expense with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses,
  });
});

test("should fetch expenses from firebase", (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_EXPENSES",
      expenses,
    });
    done();
  });
});
