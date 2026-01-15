// Task 3: addUser(first_name, last_name, email)

import { getServerURL } from "./task1.js";

async function addUser(firstName, lastName, email) {
    const response = await fetch(`${getServerURL()}/users`);
    const users = await response.json();

    const maxId = Math.max(...users.map(user => user.id));
    const newUser = {
        id: maxId + 1,
        first_name: firstName,
        last_name: lastName,
        email: email
    };

   await fetch(`${getServerURL()}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    });
    
    console.log("Usuario agregado: ", newUser);
}

export { addUser }; 