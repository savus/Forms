import { Header } from "./Components/Header";
import { ModalComponent } from "./Components/ModalComponent";
import { AuthProvider } from "./Components/Providers/AuthProvider";
import { MenuProvider } from "./Components/Providers/MenuProvider";
import { UserProvider } from "./Components/Providers/UserProvider";
import { UserInformationDisplay } from "./Components/UserInformationDisplay";
import "./css/main.css";
import "./css/theme.css";
import { allCities } from "./utilities/all-cities";

function App() {
  return (
    <>
      <MenuProvider>
        <Header />
        <AuthProvider>
          <></>
          {/* <ModalComponent
            dataName="registration"
            stateToCheck="registration-form"
          />
          <UserInformationDisplay /> */}
        </AuthProvider>
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
