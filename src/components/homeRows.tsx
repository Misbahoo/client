import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faGraduationCap,
  faCircleCheck,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

const HomeRows = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <>
      <hr className="w-5/6 my-10 mx-auto border-amber-600" />
      <div className="flex px-5 mt-10">
        <div
          className="w-2/6 p-5 mx-2 flex-1 border shadow-md"
          ref={ref}
          style={
            inView
              ? {
                  opacity: 1,
                  transform: "translateY(0)",
                  transition: "all 0.9s ease-in-out",
                  transitionDelay: "0.2s",
                }
              : {
                  opacity: 0,
                  transform: "translateY(30%)",
                }
          }
        >
          <h2 className="text-2xl text-green-500 uppercase mb-5 p-5 text-center">
            Registration
          </h2>
          <FontAwesomeIcon
            icon={faUserGraduate}
            className="text-gray-500 text-6xl text-center mx-auto block"
          />
          <p className="mb-8 p-5">
            You are advised to go and register immedietly the registration
            portal is opened to avoid hinderance to your adminssion provision
          </p>
          <button className="btn bg-amber-600 p-5">Click to Register</button>
        </div>
        <div
          className="w-2/6 p-5 mx-2 flex-1 border shadow-md"
          ref={ref}
          style={
            inView
              ? {
                  opacity: 1,
                  transform: "translateY(0)",
                  transition: "all 0.9s ease-in-out",
                  transitionDelay: "0.7s",
                }
              : {
                  opacity: 0,
                  transform: "translateY(30%)",
                }
          }
        >
          <h2 className="text-2xl text-green-500 uppercase mb-5 p-5 text-center">
            Admission
          </h2>
          <FontAwesomeIcon
            icon={faGraduationCap}
            className="text-gray-500 text-6xl text-center mx-auto block"
          />
          <p className="mb-8 p-5">
            After writing your CBT exams, you can check and keep track of your
            admission status. Click the button below to check.
          </p>
          <button className="btn bg-amber-600 p-5">Check Admission</button>
        </div>
        <div
          className="w-2/6 p-5 mx-2 flex-1 border shadow-md"
          ref={ref}
          style={
            inView
              ? {
                  opacity: 1,
                  transform: "translateY(0)",
                  transition: "all 0.9s ease-in-out",
                  transitionDelay: "1s",
                }
              : {
                  opacity: 0,
                  transform: "translateY(30%)",
                }
          }
        >
          <h2 className="text-2xl text-gray-500 uppercase mb-5 p-5 text-center">
            Clearance
          </h2>
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="text-green-500 text-6xl text-center mx-auto block"
          />
          <p className="mb-8 p-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            quo sint quas sit mollitia. Corrupti praesentium nisi, molestiae
            accusantium eius, nemo
          </p>
          <button className="btn bg-amber-600 p-5">Clearance</button>
        </div>
      </div>
      <div className="bg-gray-900 mt-16">
        <div className="p-5">
          <p className="w-3/4 text-center leading-relaxed text-5xl text-white p-10 mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni id
            delectus harum! Cumque nemo incidunt eum adipisci, cum soluta,
          </p>
        </div>
      </div>
      <div className="flex gap-3 px-5 py-24 bg-green-50">
        <div className="flex-1 w-2/4">
          <img
            src="images/pic1.png"
            className="w-3/4 shadow-md"
            alt="image 3"
          />
        </div>
        <div className="flex-1 w-2/4">
          <h1 className="text-4xl text-green-500 font-serif pb-10 pl-5">
            Heading
          </h1>
          <p className="text-2xl text-left leading-loose font-serif p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            porro ipsum vitae hic possimus, assumenda libero labore laudantium
            natus cum dignissimos quidem veniam tempora. Dicta, aut laboriosam.
            Itaque, debitis a.
          </p>
        </div>
      </div>

      <div className="flex gap-3 px-5 py-24 flex-row-reverse bg-amber-50">
        <div className="flex-1 w-2/4">
          <img
            src="images/pic2.jpg"
            className="w-3/4 shadow-md"
            alt="image 3"
          />
        </div>
        <div className="flex-1 w-2/4">
          <h1 className="text-4xl text-amber-600 font-serif pb-10 pl-5">
            Heading
          </h1>
          <p className="text-2xl text-left leading-loose font-serif p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            porro ipsum vitae hic possimus, assumenda libero labore laudantium
            natus cum dignissimos quidem veniam tempora. Dicta, aut laboriosam.
            Itaque, debitis a.
          </p>
        </div>
      </div>
      <div className="flex gap-24 px-10 py-24 bg-amber-200">
        <div className="w-2/6 p-5 bg-black rounded-lg leading-loose flex-1 pb-10">
          <h1 className="text-2xl text-amber-200 mb-5 pl-5 uppercase">
            Heading
          </h1>
          <p className="p-5 text-lg text-white pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore id
            provident praesentium obcaecati, nam harum repellendus consequuntur
            laudantium. Ad fugit tempore, commodi quo consequatur vero quidem
            optio dolorem cumque dolores.ß
          </p>
          <button className="twoColBtn bg-amber-200 text-black ml-5">
            Read More
          </button>
        </div>
        <div className="w-2/6 p-5 bg-black rounded-lg leading-loose flex-1 pb-10">
          <h1 className="text-2xl text-amber-200 mb-5 pl-5 uppercase">
            Heading
          </h1>
          <p className="p-5 text-lg text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore id
            provident praesentium obcaecati, nam harum repellendus consequuntur
            laudantium. Ad fugit tempore, commodi quo consequatur vero quidem
            optio dolorem cumque dolores.
          </p>
          <button className="twoColBtn bg-amber-200 text-black ml-5">
            Read More
          </button>
        </div>
      </div>

      <div className="bg-gray-600 w-3/6 mx-auto py-10 my-16 rounded-2xl shadow-2xl shadow-black">
        <h1 className="text-center text-5xl text-gray-100 mb-5">Contact</h1>
        <div className="w-3/4 mx-auto text-white">
          <div className="mb-5 flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <FontAwesomeIcon icon={faLocationDot} />{" "}
              <p className="text-center">
                P.M.B. 0011 Tambuwal LGA, Sokoto State, Nigeria.
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <FontAwesomeIcon icon={faPhone} />{" "}
              <p className="text-center">080XXXXXXXX</p>
            </div>
            <div className="flex gap-3 items-center">
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              <p className="text-center">constambuwal@fictitious.com</p>
            </div>
          </div>
          <button className="contactBtn bg-black text-white">E-mail Us</button>
        </div>
      </div>
    </>
  );
};

export default HomeRows;
