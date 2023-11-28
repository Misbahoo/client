import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Portal from "../pages/portal";
import ELibrary from "../pages/elibrary";
import Registry from "../pages/registry";
import Academic from "../pages/academic";
import Examination from "../pages/examination";
import About from "../pages/about";
import ElibraryDefault from "../pages/elibraryDefault";
import CatOne from "../pages/catOne";
import CatTwo from "../pages/catTwo";
import CatThree from "../pages/catThree";
import CatFour from "../pages/catFour";
import CatFive from "../pages/catFive";
import Register from "../pages/register";

const Pages = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="portal" element={<Portal />} />
    <Route path="register" element={<Register />} />
    <Route path="elibrary" element={<ELibrary />}>
      <Route index element={<ElibraryDefault />} />
      <Route path="catOne" element={<CatOne />} />
      <Route path="catTwo" element={<CatTwo />} />
      <Route path="catThree" element={<CatThree />} />
      <Route path="catFour" element={<CatFour />} />
      <Route path="catFive" element={<CatFive />} />
    </Route>
    <Route path="registry" element={<Registry />} />
    <Route path="academic" element={<Academic />} />
    <Route path="examination" element={<Examination />} />
    <Route path="about" element={<About />} />

    {/* <Route path="infra" element={<Infra />} />
    <Route path="outreach" element={<Outreach />} />
    <Route path="aboutUs" element={<AboutUs />} />
    <Route path="gallary" element={<Gallary />}>
      <Route index element={<DefaultGallaryPics />} />
      <Route path="searchedGallaryPics" element={<SearchedGallaryPics />} />
    </Route>
    <Route path="progressOfWork" element={<ProgressOfWork />} /> */}
    <Route path="*" element={<h1>Page is not found</h1>} />
  </Routes>
);

export default Pages;
