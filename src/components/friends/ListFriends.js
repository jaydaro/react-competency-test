import React, { useState, useEffect } from "react";
import axios from "axios";

export const ListFriends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    async function fetchList() {
      const result = await axios.get(
        "http://private-5bdb3-friendmock.apiary-mock.com/friends"
      );
      setFriends(result.data);
    }
    fetchList();
  }, []);
  return (
    <div>
      {friends.map(friend => (
        <div key={friend.id}>
          <img src={friend.img} alt={friend.first_name} />
          <div>
            <a href={"/" + friend.id}>
              {" "}
              {friend.first_name} {friend.last_name}
            </a>
          </div>
          <div>{friend.status}</div>
          <div>{friend.available}</div>
        </div>
      ))}
    </div>
  );
};
export default ListFriends;
