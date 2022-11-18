import ToolDetail from "./components/toolDetail";

import {useParams} from "react-router-dom";

import NavBar from "../../components/navBar";
import Footer from "../../components/footer";

import { toolkitData } from "../../data/data";
import ScrollButton from '../../components/scrollBtn';

function ToolDetailPage() {
  const { id } = useParams();
  
  return (
    <div>
      <NavBar />
      <ToolDetail data={toolkitData[id-1]}/>
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default ToolDetailPage;
