import { useApiStore } from "../store/questions";
// import useCountDown from "../hooks/useCountDown";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { decode } from "html-entities";

const QuizPage = () => {
  const [questionNum, setQuestionNum] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [buttonValue, setButtonValue] = useState("");
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);
  const [finalOptions, setFinalOptions] = useState<string[]>([]);
  const [selected, setselected] = useState(false);
  const [correction, setCorrection] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const [countScore, setCountScore] = useState(0);
  // const [timer, setTimer] = useState<any>(0);

  const navigate = useNavigate();

  const { questionList } = useApiStore();
  // const { time } = useApiStore();

  // const newTime: any = useApiStore.getState().setTime(time! * 60000);

  // const timeout = () => navigate("/score");

  // const startTimer = useCountDown(newTime, timeout)

  // if (time) {
  //   setTimer(startTimer)
  // }

  const question = questionList[questionNum]?.question;

  // Fisher-Yates shuffle algorithm
  const shuffleOptions = (arr: []) => {
    let n = arr.length;
    for (let i = n - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // use array destructuring without tempoaray variable
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  useEffect(() => {
    const initOptions: [] | any = [
      ...questionList[questionNum]?.incorrect_answers,
      questionList[questionNum]?.correct_answer,
    ];
    setFinalOptions(shuffleOptions(initOptions));
    // setCorrectAnswer(questionList[questionNum]?.incorrect_answers)
  }, [questionNum]);

  const reset = () => {
    setIsCorrect(false);
    setSubmitted(false);
    setSelectedButtonIndex(-1);
    setCorrection(false);
  };

  const next = () => {
    reset();
    if (questionNum === questionList.length - 1) {
      useApiStore.getState().setScore(countScore);
      navigate("/score");
    } else {
      setQuestionNum(questionNum + 1);
    }
  };

  const previous = () => {
    reset();
    questionNum === 0
      ? setQuestionNum(questionNum)
      : setQuestionNum(questionNum - 1);
  };

  const handleSelect = (
    event: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    setButtonValue(event.currentTarget.value);
    setSelectedButtonIndex(index);
    setselected(true);
  };

  const submit = () => {
    setSubmitted(true);
    if (selectedButtonIndex === -1) {
      return;
    } else if (buttonValue === questionList[questionNum].correct_answer) {
      setIsCorrect(true);
      setCountScore(countScore + 1);
    } else {
      setIsCorrect(false);
      setCorrection(true);
    }
    setQuestionCount(questionCount + 1);
  };

  const totalQuestions = questionList.length;

  const clicked =
    "bg-sky-600 w-[20rem] ml-[4rem] md:w-[18rem] h-[4rem] rounded-md text-slate-50";
  const correct =
    "bg-lime-500 w-[20rem] ml-[4rem] md:w-[18rem] h-[4rem] rounded-md text-slate-50";
  const wrong =
    "bg-red-700 w-[20rem] ml-[4rem] md:w-[18rem] h-[4rem] rounded-md text-slate-50";
  const regular =
    "bg-red-500  w-[20rem] ml-[4rem] md:w-[18rem] h-[4rem] rounded-md text-slate-50";

  return (
    <main
      className="w-full h-screen bg-cover bg-no-repeat bg-right md:overflow-hidden overflow-y-scroll"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)",
      }}
    >
      <div className="flex justify-between">
        <p className="text-red-950 ml-5 mt-5 md:ml-[10rem] md:mt-6 text-2xl">
          {questionList[questionNum].category}
        </p>
        {/* {
          timer 
          ? (
            <p>{timer}</p>
          )
          : ''
        } */}
        <p className="text-red-950 text-2xl mr-5 mt-5 md:mr-[10rem] md:mt-6">
          {questionCount} / {totalQuestions}
        </p>
      </div>
      <div className="flex justify-center relative left-[-2.2rem] pb-10 md:pb-0 pt-10 flex-shrink-0 px-3 flex-1 ">
        <div>
          <div className="bg-red-500 w-[21rem] md:w-[42rem] h-[8rem] md:h-[10rem] mt-8 relative left-[5.2rem] md:left-[3.5rem] rounded-md flex justify-center pt-9 md:pt-14">
            <p className="text-slate-50 text-center">{decode(question)}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-y-2 md:gap-y-7 md:gap-x-0 py-5 px-5 md:px-0 ml-[0.5rem]">
            {finalOptions.map((item, index) => (
              <button
                key={item}
                value={item}
                className={
                  index === selectedButtonIndex && submitted
                    ? isCorrect
                      ? correct
                      : wrong
                    : index === selectedButtonIndex
                    ? clicked
                    : regular
                }
                onClick={(event) => handleSelect(event, index)}
                disabled={submitted && selected}
              >
                {decode(item)}
              </button>
            ))}
          </div>
          {correction ? (
            <div className="flex justify-center ml-16 md:mt-5 mb-[-1rem]">
              <p className="text-red-950 text-lg">
                Answer : <span>{questionList[questionNum].correct_answer}</span>
              </p>
            </div>
          ) : (
            ""
          )}
          <div className="flex justify-between relative top-[2rem] md:top-[4rem]">
            <button
              className="bg-emerald-300 ext-white py-1 px-2 md:py-2 md:px-4 rounded-md relative left-[5.5rem] md:left-[1rem] top-[-0.5rem]"
              onClick={previous}
            >
              Previous
            </button>
            <button
              className="bg-sky-600 ext-white py-1 px-2 md:py-2 md:px-4 rounded-md relative left-[2rem] md:left-[1rem] top-[-0.5rem]"
              onClick={submit}
            >
              Check
            </button>
            <button
              className="bg-green-500 ext-white py-1 px-2 md:py-2 md:px-4 rounded-md relative left-[-1rem] md:left-[2.5rem] top-[-0.5rem]"
              onClick={next}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default QuizPage;
