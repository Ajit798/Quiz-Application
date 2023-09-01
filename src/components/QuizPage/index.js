import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, updateData } from "../../utils/dataslice";
import img from "../../assets/quizBack.jpeg";
import { useNavigate } from "react-router-dom";
import Timer from "../Timer";
import BackdropLoader from "../Loader";
import { BASE_URL } from "../../constants";

export default function QuizPage() {
  const [quizData, setQuizData] = React.useState([]);
  const [answersData, setAnswersData] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(1);
  const [checkedAnswers, setCheckboxAnswers] = React.useState([]);
  const [timerStatus, setTimerStatus] = React.useState(false);
  const [loadStatus, setLoadStatus] = React.useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((store) => store.data.quizData);

  React.useEffect(() => {
    getQuizQuestions();
  }, []);

  React.useEffect(() => {
    if (timerStatus) {
      navigate("/report");
    }
  }, [timerStatus]);

  const handleTimerStatus = () => {
    setTimerStatus(true);
  };

  const getQuizQuestions = async () => {
    const response = await axios.get(BASE_URL);
    setLoadStatus(false);

    const output = response.data.results.map((ele) => {
      let data = [];
      data = data.concat(ele.incorrect_answers);
      data.push(ele.correct_answer);

      return {
        name: ele.question,
        answerData: data,
      };
    });

    setAnswersData([...output]);

    const mappedOutput = response.data.results.map((ele) => {
      return {
        ...ele,
        quizAnswer: [],
      };
    });

    dispatch(addData(mappedOutput));

    setQuizData([...response.data.results]);
  };

  const questionNavigationButton = [];

  for (let i = 0; i < quizData.length; i++) {
    questionNavigationButton.push(i + 1);
  }

  if (loadStatus) {
    return <BackdropLoader />;
  }

  return (
    <div
      className="flex flex-col justify-center items-center w-[100%] h-[100vh]"
      style={{ backgroundImage: `url(${img})` }}
    >
      <h1 className="font-bold text-gray-300 text-xl">Welcome to your Quiz</h1>
      <div className="flex items-center gap-6">
        <div className="flex gap-5 justify-center mt-10 bg-slate-200 m-2 p-1 rounded-lg">
          {questionNavigationButton.map((button, index) => {
            return (
              <div>
                <button
                  className="border border-black ml-1 cursor-pointer m-2 p-1 rounded-md"
                  style={{
                    backgroundColor:
                      userData[index].quizAnswer.length > 0
                        ? "#50C878"
                        : "inherit",
                    width: "30px",
                  }}
                  key={index}
                  onClick={() => setCurrentIndex(button)}
                >
                  {button}
                </button>
              </div>
            );
          })}
        </div>
        <div>
          <Timer handleTimerStatus={handleTimerStatus} />
        </div>
      </div>

      <div className="border border-black p-5 mt-12 rounded-lg w-[40%] h-100 bg-slate-100 shadow-lg">
        {userData.map((quiz, index) => {
          return (
            currentIndex === index + 1 && (
              <div className="flex flex-col gap-6">
                <h3>{`Question ${index + 1}`}</h3>
                <h4>{quiz?.question}</h4>
                {answersData.map((answer) => {
                  return (
                    answer.name === quiz.question &&
                    answer.answerData.map((ele, ind) => (
                      <div>
                        <input
                          type="checkbox"
                          checked={quiz.quizAnswer.find((elem) => elem === ele)}
                          id={answer.name}
                          value={ele}
                          name={`quizAnswer`}
                          onChange={(event) => {
                            let copy = [...checkedAnswers];
                            if (event.target.checked === true) {
                              copy.push(event.target.value);
                            } else if (event.target.checked === false) {
                              copy = copy.filter(
                                (ele) => ele !== event.target.value
                              );
                            }
                            setCheckboxAnswers([...copy]);
                          }}
                        />
                        <label className="ml-3" for={answer.name}>
                          {ele}
                        </label>
                      </div>
                    ))
                  );
                })}
                {index !== userData.length - 1 ? (
                  <button
                    className="bg-sky-500 p-2 rounded-lg text-black font-semibold"
                    onClick={() => {
                      dispatch(
                        updateData({
                          data: checkedAnswers,
                          question: quiz.question,
                        })
                      );
                      setCurrentIndex((prevData) => prevData + 1);
                      setCheckboxAnswers([]);
                    }}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    className="bg-sky-500 p-2 rounded-lg text-black font-semibold"
                    onClick={() => {
                      dispatch(
                        updateData({
                          data: checkedAnswers,
                          question: quiz.question,
                        })
                      );
                      navigate("/report");
                    }}
                  >
                    Submit
                  </button>
                )}
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}
