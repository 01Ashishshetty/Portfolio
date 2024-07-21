import styles from "./App.module.css";
import { Profile } from "./components/Profile/Profile";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";


function App() {
   return (
      <div className={styles.App}>
         <Navbar />
         <Profile />
         <About />
         <Experience />
      </div>
   );
}

export default App;
