"use client";
import { useSelector, useDispatch } from "@/redux/store";
import { removeUser } from "@/redux/features/users/userSlice";
import { Button } from "../ui/button";
function UserList() {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  return (
    <div className="w-60 rounded-lg ">
      <ul className="w-full flex flex-col items-start gap-2 p-2 rounded-lg">
        {users.map((user) => {
          return (
            <li
              key={user.id}
              className="text-black flex justify-between  p-2  text-2xl font-medium"
            >
              <p>{user.name}</p>
              <Button
                onClick={() => dispatch(removeUser(user.id))}
                variant={"destructive"}
              >
                Remove
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default UserList;
