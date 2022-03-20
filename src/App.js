import "./App.css";
import { Button } from "./components/Button";
import { Display } from "./components/Display";
import { Title } from "./components/Title";

const App = () => {
  return (
    <div class="wrapper">
      {/* Title */}
      <Title />
      <div class="mainParent">
        <Display />
        <Button />
      </div>
    </div>
  );
};

export default App;
