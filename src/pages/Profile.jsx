import { useEffect, useState } from "react";
import FormEditProfileComponents from "../components/FormEditProfileComponents";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);


  return (
    <Layout>
      <FormEditProfileComponents />
    </Layout>
  );
};

export default Profile;
