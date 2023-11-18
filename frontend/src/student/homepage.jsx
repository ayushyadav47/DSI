import ButtonAppBar from "../navbar/navbar.jsx";
import RadarChartPanelStud from "../student/datapanel.jsx";
import FunctionsPanel from "./functions.jsx"; // Import the new component

function StudHomepage() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar />
        <RadarChartPanelStud />
        <FunctionsPanel /> {/* Include the new component here */}
      </header>
    </div>
  );
}
export default StudHomepage;
