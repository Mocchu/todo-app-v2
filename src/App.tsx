import { useState } from "react";
import Test from "./components/Test";

function App() {
  const [test, setText] = useState("default text");
  return (
    <div className="mx-auto flex w-[20rem] flex-col justify-center gap-5">
      <Test />
      <p>{test}</p>
    </div>
  );
}

export default App;
