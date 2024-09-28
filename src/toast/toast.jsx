
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CustomToast=({message})=>{
    const notify=()=>{
        // toast(message);
        toast.success(message, {
            position: "top-center"
          });
    
    
    }
    return(
        <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    )
}

export default CustomToast