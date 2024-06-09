import { useNavigate } from "react-router-dom";
import FormEditAudioComponents from "../components/FormEditAudioComponents";
import Layout from "./Layout";
import { useEffect, useState } from "react";
import axios from "axios";

const EditAudio = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);


  return (
    <Layout>
      <FormEditAudioComponents />
    </Layout>
  );
};

export default EditAudio;
