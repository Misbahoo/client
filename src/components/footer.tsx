import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="justify-center py-8 bg-green-600">
      <div className="p-3 bg-atasp-dark-green items-center text-white">
        <p className="text-center">
          College of Nursing and Sciences, Tambuwal. All rights reserved:{" "}
          <FontAwesomeIcon icon={faCopyright} /> {date.getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
