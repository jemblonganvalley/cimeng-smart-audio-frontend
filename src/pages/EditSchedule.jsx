import Layout from "./Layout";
import FormEditScheduleComponents from "../components/FormEditScheduleComponents";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const EditSchedule = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);


  
  return (
    <Layout>
      <FormEditScheduleComponents />
    </Layout>
  );
};

export default EditSchedule;
