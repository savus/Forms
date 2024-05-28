import { TUser } from "./types";

const BASE_URL = "http://localhost:3000";
const usersEndpoint = "users";

const getAllUsers = (): Promise<TUser[]> =>
  fetch(`${BASE_URL}/${usersEndpoint}`).then((response) => {
    if (!response.ok) {
      throw new Error(`Could not fetch ${usersEndpoint} data`);
    }
    return response.json();
  });

const registerNewUser = (body: Omit<TUser, "id">): Promise<TUser[]> =>
  fetch(`${BASE_URL}/${usersEndpoint}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Could not post new user");
    }
    return response.json();
  });

const removeUser = (id: number): Promise<TUser[]> =>
  fetch(`${BASE_URL}/${usersEndpoint}/${id}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`Could not delete user ${id}`);
    }
    return response.json();
  });

const patchUserAdminRole = (body: Partial<TUser>): Promise<TUser[]> =>
  fetch(`${BASE_URL}/${usersEndpoint}/${body.id}`, {
    method: "PATCH",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`Could not patch user ${body.id}`);
    }
    return response.json();
  });

export const Requests = {
  getAllUsers,
  registerNewUser,
  patchUserAdminRole,
  removeUser,
};
