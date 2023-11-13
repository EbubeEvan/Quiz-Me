import { useApiStore } from "../store/questions";
// import useCountDown from "../hooks/useCountDown";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { decode } from "html-entities";

const QuizPage = () => {
  const [questionNum, setQuestionNum] = useState(0);
  const [buttonValue, setButtonValue] = useState("");
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);
  const [finalOptions, setFinalOptions] = useState<string[]>([]);
  const [selected, setselected] = useState(false);
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

  const submit = () => {
    if (buttonValue === questionList[questionNum].correct_answer) {
      setCountScore(countScore + 1);
    } 
    setQuestionCount(questionCount + 1);
  };

  const next = () => {
    submit();
    setSelectedButtonIndex(-1);
    if (questionNum === questionList.length - 1) {
      useApiStore.getState().setScore(countScore);
      useApiStore.getState().setCompleted(true);
      navigate("/score");
    } else {
      setQuestionNum(questionNum + 1);
    }
  };

  const handleSelect = (
    event: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    setButtonValue(event.currentTarget.value);
    setSelectedButtonIndex(index);
    setselected(true);
  };

  const totalQuestions = questionList.length;

  const clicked =
    "bg-sky-600 w-[20rem] ml-[4rem] md:w-[18rem] h-[4rem] rounded-md text-slate-50 py-[1rem]";
  const regular =
    "bg-red-500  w-[20rem] ml-[4rem] md:w-[18rem] h-[4rem] rounded-md text-slate-50 py-[1rem]";

  return (
    <main
      className="w-full h-screen bg-cover bg-no-repeat bg-right md:overflow-hidden overflow-y-scroll"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)",
      }}
    >
      <div className="flex justify-between">
        <p className="text-red-950 ml-5 mt-5 md:ml-[10rem] md:mt-6 text-2xl px-[1rem] py-[1rem]">
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
      <div className="flex justify-center h-full relative left-[-2.2rem] pb-10 md:pb-0 pt-10 flex-shrink-0 px-3 flex-1 ">
        <div>
          <div className="bg-red-500 max-w-[22rem] md:max-w-[42rem] h-[8rem] md:h-[10rem] mt-8 ml-[4.7rem] md:ml-[4.5rem] rounded-md flex justify-center pt-9 md:pt-14">
            <p className="text-slate-50 text-center">{decode(question)}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-y-2 md:gap-y-7 md:gap-x-0 py-5 px-5 md:px-0 ml-[0.5rem]">
            {finalOptions.map((item, index) => (
              <button
                key={item}
                value={item}
                className={
                  index === selectedButtonIndex 
                  ? clicked 
                  : regular
                }
                onClick={(event) => handleSelect(event, index)}
              >
                {decode(item)}
              </button>
            ))}
          </div>
          <div className="flex justify-center mt-3 md:mt-9 ml-[4rem]">
            <button
              className="bg-green-500 ext-white py-4 px-10 rounded-md"
              onClick={next}
              disabled={!selected}
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
