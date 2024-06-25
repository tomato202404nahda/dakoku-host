import React from "react";
import { useLocation } from "react-router-dom";

const clientpage: React.FC = () => {
  const query = new URLSearchParams(useLocation().search);
  const qrname = query.get("qrname");
  const qrnumber = query.get("qrnumber");

  return (
    <div>
      <h1>QR Data</h1>
      <p>first value: {qrname}</p>
      <p>second value: {qrnumber}</p>
    </div>
  );
};

export default clientpage;
