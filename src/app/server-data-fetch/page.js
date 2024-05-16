import Link from "next/link";
import React from "react";

const fetchListOfUsers = async () => {
  try {
    const apiResponse = await fetch("https://dummyjson.com/users");
    const result = await apiResponse.json();
    return result.users;
  } catch (error) {
    throw new Error(error);
  }
};

const Serverside = async () => {
  const listOfUsers = await fetchListOfUsers();
  console.log(listOfUsers);
  return (
    <div>
      <h1 className="mb-4">server side</h1>
      <ul>
        {listOfUsers && listOfUsers.length > 0
          ? listOfUsers.map((user, index) => {
              return (
                <li
                  className="mb-4 text-xl font-semibold cursor-pointer"
                  key={index}
                >
                  <Link href={`/server-data-fetch/${user.id}`}>
                    {user.firstName}
                  </Link>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default Serverside;
