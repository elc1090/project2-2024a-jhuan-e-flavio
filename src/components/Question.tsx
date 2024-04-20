import { useState } from 'react';
import {Stack, Form, Button, Badge} from 'react-bootstrap';

interface QuestionProps {
  title: string;
  options: string[];
  onSetOption: (op : number) => void;
}

function Question(props : QuestionProps) {
  const options = props.options;
	const title = props.title;
  const onSetOption = props.onSetOption;

  const [activeOption, setActiveOption] = useState(-1);

  const handleOptionChange = (index: number) => {
    onSetOption(index);
    setActiveOption(index);
  }

  return (
    <Form className="d-flex flex-column align-items-center p-5">
        <Form.Label className="text-center col-md-5">
			    <h2 dangerouslySetInnerHTML={{ __html: title }}/>
        </Form.Label>

        <Stack gap={3} className="col-md-3 mx-auto">
          {options.map((item, index) => (
            <Button 
              variant={activeOption === index ? "success" : "outline-primary"}
              onClick={() => handleOptionChange(index)}
              className="d-flex justify-content-between"
            >
              <Badge pill 
                bg={activeOption === index ? "success" : "primary"}
                >{index}</Badge>
              <label dangerouslySetInnerHTML={{ __html: item }}></label>
            </Button>

          ))}
        </Stack>
    </Form>
  );
}

export default Question;
