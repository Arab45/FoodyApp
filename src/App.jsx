import Food from "./Food.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col bg-sky-300">
      <Header />

      <main className="flex-1">
        <Food />

      </main>

      <Footer />
    </div>
  );
}

export default App;
