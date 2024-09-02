import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthButton from "../../components/auth/AuthButton";
import AuthScrenHeader from "../../components/auth/AuthScreenHeader";
import { checkPhonpe } from "../../functions";

const TxStatus = () => {
  const { id } = useParams();

  useEffect(() => {});

  return (
    <div className="auth-screen-container">
      <div className="auth-screen">
        <AuthScrenHeader title={"Transaction of Id: " + id} />
        <br />
        <br />
        <AuthButton
          children={`Status : ${
            checkPhonpe(id) === true ? "Success" : "Pending"
          }`}
        />
      </div>
    </div>
  );
};

export default TxStatus;
