let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function renderExpenses() {
  const list = document.getElementById("expenseList");
  const totalEl = document.getElementById("totalAmount");

  list.innerHTML = "";
  let total = 0;

  expenses.forEach((exp, index) => {
    const li = document.createElement("li");
    li.textContent = exp.name + " - ₹" + exp.amount;

    list.appendChild(li);
    total += Number(exp.amount);
  });

  totalEl.textContent = total;
}

function addExpense() {
  const name = document.getElementById("expenseName").value;
  const amount = document.getElementById("expenseAmount").value;

  if (name === "" || amount === "") {
    alert("Please enter all fields");
    return;
  }

  expenses.push({ name, amount });

  localStorage.setItem("expenses", JSON.stringify(expenses));

  renderExpenses();

  document.getElementById("expenseName").value = "";
  document.getElementById("expenseAmount").value = "";
}

// load on start
renderExpenses();
