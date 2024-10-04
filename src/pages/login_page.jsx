import { Box, Button, Center, Heading, Input, Link } from "@chakra-ui/react";
import { linearGradient } from "framer-motion/client";
import { useState } from "react";
import ToggleDarkMode from "../components/toggleDarkMode";


function Login_page(){
    const [accountExists, setAccountExists] = useState(false)
    const [password, setPassoword] = useState('')
    const [email, setEmail] = useState('')
    

    

    const toggleLoggedin = () => {
        setisLoggedIn(!isLoggedIn)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassoword(e.target.value)
    }

    const handleClick = () => {
        console.log("hello");
    }

    const handleSubmit= () => {
        console.log("email: ", email, "\n", "password: ", password);
    }

    return(<>
    <Box w="100vw" h= "100vh" display="flex" justifyContent="center" alignItems="center" backgroundImage="linear-gradient(to bottom right, white 50%, #748AED 30%, #A08CED 90%)">
    <Box position="absolute" top={4} right={4}>
    <ToggleDarkMode />
    </Box>
    
    <Box w = "350px" bg="white" display="flex" flexDir="column" justifyContent="center" alignItems="center" boxShadow="0 0 15px rgba(0, 0, 0, 0.4)" borderRadius={10}>
            <Heading mb={8} mt={12}>Login</Heading>
            <Input placeholder="Email address" value= {email} onChange={handleEmail} mb={5} w={250} boxShadow="0 0 5px rgba(0, 0, 0, 0.4)"></Input>
            <Input placeholder="Password" value= {password} onChange={handlePassword} type="password" mb={9} w={250} boxShadow="0 0 5px rgba(0, 0, 0, 0.4)"></Input>
            <Button w={120} mb={28} borderRadius={50} bg= "#B58DED" color="white" boxShadow="0 0 10px rgb(181, 141, 237)" onClick={handleSubmit}>LOGIN</Button>
            <Link mb={4} color="blue" onClick={handleClick}>Sign Up</Link>

        </Box>
    </Box>
        
        
    </>)
}

export default Login_page;