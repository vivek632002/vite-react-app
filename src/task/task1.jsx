import axios from "axios";
import { Component } from "react";
import CustomImage from "../components/images/image";
import { baseURL_PROD } from "../url/app-url";

class FetchProducts extends Component{


    state={
        products:[],
        categories:[]

    }


    componentDidMount(){

        this.fetchProducts()
        this.fetchCategories()

    }

    fetchProducts=async()=>{
        const {data,status} = await axios.get(`${baseURL_PROD}/products`)
        console.log(data);

        if(status===200){
            this.setState({
                products:data
            })
        }

    }


    fetchCategories=async()=>{
        const {data,status} = await axios.get(`${baseURL_PROD}/products/categories`)
        console.log(data);
        

        if(status===200){
            this.setState({
                categories:[...data,"all"]
            })
        }

    }


    categorySelectorHandler=(selectedCategory)=>{
        // console.log(selectedCategory);

        if(selectedCategory=="all"){
            this.fetchProducts()
        }else
        this.fetchCategoryProducts(selectedCategory)
        
    }

    fetchCategoryProducts=async(selected)=>{
        const {data,status} = await axios.get(`${baseURL_PROD}/products/category/${selected}`)

        if(status===200){
            this.setState({
                products:data
            })
        }
    }

    render(){
        return(
            <>
            {
                this.state.categories.length>0 && <>
                {
                    this.state.categories.map(each=>{
                        return(
                            <button onClick={()=>this.categorySelectorHandler(each)}>{each}</button>
                        )
                    })
                }
                </>
            }


            {
               this.state.products.length>0 && <>
               {
                this.state.products.map(each=>{
                    return(
                       <>
                       <h3>{each.title}</h3>
                       <h5>{each.description}</h5>
                        <CustomImage source={each.image} height={200} width={200}/>
                       </> 
                    )
                })
               }
               </>
            }
            </>
        )
    }
}

export default FetchProducts