import Question from "./components/Question";

function App() {
  return (
    <div>
      <Question
        options={[
          "An item",
          "A second item",
          "A third item",
          "A fourth item",
          "And a fifth one",
        ]}
        title={"a"}
        correct={2}
      />
    </div>
  );
}

export default App;
