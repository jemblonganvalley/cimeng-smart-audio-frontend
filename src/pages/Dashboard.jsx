import axios from "axios";
import Welcome from "../components/Welcome";
import Layout from "./Layout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Welcome />
    </Layout>
  );
};

export default Dashboard;
