import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./page/gallery";
import Aboutus from "./page/aboutus";
import Contact from "./page/contact";
import Home from "./page/home";
import NoPage from "./page/nopage";
import Layout from "./page/layout";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="Gallery" element={<Gallery/>}/>
        <Route path="Aboutus" element={<Aboutus/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
