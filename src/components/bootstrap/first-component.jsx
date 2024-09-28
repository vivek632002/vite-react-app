
import CustomRectangleCard from "./custom-card"


const FirstComponent=()=>{
        return(
            <>
  <div className="container-fluid p-5 bg-primary text-white text-center">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p>
  </div>
  <div className="container mt-5">
    <div className="row">
      <div className="col-sm-4">
            <CustomRectangleCard title={"Jhon"} text={"React Developer"}/>
      </div>
      <div className="col-sm-4">
      <CustomRectangleCard title={"Virat"} text={"React Developer"}/>
      </div>
      <div className="col-sm-4">
      <CustomRectangleCard title={"Manoj"} text={"Devops Engineer"}/>
      </div>
    </div>
  </div>
</>

        )
}

export default FirstComponent