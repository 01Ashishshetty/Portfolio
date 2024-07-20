import styles from "./App.module.css";
import { Profile } from "./components/Profile/Profile";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/About/About";


function App() {
   return (
      <div className={styles.App}>
         <Navbar />
         <Profile />
         <About />
      </div>
   );
}

export default App;
