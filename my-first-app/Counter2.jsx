
import { useEffect, useState } from "react"

export default function Counter2(){

    const [Count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    function Increment(){
        setCount(Count + 1);
    }

    function Decrement(){
        setCount(Count - 1);
    }

    function Reset(){
        setCount(0);
    }

    //  2 Count
    function IncrementNumber(){
        setNumber(number + 1);
    }

    function DecrementNumber(){
        setNumber(number- 1);
    }

    function ResetNumber(){
        setNumber(0);
    }

    useEffect(()=> {
        console.log("this is a side effect!");
    }, [Count])

    return(
        <>
        <h1>Counter App</h1>
         <h2>Count:- {Count}</h2>
         <button onClick={Increment}>Increment</button>
                 &nbsp; &nbsp; &nbsp;
         <button onClick={Decrement}>Decrement</button>
                     <br />
         <button onClick={Reset}>Reset</button>


         <hr />

        <h1>Counter App</h1>
         <h2>Count:- {number}</h2>
         <button onClick={IncrementNumber}>Increment</button>
                 &nbsp; &nbsp; &nbsp;
         <button onClick={DecrementNumber}>Decrement</button>
                     <br />
         <button onClick={ResetNumber}>Reset</button>
        </>
    )
}

