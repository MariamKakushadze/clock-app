import Quotes from "./components/quotes";
import Timezone from "./components/timezone";

function App() {
  return (
    <div className="bg-[url('./assets/mobile/bg-image-daytime.jpg')] bg-[#D8D8D8] bg-no-repeat bg-cover h-screen w-full bg-blend-multiply p-6">
      <Quotes />
      <Timezone />
    </div>
  );
}

export default App;
