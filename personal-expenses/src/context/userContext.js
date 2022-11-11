import { createContext, useState, useRef } from "react";

const userContext = createContext();

export const UserProvider = ({children}) => {
    const [uName, setUName] = useState();
    const nameRef = useRef();

    const [uEmail, setUEmail] = useState();
    const emailRef = useRef();

    const [uPassword, setUPassword] = useState();
    const passRef = useRef(); 

    const handleUserName = (e) => {
        e.preventDefault();
        setUName(nameRef.current.value);
        console.log(nameRef.current.value);
    }

    const handleEmail = (e) => {
        e.preventDefault();
        setUEmail(emailRef.current.value);
        console.log(emailRef.current.value);
    }

    const handlePassword = (e) => {
        e.preventDefault();
        setUPassword(passRef.current.value);
        console.log(passRef.current.value);
    }

    return <userContext.Provider value = {{
            uName, nameRef, handleUserName,
            uEmail, emailRef, handleEmail,
            uPassword, passRef, handlePassword
        }}>
        {children}
    </userContext.Provider>
}

export default userContext