export const getFriends = fetch('http://private-5bdb3-friendmock.apiary-mock.com/friends')
.then(response => {
    return response.json();
  })
 .then(json =>  {
    const jsonPayload = JSON.stringify(json);
    console.log('hello from getFriends', jsonPayload);
    return jsonPayload;
  });