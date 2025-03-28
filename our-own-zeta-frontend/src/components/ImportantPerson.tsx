import genericImportantPersonPicture from "../assets/images/genericImportantPerson.png";
import genericDiscoveryPicture from "../assets/images/genericDiscovery.png";
import "./ImportantPerson.css";
import athleteFace from "../assets/images/athleteFace.png";
import scientistFace from "../assets/images/scientistFace.png";
import doctorFace from "../assets/images/doctorFace.png";
import artistFace from "../assets/images/artistFace.png";

function ImportantPerson({ field }: { field: string }) {
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
        <h2>Pepe</h2>
        <h3>{field}</h3>
      </div>
      <div className="item-2">
        <p>Age: 36</p>
        <p>Knowledge: 94</p>
      </div>
      <div className="item-4">
        <img src={addFieldImage(field)}></img>
      </div>
      <div className="item-12 cardDiv">
        <span className="subTitle">Discoveries:</span>
        <ul>
          <li>
            <img src={genericDiscoveryPicture}></img>Discovery 1
          </li>
          <li>
            <img src={genericDiscoveryPicture}></img>Discovery 2
          </li>
        </ul>
      </div>
      <div className="item-12 cardDiv">
        <span className="subTitle">Life story:</span>
        <ul>
          <li>Pepe was born</li>
          <li>Pepe discovered Electricity 1</li>
          <li>Pepe started studying programming at {"</salt>"}</li>
        </ul>
      </div>
    </div>
  );
}

export default ImportantPerson;
