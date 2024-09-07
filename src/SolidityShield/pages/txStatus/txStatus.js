import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthButton from "../../components/auth/AuthButton";
import AuthScrenHeader from "../../components/auth/AuthScreenHeader";
import { checkPhonpe } from "../../functions";

const TxStatus = () => {
  const { id } = useParams();
  const [status, setStatus] = useState(false);

  useEffect(() => {
    async function fetch() {
      const data = await checkPhonpe({ id });
      data.success && setStatus(true);
    }
    fetch();
  }, [status]);

  return (
    <div className="auth-screen-container">
      <div className="auth-screen">
        <div style={{ width: "100%", fontSize: "20px", textAlign: "center" }}>
          {"Transaction of Id: " + id}
        </div>
        <br />
        <br />
        <AuthButton children={`Status : ${status ? "Success" : "Pending"}`} />
      </div>
    </div>
  );
};

export default TxStatus;
