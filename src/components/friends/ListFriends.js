import React, { useState, useEffect } from "react";
import { FRIENDS_BASE_URL } from "../../common/apiConstants";
import { makeGetRequest } from "../../common/apiHelpers";
import { Card, Title, SubTitle } from "./Styles";
import Spinner from "../../common/Spinner";

export const ListFriends = () => {
  const [friends, setFriends] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    async function fetchList() {
      const result = await makeGetRequest(FRIENDS_BASE_URL);
      setFriends(result);
      setLoaded(true);
    }
    fetchList();
  }, []);
  return (
    <>
      <h1>Friends</h1>
      {!loaded && (
        <div>
          <Spinner />
        </div>
      )}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {loaded &&
          friends.map(friend => (
            <Card key={friend.id}>
              <img src={friend.img} alt={friend.name} />
              <Title>
                <a href={"/" + friend.id}>
                  {" "}
                  {friend.first_name} {friend.last_name}{" "}
                </a>
              </Title>
              <SubTitle>{friend.status}</SubTitle>
              <div>
                {friend.available ? (
                  <font face="verdana" color="green">
                    Available
                  </font>
                ) : (
                  <font face="verdana" color="red">
                    Busy
                  </font>
                )}
              </div>
            </Card>
          ))}
      </div>
    </>
  );
};
export default ListFriends;
