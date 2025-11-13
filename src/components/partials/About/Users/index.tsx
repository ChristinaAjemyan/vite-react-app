import React, { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../../../store/hooks";
import {
  fetchUsers,
  selectStatus,
  selectUsers,
} from "../../../../store/slices/user.slice";

const UserList = () => {
  const userList = useAppSelector(selectUsers);
  const usersStatus = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    console.log(usersStatus, userList);
  }, [usersStatus, userList]);

  return (
    <div>
      <p style={{ textAlign: "right" }}>
        {userList.map((user) => (
          <li>{user.name}</li>
        ))}
      </p>
    </div>
  );
};

export default UserList;
