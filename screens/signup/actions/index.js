import ADD_USER from "./types";
const addUser = (user) => {
  return {
    payload: user,
    type: "ADD_USER",
  };
};
export default addUser;
