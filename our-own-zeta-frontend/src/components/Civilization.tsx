import genericImportantPersonPicture from "../assets/images/genericImportantPerson.png";
import genericDiscoveryPicture from "../assets/images/genericDiscovery.png";
import genericResourcePicture from "../assets/images/genericResource.png";
import "./Civilization.css";

// <Civilization {...civProprsTest} />

interface Person {
  age: number;
  name: string;
  field: string;
  discoveries: Map<string, number>;
  alive: boolean;
  knowledge: number;
  lifelog: string[];
}

type CivilizationProps = {
  name: string;
  age: number;
  population: number;
  resources: Map<string, number>;
  discoveries: Map<string, number>;
  importantIndividuals: Map<string, Person>;
  historyLog: string[];
};

function Civilization(props: CivilizationProps) {
  function drawHashMap(
    mapToDraw: Map<string, number>,
    contentOfHashMap: string
  ) {
    return (
      <>
        {[...mapToDraw].map(([key, value], index) => {
          return (
            <li key={index}>
              <img
                src={
                  contentOfHashMap === "resource"
                    ? genericResourcePicture
                    : contentOfHashMap === "discovery"
                    ? genericDiscoveryPicture
                    : ""
                }
              ></img>
              {key}: {value}
            </li>
          );
        })}
      </>
    );
  }
  function drawImportantPeople(mapToDraw: Map<string, Person>) {
    return (
      <>
        {[...mapToDraw].map(([key, value], index) => {
          return (
            <li key={index}>
              <img src={genericImportantPersonPicture}></img>
              {key}:{value.field}, Knowledge:{value.knowledge}, Discoveries:
              {value.discoveries}
            </li>
          );
        })}
      </>
    );
  }
  function drawHistoryLog(arrayToDraw: string[]) {
    return (
      <>
        {arrayToDraw.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </>
    );
  }
  return (
    <div className="civilization">
      <h1>{props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h3>Population: {props.population}</h3>
      <hr></hr>
      <div id="civContent" className="item">
        <ul>
          <span className="subTitle">Resources:</span>
          {drawHashMap(props.resources, "resource")}
        </ul>
        <hr></hr>
        <ul>
          <span className="subTitle">Discoveries:</span>
          {drawHashMap(props.discoveries, "discovery")}
        </ul>
        <hr></hr>

        <ul>
          <span className="subTitle">Important Individuals:</span>
          {drawImportantPeople(props.importantIndividuals)}
        </ul>
        <hr></hr>
        <ul>
          <span className="subTitle">History Log:</span>
          {drawHistoryLog(props.historyLog)}
        </ul>
      </div>
    </div>
  );
}
export default Civilization;
