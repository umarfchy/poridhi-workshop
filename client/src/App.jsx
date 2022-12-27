import { useState } from "react";
import { Form } from "./Form";
import { News } from "./News";

const App = () => {
  const [newsList, setNewsList] = useState(newsData);
  const [userInput, setUserInput] = useState("");

  // handle form submit
  const handleSubmit = () => {
    const latestNewsList = [
      ...newsList,
      { id: newsList.length + 1, text: userInput },
    ];

    setNewsList(latestNewsList);
    setUserInput("");
  };

  return (
    <main className="grid place-items-center my-10 grid-cols-1 md:grid-cols-2">
      <section>
        <Form setUserInput={setUserInput} handleSubmit={handleSubmit} />
      </section>
      <section>
        <h3 className="text-2xl font-bold text-center">
          News List{" "}
          <span className="text-sm text-gray-500">({newsList.length})</span>
        </h3>
        {newsList.map((news) => (
          <News key={news.id} text={news.text} />
        ))}
      </section>
    </main>
  );
};

export default App;
