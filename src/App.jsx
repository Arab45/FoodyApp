import Food from "./Food.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Login from "./Login.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col bg-blue-800">
      <Header />

      <main className="flex-1">
        <Food />

        <Login />
      </main>

      <Footer />
    </div>
  );
}

export default App;
