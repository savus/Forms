import { TUser } from "./types";

const BASE_URL = "http://localhost:3000";
const usersEndpoint = "users";

const getAllUsers = (): Promise<TUser[]> =>
  fetch(`${BASE_URL}/${usersEndpoint}`).then((response) => {
    if (!response.ok) {
      throw new Error(`could not fetch ${usersEndpoint}`);
    }
    return response.json();
  });

const postNewUser = (body: Omit<TUser, "id">): Promise<TUser[]> =>
  fetch(`${BASE_URL}/${usersEndpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Could not post user");
    }
    return response.json();
  });

const removeUser = (id: number): Promise<TUser[]> =>
  fetch(`${BASE_URL}/${usersEndpoint}/${id}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`Could not remove user ${id}`);
    }
    return response.json();
  });

const patchUser = (body: Partial<TUser>): Promise<TUser[]> =>
  fetch(`${BASE_URL}/${usersEndpoint}/${body.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`Could not delete user ${body.id}`);
    }
    return response.json();
  });

export const Requests = {
  getAllUsers,
  postNewUser,
  removeUser,
  patchUser,
};
