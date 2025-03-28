import genericImportantPersonPicture from "../assets/images/genericImportantPerson.png";
import genericDiscoveryPicture from "../assets/images/genericDiscovery.png";
import genericResourcePicture from "../assets/images/genericResource.png";

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
    <div>
      <h1>{props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h3>Population: {props.population}</h3>
      <ul>Resources:{drawHashMap(props.resources, "resource")}</ul>
      <ul>Discoveries:{drawHashMap(props.discoveries, "discovery")}</ul>
      <ul>
        Important Individuals:
        {drawImportantPeople(props.importantIndividuals)}
      </ul>
      <p>History Log:</p>
      {drawHistoryLog(props.historyLog)}
    </div>
  );
}
export default Civilization;
