
interface QuestionProps {
  title: string;
  options: string[];
  correct: number;
}

function Question(props : QuestionProps) {
  const options = props.options;
	const title = props.title;
  const correct = props.correct;


  return (
    <div className="container">
			<h2>{title}</h2>
    
      <form>
        {options.map((item, index) => (
          <div className="form-check mb-3">
            <input
              className={"form-check-input"}
              type="radio"
              name="flexRadioDefault"
              id={`option${index}`}
              />

            <label className="form-check-label" htmlFor={`option${index}`}>
              {item}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
}

export default Question;
