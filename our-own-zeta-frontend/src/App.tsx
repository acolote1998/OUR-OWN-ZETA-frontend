import "./App.css";
import Civilization from "./components/Civilization";
import ImportantPerson from "./components/ImportantPerson";

function App() {
  const civProprsTest = {
    name: "The Testians",
    age: 50,
    population: 500,
    resources: new Map([
      ["Gold", 1],
      ["Technology", 2],
      ["Diamonds", 1],
    ]),
    discoveries: new Map([
      ["Electricity", 1],
      ["Fire", 4],
      ["Physics", 2],
    ]),
    importantIndividuals: new Map([
      [
        "Aki",
        {
          age: 27,
          name: "Aki",
          field: "Scientist",
          discoveries: new Map([
            ["Programming", 2],
            ["Gaming", 1],
          ]),
          alive: true,
          knowledge: 98,
          lifelog: [
            "Aki moved to Sweden",
            "Aki got a job at Disney",
            "Aki left his job at Disney",
            "Aki got a job at Nike",
            "Aki got a permanent residency in Sweden",
            "Aki left his job at Nike",
            "Aki got a place in the <salt> program",
            "Aki is happy",
          ],
        },
      ],
      [
        "Michaela",
        {
          age: 27,
          name: "Michaela",
          field: "Hard Worker",
          discoveries: new Map([
            ["Happines", 4],
            ["Loving", 5],
          ]),
          alive: true,
          knowledge: 104,
          lifelog: [
            "Michaela met Aki",
            "Michaela and Aki are very happy together!",
          ],
        },
      ],
    ]),
    historyLog: [
      "Civilization was created",
      "Aki joined the Civilization",
      "Michaela joined the Civlization",
    ],
  };
  return (
    <>
      <Civilization {...civProprsTest} />
      <hr></hr>
      <h3> Important People Details</h3>
      <hr></hr>
      <ImportantPerson></ImportantPerson>
    </>
  );
}

export default App;
