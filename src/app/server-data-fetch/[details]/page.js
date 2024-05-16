import React from "react";

const fetchUserDetails = async (id) => {
  try {
    const response = await fetch(`https://dummyjson.com/users/${id}`);
    const result = await response.json();
    return result;
  } catch (e) {
    throw new Error(e);
  }
};

const Userdetails = async ({ params }) => {
  const Userdetails = await fetchUserDetails(params.details);
  return (
    <div>
      <h1 className="text-xl font-semibold text-center mb-5 py-2">
        This is user number {params.details} details
      </h1>
      <div className="border-2 border-gray-500 p-5">
        <p className="mb-2 font-semibold">
          {Userdetails.firstName} {Userdetails.lastName}
        </p>
        <p className="mb-2 font-semibold">{Userdetails.age}</p>
        <p className="mb-2 font-semibold">{Userdetails.email}</p>
        <p className="mb-2 font-semibold">{Userdetails.phone}</p>
        <p className="mb-2 font-semibold">{Userdetails.birthDate}</p>
      </div>
    </div>
  );
};

export default Userdetails;
