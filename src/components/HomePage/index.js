import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import img from "../../assets/quiz.jpeg";
import { updateUser } from "../../utils/userslice";

export default function HomePage() {
  const [userEmail, setUserEmail] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="flex flex-col gap-6">
        <h1 className="font-bold text-white">
          Please Enter Your Valid Email Address to Proceed
        </h1>
        <input
          type="email"
          className="border border-black w-96 h-12 rounded-md"
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <button
          className="border border-white bg-black text-white p-2 font-bold rounded-md"
          onClick={() => {
            dispatch(updateUser(userEmail));
            navigate("/quiz");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
