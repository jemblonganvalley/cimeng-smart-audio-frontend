import axios from "axios";
import UsersListComponents from "../components/UsersListComponents";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const UsersList = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  return (
    <Layout>
      <UsersListComponents />
    </Layout>
  );
};

export default UsersList;
