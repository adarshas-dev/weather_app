import { useState } from "react";
import MapView from "./MapView";
import Search from "./Search";



function App() {
 const [location, setLocation] = useState(null)

  return (
    <>
     <Search setLocation={setLocation}/>
      <MapView location={location}/>
    </>
  )
}

export default App;
