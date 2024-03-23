import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import "./Notes.css"

const Notes = () => {
  const [createdBy, setCreatedBy] = useState("");
  const [city, setCity] = useState("");
  const [note, setNote] = useState("");
  const [data, setData] = useState([]);

  const formHandler = (event) => {
    event.preventDefault();

    const rawData = {
      id: v4(),
      createdBy: createdBy,
      city: city,
      note: note,
    };
    setData([...data, rawData]);
    setCreatedBy("");
    setCity("");
    setNote("");
  };

  return (
    <section className="notes">
      <h1>Create a Note</h1>
      <form onSubmit={formHandler}>
        <div className="formStyle">
          <input
            type="text"
            placeholder="Created By"
            value={createdBy}
            onChange={(event) => setCreatedBy(event.target.value)}
          />
          <input
            type="text"
            placeholder="Insert Your City"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
          <input
            type="text"
            placeholder="Note"
            value={note}
            onChange={(event) => setNote(event.target.value)}
          />
          <button>Add Note</button>
        </div>
      </form>
      <div className="resultData">
        {data.map((item) => {
          return (
            <div key={item.id} className="item">
              <span>Created By : {item.createdBy}</span>
              <span>City By : {item.city}</span>
              <span>Note By : {item.note}</span>
            </div>
          );
        })}
      </div>
      <button>
        <Link to={"/"}>Move to Home Page</Link>
      </button>
    </section>
  );
};

export default Notes;
