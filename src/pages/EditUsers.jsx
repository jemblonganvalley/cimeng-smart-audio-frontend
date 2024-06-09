import axios from "axios";
import FormEditUsersComponents from "../components/FormEditUsersComponents";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const EditUsers = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);


  return (
    <Layout>
      <FormEditUsersComponents />
    </Layout>
  );
};

export default EditUsers;
