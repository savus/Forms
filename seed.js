import { v1 } from "uuid";
import { writeFileSync } from "fs";

const justin = {
  id: v1(),
  username: "justin",
  password: "password",
  city: "Hobbiton",
  email: "justin.fuzzygreenstuff@gmail.com",
  phoneNumber: "111-111-1111",
  isAdmin: false,
};

const max = {
  id: v1(),
  username: "max",
  password: "password",
  city: "Hobbiton",
  email: "justin.fuzzygreenstuff@gmail.com",
  phoneNumber: "111-111-1111",
  isAdmin: false,
};

const james = {
  id: v1(),
  username: "james",
  password: "password",
  city: "Minas Tirith",
  email: "james.fuzzygreenstuff@gmail.com",
  phoneNumber: "222-222-2222",
  isAdmin: true,
};

const sam = {
  id: v1(),
  username: "sam",
  password: "password",
  city: "Hobbiton",
  email: "justin.fuzzygreenstuff@gmail.com",
  phoneNumber: "111-111-1111",
  isAdmin: false,
};

const braxton = {
  id: v1(),
  username: "braxton",
  password: "password",
  city: "Hobbiton",
  email: "justin.fuzzygreenstuff@gmail.com",
  phoneNumber: "111-111-1111",
  isAdmin: false,
};

const mike = {
  id: v1(),
  username: "mike",
  password: "password",
  city: "Hobbiton",
  email: "justin.fuzzygreenstuff@gmail.com",
  phoneNumber: "111-111-1111",
  isAdmin: false,
};

const jason = {
  id: v1(),
  username: "jason",
  password: "password",
  city: "Hobbiton",
  email: "justin.fuzzygreenstuff@gmail.com",
  phoneNumber: "111-111-1111",
  isAdmin: false,
};

const sara = {
  id: v1(),
  username: "sara",
  password: "password",
  city: "Hobbiton",
  email: "justin.fuzzygreenstuff@gmail.com",
  phoneNumber: "111-111-1111",
  isAdmin: false,
};

const jennifer = {
  id: v1(),
  username: "jenn",
  password: "password",
  city: "Hobbiton",
  email: "justin.fuzzygreenstuff@gmail.com",
  phoneNumber: "111-111-1111",
  isAdmin: false,
};

const dbObject = {
  users: [justin, max, james, sam, braxton, mike, sara, jason, jennifer],
};

writeFileSync("./db.json", JSON.stringify(dbObject));
