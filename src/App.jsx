import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Users from "./components/users/Users";
import NewExpense from "./components/new-expense/NewExpense";
import Expenses from "./components/expenses/Expenses";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [showUsers, setShowUsers] = useState(false);

  const addNewExpenseHandler = (newExpense = {}) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, newExpense];
    });

    localStorage.setItem("EXPENSES", JSON.stringify([...expenses, newExpense]));
  };

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("EXPENSES")) || [];
    setExpenses(savedExpenses.map((e) => ({ ...e, date: new Date(e.date) })));
  }, []);

  const deleteExpenseByIdHandler = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );

    localStorage.setItem(
      "EXPENSES",
      JSON.stringify(expenses.filter((expense) => expense.id !== id))
    );
  };

  const handleSuccessfulLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleShowUsers = () => {
    setShowUsers(true);
  };

  const handleLogout = () => {
    setShowUsers(false);
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <>
      <Header onShowUsers={handleShowUsers} onLogout={handleLogout} />
      {isLoggedIn ? (
        <>
          <NewExpense onAddNewExpense={addNewExpenseHandler} />
          <Expenses
            expenses={expenses}
            onDeleteExpense={deleteExpenseByIdHandler}
          />
        </>
      ) : (
        <Login onSuccessfulLogin={handleSuccessfulLogin} />
      )}
      {showUsers && <Users />}
    </>
  );
}

export default App;
