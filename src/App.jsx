import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import Footer from "./Footer.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col bg-blue-800">
      <Header />

      <main className="flex-1">
        <Hero />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
