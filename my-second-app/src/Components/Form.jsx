
// lets see how we can use useref fuction in react by which over data wll not refreash
// lets see =>

    import React, { useRef } from 'react'

    const Form = () => {
     const name = useRef(null);
    const  email = useRef(null);
    
    const handleSubmit =(() =>{
        event.preventDefault();
        console.log(name.current.value,email.current.value);
        
    })
    
      return (
        <>
            <form onSubmit={handleSubmit}>
                <input ref={name} type="text" placeholder='name'/>
                <input  ref={email} type="email" placeholder='email'/>
                <input type="submit" />
            </form>
            </>
      )
    }
    
    export default Form;