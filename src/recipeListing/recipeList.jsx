import { Component } from "react";
import CustomDNALoader from "../loader/loader";
import CustomList from "../components/lists/list";
import { SecondaryHeading } from "../components/headings/heading";
import axios from "axios";




class RecipeList extends Component{

    state={
        recipes:[],
        loading:true,
        error:false
    }


    componentDidMount(){
        console.log("i am executed")
        //I can call server to fetch data 
        this.fetchData()

    }

    fetchData=async()=>{
        const {status,data}=await axios.get("https://dummyjson.com/recipes")

        if(status===200){
            this.setState({
                recipes:data.recipes,
                loading:false
            })
        }

        }

    // fetchData=async()=>{
    //     try{
    //     const data = await fetch("https://dummyjson.com/recipes")
    //     const {recipes}=await data.json()

    //     this.setState({
    //        recipes:recipes,
    //        loading:false
    //     })
    // }catch(err){
    //     console.error(err)
    //     this.setState({
    //         error:true
    //     })

    // }
        
       
        
    //     }
        

    render(){
        return(
            <>
            <h2>Recipe listing</h2>
            {
                this.state.loading ? <CustomDNALoader/> : <>
                <h2>Recipes...</h2>
                {
                    this.state.recipes.map(eachRecipe=>{
                        return(
                            <div  key={eachRecipe.id}  >
                                <h3>{eachRecipe.name}</h3>
                                <img  src={eachRecipe.image}  height={100} width={100} alt={eachRecipe.name} />
                                <SecondaryHeading  heading={`Ingredients for ${eachRecipe.name}`}   />
                                <CustomList List={eachRecipe.ingredients}  />
                                <SecondaryHeading  heading={`Instructions for ${eachRecipe.name}`}   />
                                <CustomList List={eachRecipe.instructions}  />

                            </div>
                        )
                    })
                }
                
                </>

            }
            </>
        )
    }
}

export default RecipeList