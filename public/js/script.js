// Console output function
function logToConsole(data) {
  document.getElementById("consoleOutput").textContent =
    JSON.stringify(data, null, 2);
}

/* ---------------- CREATE USER ---------------- */
document.getElementById("createUserForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("uname").value;

  const res = await fetch("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ username })
  });

  const data = await res.json();
  logToConsole(data);
});

/* ---------------- ADD EXERCISE ---------------- */
document.getElementById("exerciseForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const userId = document.getElementById("uid").value;

  const formData = {
    description: document.getElementById("desc").value,
    duration: document.getElementById("dur").value,
    date: document.getElementById("date").value
  };

  const res = await fetch(`/api/users/${userId}/exercises`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData)
  });

  const data = await res.json();
  logToConsole(data);
});

/* ---------------- LIST USERS ---------------- */
document.getElementById("btnListUsers").addEventListener("click", async () => {
  const res = await fetch("/api/users");
  const data = await res.json();
  logToConsole(data);
});

/* ---------------- GET LOGS ---------------- */
document.getElementById("btnGetLogs").addEventListener("click", async () => {
  const id = document.getElementById("logUserId").value;
  const res = await fetch(`/api/users/${id}/logs`);
  const data = await res.json();
  logToConsole(data);
});
