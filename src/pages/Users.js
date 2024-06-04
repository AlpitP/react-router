import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const Users = () => {
  const location = useLocation();
  console.log(location);
  const [data, setData] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users${location.search}`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [location]);
  if (error) return <h1 style={{ textAlign: "center" }}>{error}</h1>;
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Users</h1>
      <h1 style={{ textAlign: "center" }}>{location.state}</h1>
      <ol style={{ display: "flex", flexWrap: "wrap", marginInline: 120 }}>
        {data ? (
          data.map((user) => {
            return (
              <li
                style={{
                  border: "1px solid black",
                  margin: "10px 25px",
                  padding: 10,
                  width: 300,
                }}
                key={user.id}
              >
                <p>Name : {user.name}</p>
                <p>Email : {user.email}</p>
                <Link to={`/users/${user.id}`}>View User Detail</Link>
              </li>
            );
          })
        ) : (
          <h1 style={{ textAlign: "center", width: "100%" }}>Loading...</h1>
        )}
      </ol>
    </>
  );
};
