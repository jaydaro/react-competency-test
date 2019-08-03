import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ListFriends from "../friends/ListFriends";
import FriendDetails from "../friends/FriendDetails";

export const Main = () => {
  const FriendWithId = ({ match }) => {
    return <FriendDetails friendId={match.params.friendId} />;
  };
  return (
    <>
      <Switch>
        <Route exact path="/home" component={ListFriends} />
        <Route path="/:friendId" component={FriendWithId} />
        <Redirect to="/home" />
      </Switch>
    </>
  );
};
export default Main;
