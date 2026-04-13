function addExpense() {
  const name = document.getElementById("expenseName").value;
  const amount = document.getElementById("expenseAmount").value;

  if (name === "" || amount === "") {
    alert("Please enter all fields");
    return;
  }

  const li = document.createElement("li");
  li.textContent = name + " - ₹" + amount;

  document.getElementById("expenseList").appendChild(li);

  // clear inputs
  document.getElementById("expenseName").value = "";
  document.getElementById("expenseAmount").value = "";
}
