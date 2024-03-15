// Add your code here
// Add user info
function submitData(name, email) {
  const formData = {
    name: `${name}`,
    email: `${email}`,
  };

  const objectConfiguration = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  return fetch("http://localhost:3000/users", objectConfiguration)
    .then((response) => response.json())
    .then((user) => {
      const id = document.createElement("p");
      id.textContent = user.id;
      document.body.append(id);
    })
    .catch((error) => {
      const errorMessage = document.createElement("p");
      errorMessage.textContent = error.message;
      document.body.append(errorMessage);
    });
}
