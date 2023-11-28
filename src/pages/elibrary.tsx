import { Link, Outlet } from "react-router-dom";

const ELibrary = () => {
  return (
    <>
      <div className="flex">
        <Outlet />
        {/* <div className="w-9/12">
          <div className="p-5 bg-libraryBannerImage bg-cover">
            <div className="p-5 bg-gray-200/70 m-5 w-2/4 rounded-lg">
              <h1 className="text-5xl text-gray-500">E-Library</h1>
              <p className="p-5 text-xl leading-10 font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente adipisci, nulla magnam corrupti, ipsam aliquam non,
                accusamus ea quam ducimus eum at! Quasi vel excepturi commodi
                maiores aliquid, illo enim!
              </p>

              <div className="flex gap-2">
                <button className="btn w-1/4 bg-green-500">button</button>
                <button className="btn w-1/4 bg-green-500">button 2</button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="images/bookForLibrary.jpg" alt="" />
            </div>
          </div>
        </div> */}
        <div className="w-3/12 ml-2">
          <div className="p-5 border m-5">
            <h2 className="text-2xl text-green-400 mb-5">Category</h2>
            <ul className="flex flex-col gap-1">
              <li>
                <Link to="catOne">Cat One</Link>
              </li>
              <li>
                <Link to="catTwo">Cat Two</Link>
              </li>
              <li>
                <Link to="catThree">Cat Three</Link>
              </li>
              <li>
                <Link to="catFour">Cat Four</Link>
              </li>
              <li>
                <Link to="catFive">Cat Five</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ELibrary;
