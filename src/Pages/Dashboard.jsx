import React, { useContext } from "react";
import { AuthContext } from "../Context/Context";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const lastLogin = new Date(user.metadata.lastSignInTime).toLocaleDateString();

  return (
    <div className="w-1/2 mx-auto text-center">
      <h2 className="text-2xl font-bold">{user.displayName}</h2>
      <p>{user.email}</p>
      <p>Last Login: {lastLogin}</p>
    </div>
  );
};

export default Dashboard;
