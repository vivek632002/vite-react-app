import CustomList from "./components/lists/list";
import { CustomOrderList } from "./components/lists/list";
import MainHeading from "./components/headings/heading.jsx";
import {SecondaryHeading} from "./components/headings/heading.jsx";
import CustomImage from "./components/images/image.jsx";
const App = () =>{
  return(
    <>

    <h4>Version1</h4>
    <CustomList></CustomList>
    <CustomOrderList/>
    <MainHeading/>
    <SecondaryHeading/>
    <CustomImage/>
    <CustomImage/>
    <CustomImage/>
    </>
  )
}

export default App




