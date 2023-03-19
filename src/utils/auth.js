const BASE_URL = "https://register.nomoreparties.co";

function checkResponse(res) {
  if (res.ok) {
      return response.json();
  }
  return Promise.reject(
      `something goes wrong: ${res.status} ${res.statusText}`
  );
}

export async function register(email, password) {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      email: email,
    }),
  });
  return checkResponse(res);
}

export async function logIn(email, password) {
  const res = await fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      password: password,
      email: email,
    }),
  });
  return checkResponse(res);
}
