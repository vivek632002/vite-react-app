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
// import style from "./components/greetings/greeting.7module.css";
import CustomRectangleCard from "./components/bootstrap/custom-card.jsx";
import {employeDetails} from "./data/employeedata.js"
import FirstComponent from "./components/bootstrap/first-component.jsx";
import YoutubeButton from "./class/youtube-button.jsx";
import RecipeList from "./recipeListing/recipeList.jsx";

const App = () =>{
  // const type = "GUEST"
  // return(
// {/* <> */}
  {/* <LoginComponent isAdmin={false} />
  <LoginComponent isAdmin={true} />
  <LoginComponent isAdmin={true} />
  <LoginComponent isAdmin={null} /> */}

  // switch (type) {
  //   case "ADMIN":
  //     return <LoginComponent text ="Admin"/>
  //     case "USER":
  //     return <LoginComponent text ="User"/>
  //     case "GUEST":
  //     return <LoginComponent text ="Guest"/>
  
  //   default:
  //     return <LoginComponent/>

  // }
    // return(
  // <CustomButton/>
  // <div>
  //   {
  //     employeDetails.map(each=>{
  //       return(
  //         <>
  //            <CustomRectangleCard  title={each.name} text={each.designation}/>

  //         </>
  //       )
  //     })
  //   }

  {/* <Greeting/>

  <div className={style.card}>
    <h5>Hello</h5>
  </div> */}
  // </div>


    // )

    return(
      <>
      <RecipeList/>
      {/* <YoutubeButton/> */}
      {/* <FirstComponent/> */}
      </>
    )
  
}

export default App




