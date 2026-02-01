import "./App.css";
import { Component } from "react"; //Importing react components

const BasicInfo = ({ person }) => {
  return (
    // className used to name class in React and use them
    <div className="card-style">
      <p>
        <strong>Name:</strong> {person.name}
      </p>
      <p>
        <strong>Number:</strong> {person.number}
      </p>
      <p>
        <strong>Date of Birth:</strong> {person.dateOfbirth}
      </p>
    </div>
  );
};

// Creating APP class to take content from component using super()
// Props takes properties from Parent component and pass them to the child. - READ ONLY
class App extends Component {
  constructor(props) {
    super(props);

    // Creating persons using this. so I can reuse it everywhere
    this.state = {
      persons: [
        {
          name: "Elhadji Massow Ndiaye",
          number: "980-123-4567",
          dateOfbirth: "11/30/2001",
        },
        {
          name: "Person 1",
          number: "704-123-4567",
          dateOfbirth: "01/12/1980",
        },
        {
          name: "Person 2",
          number: "980-600-4567",
          dateOfbirth: "06/15/2003",
        },
      ],
    };
  }

  // Showing content on Frontend
  render() {
    // Only one outer div (illimited div inside the outer div)
    return (
      <div className="person-container">
        {this.state.persons.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
}

export default App;
