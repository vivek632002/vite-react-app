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
import CardAddition from "./components/cardAdd/card-add.jsx";
import FetchProducts from "./task/task1.jsx";
import Mounting from "./lifeCycle/mounting.jsx";
import ParentComponent from "./components/purecomponent/parent.jsx";
import Counter1 from "./hooks/useState/counter.jsx";
import CustomTodo from "./hooks/useState/todo.jsx";


const App = () =>{
  return(
    <div>
      <CustomTodo/>
      {/* <Counter1/> */}
      {/* <ParentComponent/> */}
      {/* <Mounting color="red"/> */}
      {/* <FetchProducts/> */}
    </div>
  )
    

}

export default App




