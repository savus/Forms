import { TUser } from "./types";

const BASE_URL = "http://localhost:3000";
const users = "users";

const getAllUsers = (): Promise<TUser[]> =>
  fetch(`${BASE_URL}/${users}`).then((response) => {
    if (!response.ok) {
      throw new Error(`Could not fetch data from ${users}`);
    }
    return response.json();
  });

export const Requests = {
  getAllUsers,
};
