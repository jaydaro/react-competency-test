import React, { useState, useEffect } from "react";
import axios from "axios";
import { FRIENDS_BASE_URL } from "../../common/apiConstants";

export const FriendDetails = ({ friendId }) => {
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    async function fetchList() {
      const result = await axios.get(
        FRIENDS_BASE_URL +
          "/id" /* Hard coding id here since individual ids are not working - friendId */
      );
      setDetail(result.data);
    }
    fetchList();
  }, [friendId]);
  return (
    <div>
      <img src={detail.img} alt={detail.first_name} />
      <div>
        {detail.first_name} {detail.last_name}
      </div>
      <div>{detail.phone}</div>
      <div>{detail.address_1}</div>
      <div>{detail.city}</div>
      <div>{detail.state}</div>
      <div>{detail.zipcode}</div>
      <div>{detail.bio}</div>
      <div>
        {/* {detail.photos.array.forEach(photo => {
          <img src={photo} alt="" />;
        })} */}
        {/* { detail.photos.forEach((photo)=>
          (<img src={photo} alt="" />)
        ) } */}
      </div>
      {/* <div>
        {detail.statuses.map(status => (
          <div>{status}</div>
        ))}
      </div> */}
    </div>
  );
};
export default FriendDetails;
