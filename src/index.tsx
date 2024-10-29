import Nav from "./components/Navbar";

function Index() {
  return (
    <>
      <Nav />
      <div className="flex justify-center items-center h-[60vh]">
        <h1 className="text-6xl font-bold">
          Bienvenido a <span className="text-blue-500">TaskWave</span>
        </h1>
      </div>
    </>
  );
}

export default Index;
