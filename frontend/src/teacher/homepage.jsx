import ButtonAppBar from "../navbar/navbar.jsx";
import RadarChartPanelTeach from "../teacher/datapanel.jsx";
import FunctionsPanel from "./functions.jsx"; // Import the new component
import ContentPanel from "./contentpanel.jsx";
function Homepage() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar />
        <RadarChartPanelTeach />
        <ContentPanel/>
        <FunctionsPanel /> {/* Include the new component here */}
      </header>
    </div>
  );
}
export default Homepage;
