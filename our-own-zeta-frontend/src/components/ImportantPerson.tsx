import genericImportantPersonPicture from "../assets/images/genericImportantPerson.png";
import genericDiscoveryPicture from "../assets/images/genericDiscovery.png";
import "./ImportantPerson.css";
import athleteFace from "../assets/images/athleteFace.png";
import scientistFace from "../assets/images/scientistFace.png";
import doctorFace from "../assets/images/doctorFace.png";
import artistFace from "../assets/images/artistFace.png";

type ImportantPersonProps = {
  name: string;
  field: string;
  age: number;
  knowledge: number;
  discoveries: Map<string, number>;
  lifeLog: string[];
};

function ImportantPerson(props: ImportantPersonProps) {
  function drawHashMap(mapToDraw: Map<string, number>) {
    return (
      <>
        {[...mapToDraw].map(([key, value], index) => {
          return (
            <li key={index}>
              <img src={genericDiscoveryPicture}></img>
              {key}: {value}
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

  function addFieldImage(field: string) {
    switch (field) {
      case "Athlete":
        return athleteFace;
      case "Scientist":
        return scientistFace;
      case "Doctor":
        return doctorFace;
      case "Artist":
        return artistFace;
      default:
        return genericImportantPersonPicture;
    }
  }

  return (
    <div className="card container">
      <div className="item-6">
        <h2>{props.name}</h2>
        <h3>{props.field}</h3>
      </div>
      <div className="item-2">
        <p>Age: {props.age}</p>
        <p>Knowledge: {props.knowledge}</p>
      </div>
      <div className="item-4">
        <img src={addFieldImage(props.field)}></img>
      </div>
      <div className="item-12 cardDiv">
        <span className="subTitle">Discoveries:</span>
        <ul>{drawHashMap(props.discoveries)}</ul>
      </div>
      <div className="item-12 cardDiv">
        <span className="subTitle">Life story:</span>
        <ul>{drawHistoryLog(props.lifeLog)}</ul>
      </div>
    </div>
  );
}

export default ImportantPerson;
