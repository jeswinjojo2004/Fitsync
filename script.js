// Login validation
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "trainer" && password === "1234") {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid login credentials");
  }
}

// Load client details dynamically
function loadClient(name, goal) {
  localStorage.setItem("clientName", name);
  localStorage.setItem("clientGoal", goal);
  window.location.href = "client.html";
}

// Show client data on client page
function showClient() {
  const name = localStorage.getItem("clientName");
  const goal = localStorage.getItem("clientGoal");

  document.getElementById("cname").innerText = name;
  document.getElementById("cgoal").innerText = goal;
}

// Mark workout completed
function completeWorkout(day) {
  alert(day + " workout marked as completed!");
}