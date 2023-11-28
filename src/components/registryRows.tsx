import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faCircleCheck,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

const RegistryRows = () => {
  return (
    <>
      <div className="flex px-5 mt-10">
        <div className="w-2/6 p-5 mx-2 flex-1 border shadow-md">
          <FontAwesomeIcon
            icon={faUserGraduate}
            className="text-gray-500 text-6xl text-center mx-auto block pt-8 mb-5"
          />
          <h2 className="text-2xl text-green-500 uppercase text-center">
            Registration
          </h2>
          <p className="mb-8 p-5">
            You are advised to go and register immedietly the registration
            portal is opened to avoid hinderance to your adminssion provision
          </p>
          <button className="btn bg-amber-600 p-5">Click to Register</button>
        </div>
        <div className="w-2/6 p-5 mx-2 flex-1 border shadow-md">
          <FontAwesomeIcon
            icon={faGraduationCap}
            className="text-gray-500 text-6xl text-center mx-auto block pt-8 mb-5"
          />
          <h2 className="text-2xl text-green-500 uppercase text-center">
            Admission
          </h2>
          <p className="mb-8 p-5">
            After writing your CBT exams, you can check and keep track of your
            admission status. Click the button below to check.
          </p>
          <button className="btn bg-amber-600 p-5">Check Admission</button>
        </div>
        <div className="w-2/6 p-5 mx-2 flex-1 border shadow-md">
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="text-green-500 text-6xl text-center mx-auto block pt-8 mb-5"
          />
          <h2 className="text-2xl text-gray-500 uppercase text-center">
            Clearance
          </h2>
          <p className="mb-8 p-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            quo sint quas sit mollitia. Corrupti praesentium nisi, molestiae
            accusantium eius, nemo
          </p>
          <button className="btn bg-amber-600 p-5">Clearance</button>
        </div>
      </div>{" "}
    </>
  );
};

export default RegistryRows;
