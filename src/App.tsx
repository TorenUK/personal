import StickyFooter from "./components/StickyFooter";

function App() {
  return (
    <div className="m-auto w-full h-screen bg-gray-500">
      <nav className="h-16"></nav>
      <div className="h-dvh w-full">
        <div className="w-full h-1/3 bg-yellow-300"></div>
        <div className="w-full h-1/3 bg-blue-500 flex justify-center items-center">
          <p className="font-bold text-2xl">hello there this is a section</p>
        </div>
        <div className="w-full h-1/3 bg-red-500 flex justify-center items-center">
          <p className="font-bold text-2xl">hello there this is a section</p>
        </div>
        <div className="w-full h-1/3 bg-green-500 flex justify-center items-center">
          <p className="font-bold text-2xl">hello there this is a section</p>
        </div>
      </div>
      <StickyFooter />
    </div>
  );
}

export default App;
