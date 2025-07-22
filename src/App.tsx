import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Your main content goes here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
