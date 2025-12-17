import { users } from "./user";

export const stories = users.map((user) => {
  return {
    user: user.name,
    pic: user.pic,
  };
});
