import {useParams} from "react-router-dom";

import NavBar from "../../components/navBar";
import Footer from "../../components/footer";
import ScrollButton from '../../components/scrollBtn';

import { comboData } from "../../data/data";

import ComboDetail from "./components/comboDetail";

function ComboDetailPage() {
  const { id } = useParams();
  
  return (
    <div>
      <NavBar />
      <ComboDetail data={comboData[id-1]}/>
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default ComboDetailPage;
