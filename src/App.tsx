import { Header } from "./Components/Header";
import { ModalComponent } from "./Components/ModalComponent";
import { MenuProvider } from "./Components/Providers/MenuProvider";
import { UserInformationHandler } from "./Components/Providers/UserInformationProvider";
import { UserInformationDisplay } from "./Components/UserInformationDisplay";
import "./css/main.css";
import "./css/theme.css";
import { allCities } from "./utilities/all-cities";

function App() {
  return (
    <>
      <MenuProvider>
        <UserInformationHandler>
          <Header />
          <ModalComponent
            dataName="registration"
            stateToCheck="registration-form"
          />
          <UserInformationDisplay />
        </UserInformationHandler>
      </MenuProvider>
      <datalist id="cities">
        {allCities.map((city) => (
          <option key={city}>{city}</option>
        ))}
      </datalist>
    </>
  );
}

export default App;
