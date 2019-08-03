import React, { useState, useEffect } from "react";
import axios from "axios";

export const FriendDetails = ({ friendId }) => {
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    async function fetchList() {
      const result = await axios.get(
        "http://private-5bdb3-friendmock.apiary-mock.com/friends/id"
      );
      setDetail(result.data);
    }
    fetchList();
  }, [friendId]);
  return (
    <div>
      {detail.id}
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
        {detail.photos.map(photo => (
          <img src={photo} alt="Image_Not_Found" />
        ))}
      </div>
      <div>
        {detail.statuses.map(status => (
          <div>{status}</div>
        ))}
      </div>
    </div>
  );
};
export default FriendDetails;