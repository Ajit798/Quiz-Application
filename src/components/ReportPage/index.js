import React from "react";
import { useSelector } from "react-redux";
import img from "../../assets/quizBack.jpeg";

export default function ReportPage() {
  const quizData = useSelector((store) => store.data.quizData);
  return (
    <div
      className="flex flex-col items-center "
      style={{ backgroundImage: `url(${img})`, height: "100%" }}
    >
      <div className="mt-3">
        <h1 className="text-xl font-bold">Report Page</h1>
      </div>
      {quizData.map((quiz, index) => {
        return (
          <div className="border border-black w-[60%] mt-5 p-4 m-2 rounded-lg flex flex-col gap-5 bg-white shadow-xl">
            <h1 className="font-semibold text-lg">{`Question ${index + 1}`}</h1>
            <h2>{quiz.question}</h2>
            <div className="flex gap-5 justify-between">
              <div className="flex gap-2">
                <h3 className="font-semibold">Your Answer-</h3>
                {quiz.quizAnswer.map((answer, ind) => {
                  return (
                    <p className="font-semibold">
                      {ind !== quiz.quizAnswer.length - 1
                        ? `${answer},`
                        : answer}
                    </p>
                  );
                })}
              </div>

              <h3 className="font-semibold">{`Correct Answer- ${quiz.correct_answer}`}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
