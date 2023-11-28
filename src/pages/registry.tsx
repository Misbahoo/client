import RegistryRows from "../components/registryRows";

const Registry = () => {
  return (
    <>
      <div className="flex flex-col py-10">
        <h1 className="text-5xl uppercase text-gray-500 mx-auto">
          Welcome to Registry Section
        </h1>
      </div>
      <RegistryRows />
    </>
  );
};

export default Registry;
