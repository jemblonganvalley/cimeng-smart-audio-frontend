import { useEffect, useState } from "react";
import FormAddScheduleComponents from "../components/FormAddScheduleComponents";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddSchedule = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  return (
    <Layout>
      <FormAddScheduleComponents />
    </Layout>
  );
};

export default AddSchedule;
