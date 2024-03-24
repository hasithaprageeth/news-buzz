import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Newsboard from "./components/news/newsboard";

const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <Newsboard category={category} />
    </div>
  );
};

export default App;
