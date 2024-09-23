

const CustomImage = (props) =>{
    console.log(props)
   
    const{source,width=200,alternateText,height} = props
    return(
        
    
       <img src = {source} height={height} width={width} alt = {alternateText}></img>
        
    )
}
export default CustomImage