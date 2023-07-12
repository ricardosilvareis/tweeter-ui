import { FormEvent, useState, KeyboardEvent } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import "./Status.css";
import { PaperPlaneRight } from "phosphor-react";

export function Status() {
  const [newAnswers, setNewAnswers] = useState("");
  const [answers, setAnswers] = useState([""]);

  function createNewAnswers(event: FormEvent) {
    event.preventDefault();

    setAnswers([newAnswers]);
    setNewAnswers("");
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswers]);
      setNewAnswers("");
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quia beatae fuga magni nulla, ipsum quaerat optio culpa similique fugiat praesentium molestias neque quis dolorem blanditiis voluptatem quidem totam aperiam!" />

      <Separator />

      <form onSubmit={createNewAnswers} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/ricardosilvareis.png" />
          <textarea
            id="tweet"
            placeholder="Twwet your answer"
            value={newAnswers}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewAnswers(event.target.value);
            }}
          />
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
