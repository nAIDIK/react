import { useState } from "react"

export default function Counter(){

    const [Count, setCount] = useState(0);

    function Increment(){
        setCount(Count + 1);
    }

    function Decrement(){
        setCount(Count - 1);
    }

    function Reset(){
        setCount(0);
    }

    return(
        <>
        <h1>Counter App</h1>
         <h2>Count:- {Count}</h2>
         <button onClick={Increment}>Increment</button>
                 &nbsp; &nbsp; &nbsp;
         <button onClick={Decrement}>Decrement</button>
                     <br />
         <button onClick={Reset}>Reset</button>
        </>
    )
}

  /* &nbsp; is basiclly use for space it is the code form in react */