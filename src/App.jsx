import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      <NewProject />
      <NoProjectSelected />

    </main>
  );
}

export default App;
