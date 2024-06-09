import axios from "axios";
import LibraryComponents from "../components/LibraryComponents";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Library = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  return (
    <Layout>
      <LibraryComponents />
    </Layout>
  );
};

export default Library;
