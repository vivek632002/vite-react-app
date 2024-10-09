
import{ Route, Routes} from "react-router-dom"
import HomeScreen from "../screens/home-screen"
import AboutScreen from "../screens/about-screen"
import NavBar from "../components/navbar/navbar"
import InvalidScreen from "../screens/invalid-screen"
import CategoryScreen from "../screens/category-screen"
import JewelleryScreen from "../screens/jewellery-screen"
import ElectronicsScreen from "../screens/elctronics-screen"
import ProductScreen from "../screens/products-screen"
import ProductDetailScreen from "../screens/product-detailed-screen"

const NavigationStack=()=>{

    return(


        <>
        <NavBar/>

        {
            true ?

            <Routes>
            <Route path="/" element={<HomeScreen/>}  />
            <Route path="about" element={<AboutScreen/>}  />
            <Route path="*" element={<InvalidScreen/>}  />
            <Route path="category" element={<CategoryScreen/>}>
            <Route index element={<ElectronicsScreen/>}/>

             <Route path="jewellery" element={<JewelleryScreen/>} />
            <Route path="electronics" element={<ElectronicsScreen/>} /> 
            </Route>

            <Route path="products" element={<ProductScreen/>}/>
            <Route path="products/:productId" element={<ProductDetailScreen/>}/>

           

        </Routes>
        
        :
        <Routes>
            <Route path="/login" element={<HomeScreen/>}  />
    

        </Routes>


        }
        
        </>
   
       


    )
}
export default NavigationStack

