import { useNavigate } from "react-router-dom";
import ScheduleComponents from "../components/ScheduleComponents";
import Layout from "./Layout";
import axios from "axios";
import { useEffect, useState } from "react";

const Schedule = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  return (
    <Layout>
      <ScheduleComponents />
    </Layout>
  );
};

export default Schedule;
