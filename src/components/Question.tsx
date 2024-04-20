
interface QuestionProps {
  title: string;
  options: string[];
  onSetOption: (op : number) => void;
}

function Question(props : QuestionProps) {
  const options = props.options;
	const title = props.title;
  const setOption = props.onSetOption;

  const handleOptionChange = (index: number) => {
    setOption(index);
  }

  return (
    <div className="container d-block w-100" >
			<h2 dangerouslySetInnerHTML={{ __html: title }}/>
    
      <form>
        {options.map((item, index) => (
          <div className="form-check">
            <input
              className={"form-check-input"}
              type="radio"
              name="flexRadioDefault"
              id={`option${index}`}
              onChange = {() => handleOptionChange(index)}
              />

            <label 
              className="form-check-label" 
              htmlFor={`option${index}`} 
              dangerouslySetInnerHTML={{ __html: item }}/>
          </div>
        ))}

      </form>
    </div>
  );

  // nao funciona (atualiza sempre por algum motivo =( )
  {/* <form>
    {options.map((item, index) => (
      <Button
        trigger = {() => handleOptionChange(index)}
      >
        <label 
          className="form-check-label" 
          htmlFor={`option${index}`} 
          dangerouslySetInnerHTML={{ __html: item }}/>
      </Button>
      
    ))}
  </form> */}
}

export default Question;
