import { useApiStore } from "../store/questions";
import { decode } from "html-entities";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Answers = () => {

  const { questionList } = useApiStore();
  const { completed } = useApiStore();

  if(!completed) {
    return <Navigate to='/' replace/>
  }

  return (
    <main className="w-full h-screen bg-cover bg-no-repeat bg-right overflow-y-scroll overflow-x-hidden" style={{backgroundImage : 'url(https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)'}}>
      <div className="flex justify-center">
        <div>
          <h1 className="text-orange-950 text-5xl text-center mt-5 mb-5 md:left-[13rem]">ANSWERS</h1>
          <div className="grid gap-2">
          {
            questionList.map((item) => (
              <article className="bg-orange-700 -500 rounded-md max-w-[22rem] md:max-w-[40rem] py-4 px-2">
                <p className="text-slate-50 text-center text-lg">Question : <span>{decode(item.question)}</span></p>
                <p className="text-slate-50 text-center text-lg">Answer : <span>{decode(item.correct_answer)}</span></p>
              </article>
            ))
          }
          <Link to='/' className="my-6 flex justify-center">
            <button className="bg-green-500 h-16 w-72 flex justify-center pt-[1rem] rounded-md text-lg">
              New Quiz
            </button>
          </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Answers