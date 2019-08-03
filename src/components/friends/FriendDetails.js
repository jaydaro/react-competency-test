import React, { useState, useEffect } from "react";
import { FRIENDS_BASE_URL } from "../../common/apiConstants";
import { makeGetRequest } from "../../common/apiHelpers";
import Spinner from "../../common/Spinner";
import { ProfileImage, ProfileTitle, ProfileDetails, Bio } from "./Styles";

export const FriendDetails = ({ friendId }) => {
  const [detail, setDetail] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    async function fetchList() {
      const result = await makeGetRequest(
        FRIENDS_BASE_URL +
          "/id" /* Hard coding id here since individual ids are not working - friendId */
      );
      setDetail(result);
      setLoaded(true);
    }
    fetchList();
  }, [friendId]);
  return (
    <>
      <div>
        <a href="/home">Home</a>
      </div>
      {!loaded && (
        <div>
          <Spinner />
        </div>
      )}
      <div>
        {loaded && (
          <>
            <h3>Profile</h3>
            {/* <Profile> */}
            <ProfileImage src={detail.img} alt={detail.first_name} />
            <ProfileTitle>
              {detail.first_name} {detail.last_name}
            </ProfileTitle>
            <ProfileDetails>
              {detail.phone}
              <br />
              {detail.address_1}
              <br />
              {detail.city}
              <br />
              {detail.state} {detail.zipcode}
            </ProfileDetails>
            {/* </Profile> */}
            <Bio>{detail.bio}</Bio>
            <div>
              <font face="verdana" color="green">
                {detail.available ? "Available" : "Busy"}
              </font>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default FriendDetails;
