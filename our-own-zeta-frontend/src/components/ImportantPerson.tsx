import genericImportantPersonPicture from "../assets/images/genericImportantPerson.png";
import genericDiscoveryPicture from "../assets/images/genericDiscovery.png";

function ImportantPerson() {
  return (
    <div>
      <h2>Name: Pepe</h2>
      <h3>Scientist</h3>
      <img src={genericImportantPersonPicture}></img>
      <p>Age: 36</p>
      <p>Knowledge: 94</p>
      <p>Discoveries:</p>
      <ul>
        <li>
          <img src={genericDiscoveryPicture}></img>Discovery 1
        </li>
        <li>
          <img src={genericDiscoveryPicture}></img>Discovery 2
        </li>
      </ul>
      <p>Life story:</p>
      <ul>
        <li>Pepe was born</li>
        <li>Pepe discovered Electricity 1</li>
        <li>Pepe started studying programming at {"</salt>"}</li>
      </ul>
    </div>
  );
}

export default ImportantPerson;
