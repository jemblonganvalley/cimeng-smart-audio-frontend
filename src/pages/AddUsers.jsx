import { useNavigate } from "react-router-dom";
import FormAddUsersComponents from "../components/FormAddUsersComponents";
// import FormAddUsers from "../components/FormAddUsersComponents";
import Layout from "./Layout";
import { useEffect, useState } from "react";
import axios from "axios";

const AddUsers = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  return (
    <Layout>
      <FormAddUsersComponents />
    </Layout>
  );
};

export default AddUsers;
