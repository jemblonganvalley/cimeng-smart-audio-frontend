import Layout from "./Layout";
import { AudioComponents } from "../components/AudioComponents";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Audio = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <AudioComponents />
    </Layout>
  );
};
