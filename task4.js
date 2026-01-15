// Task 4: delUser(number)

import { getServerURL } from "./task1.js";

async function delUser(id) {
    await fetch (`${getServerURL()}/users/${id}`, {
        method: "DELETE"
    });

    console.log(`Usuario con id ${id} eliminado`);
}

export { delUser };