import { useNavigate } from "react-router-dom";
import PlayTimeComponents from "../components/PlayTimeComponents";
import Layout from "./Layout";
import { useEffect, useState } from "react";
import axios from "axios";

const Playtime = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  return (
    <Layout>
      <PlayTimeComponents />
    </Layout>
  );
};

export default Playtime;
