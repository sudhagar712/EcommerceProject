
import bcrypt from "bcrypt"



const users = [
  {
    name: "Admin user",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },

  {
    name: "sudhagar",
    email: "sudhagarmsr@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },

  {
    name: "jasmine",
    email: "jasmine@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];


export default users