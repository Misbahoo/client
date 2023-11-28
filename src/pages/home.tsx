import { useInView } from "react-intersection-observer";

import HomeRows from "../components/homeRows";

const Home = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <>
      <div className="flex flex-col w-10/12 mx-auto mb-10">
        <img src="images/image4.jpg" className="" alt="bennerImage" />
      </div>

      <hr className="w-5/6 my-10 mx-auto border-green-500" />

      <div className="w-3/4 mx-auto">
        <h1 className="text-gray-500 text-center uppercase text-4xl mb-10">
          <span className="text-green-500">Welcome</span> Address by the{" "}
          <span className="text-amber-600">Rector</span>
        </h1>
        <div className="flex gap-5">
          <div
            className="w-2/4 p-12"
            ref={ref}
            style={
              inView
                ? {
                    opacity: 1,
                    transform: "translateX(0)",
                    transition: "all 0.9s ease-in-out",
                    transitionDelay: "0.3s",
                  }
                : {
                    opacity: 0,
                    transform: "translateX(-90%)",
                  }
            }
          >
            <img
              src="images/pic2.jpg"
              alt="picRector"
              className="border-4 border-amber-600 rounded-3xl shadow-lg shadow-black"
            />
          </div>
          <div className="flex w-2/4 p-6 border border-amber-600">
            <p className="flex text-xl leading-10 justify-center items-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
              eius aut fuga tenetur perferendis, eligendi, vero alias in, ipsa
              ad quaerat iusto animi dolorem distinctio maiores! Mollitia
              blanditiis ex illum. Vitae praesentium sit sunt, error, laboriosam
              tempore nisi sed aperiam consequuntur quaerat harum, velit
              deserunt distinctio at. Odio, ad. Sed, doloremque. Reiciendis
              ullam quae qui optio porro, deleniti illum et? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Voluptate cumque
              perspiciatis blanditiis velit praesentium quia quod, dicta cum.
            </p>
          </div>
        </div>
      </div>
      <HomeRows />
    </>
  );
};

export default Home;
