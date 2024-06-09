import { useEffect, useState } from "react";
import FormAddAudioComponents from "../components/FormAddAudioComponents";
// import FormAddAudio from "../components/FormAddAudioComponents";
import Layout from "./Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddAudio = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  return (
    <Layout>
      <FormAddAudioComponents />
    </Layout>
  );
};

export default AddAudio;
