import CustomList from "./components/lists/list";
// import { CustomOrderList } from "./components/lists/list";
import MainHeading from "./components/headings/heading.jsx";
import {SecondaryHeading} from "./components/headings/heading.jsx";
// import CustomButton from "./components/button/button.jsx"
import CustomImage from "./components/images/image.jsx";
// import CustomButton from "./components/button/button.jsx";
import { recipeData } from "./data/recipedata.js";
import Greeting from "./components/greetings/greeting.jsx";
import CustomButton from "./components/button/button.jsx";
import LoginComponent from "./components/loginprop/login.jsx";
const App = () =>{
  const type = "GUEST"
  // return(
{/* <> */}
  {/* <LoginComponent isAdmin={false} />
  <LoginComponent isAdmin={true} />
  <LoginComponent isAdmin={true} />
  <LoginComponent isAdmin={null} /> */}

  switch (type) {
    case "ADMIN":
      return <LoginComponent text ="Admin"/>
      case "USER":
      return <LoginComponent text ="User"/>
      case "GUEST":
      return <LoginComponent text ="Guest"/>
  
    default:
      return <LoginComponent/>

  }
 
  
}

export default App




