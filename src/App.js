import Header from"./components/Header/Header";
import YouTuberList from "./components/CoreConcept.jsx";
import Examples from "./components/Example.jsx";

function App() {

  return (
    <div>
      <Header />
      <main>
        <YouTuberList />
        <Examples />
      </main>
    </div>
  );
}

export default App;
