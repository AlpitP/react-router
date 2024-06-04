import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const UserInfo = () => {
  const { id } = useParams();
  const [error, setError] = useState();
  const [user, setUser] = useState();
  useEffect(() => {
    const userInfo = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (response.ok) {
          const userDetail = await response.json();
          setUser(userDetail);
        } else {
          setError("404.. Page not found.");
        }
      } catch (error) {
        setError(error.message);
      }
    };
    userInfo();
  }, [id]);
  if (error) return <h1 style={{ textAlign: "center" }}>{error}</h1>;
  return (
    <>
      <h1 style={{ textAlign: "center" }}>User Details</h1>
      {user ? (
        <div
          style={{
            border: "1px solid black",
            width: 380,
            marginInline: "35%",
            paddingLeft: 50,
          }}
        >
          <p>Name : {user.name}</p>
          <p>Email : {user.email}</p>
          <p>Phone : {user.phone}</p>
          <p>
            Address :
            {user.address.street +
              ", " +
              user.address.city +
              ", " +
              user.address.zipcode}
          </p>
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      )}
    </>
  );
};

export default UserInfo;
