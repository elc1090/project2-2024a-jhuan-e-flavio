import { MouseEvent } from "react";

function ListGroup() {
  const items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];
	
	const title = "qual o certo"

  return (
    <>
      <form action="#">
				<h1>{title}</h1>
        {items.map((item) => (
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              {item}
            </label>
          </div>
        ))}
      </form>
    </>
  );
}

export default ListGroup;
