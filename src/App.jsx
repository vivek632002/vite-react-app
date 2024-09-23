import CustomList from "./components/lists/list";
import { CustomOrderList } from "./components/lists/list";
import MainHeading from "./components/headings/heading.jsx";
import {SecondaryHeading} from "./components/headings/heading.jsx";
// import CustomButton from "./components/button/button.jsx"
import CustomImage from "./components/images/image.jsx";
import CustomButton from "./components/button/button.jsx";
import { recipeData } from "./data/recipedata.js";
const App = () =>{
  const imageList =[
    {
      name :"bag1",
      src:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      width:100,
      height:200
    },
    {
      name :"bag2",
      src:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      width:200,
      height:200
    }, {
      name :"bag3",
      src:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      width:200,
      height:200
    }
  ]
  return(
    <>
    {/* {
      imageList.map(eachImage=>{
        return <CustomImage source={eachImage.src} height ={eachImage.height} width ={eachImage.width} altnativeText ={eachImage.name}/>
      })
    }
    {/* <CustomImage source ="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alternateText ="bag" width ={100} height ={100}/>
    <CustomImage source ="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alternateText ="bag" width ={200} height ={200}/> 
   
   <CustomButton text="Login" onPress={()=>{}} bgcolor="green"/>
   <CustomButton text="Order" onPress={()=>{}} bgcolor="yellow"/>
   <CustomButton text="Signup" onPress={()=>{}}/>
   

   <MainHeading heading="List of fruits"></MainHeading>
   <CustomList List={["Watermelon","Kiwi"]}></CustomList>
   <MainHeading heading="List of cricketers"></MainHeading>
   <CustomList List={["Dhoni","Virat"]}></CustomList>
   <MainHeading heading="List of Vegetables"></MainHeading>
   <CustomList List={["Carrot","Potato"]}></CustomList> */}


{
  recipeData.map(eachrecipe=>{
    return(
      <div key={eachrecipe.id}>
        <MainHeading heading={eachrecipe.name}></MainHeading>
        <CustomImage source={eachrecipe.image} height={220}></CustomImage>
        <SecondaryHeading heading={"Ingredients Required"}></SecondaryHeading>
        <CustomList List={eachrecipe.ingredients}></CustomList>
        <SecondaryHeading heading={"Instructions Required"}></SecondaryHeading>
        <CustomList List={eachrecipe.instructions}></CustomList>



      </div>
    )
  })
}


    </>
  )
}

export default App




