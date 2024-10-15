import withCounter from "../Hoc/withCounter";
import withProfile from "../Hoc/withProfile"
import UseEffectExample from "../hooks/useEffect/useEffectEX"


const HomeScreen =({count,incrementCount})=>{
    // console.log(profile.firstName);
    
    return(
        <>
        <h2>{count}</h2>
        <button onMouseOver={incrementCount}>Increment Count</button>
        {/* <h2>Welcome To Home Screen {profile.firstName}</h2> */}




        <UseEffectExample/>
        </>
    )
}

export default React.memo(withCounter(HomeScreen)) 