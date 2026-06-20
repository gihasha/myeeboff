async function signup() {

  const res = await fetch(
    "/api/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    }
  );

  const data = await res.json();

  console.log(data);

  if (!res.ok) {
    alert(data.error || "Signup Failed");
    return;
  }

  alert("Signup Success");

  window.location.href = "/login";
}
