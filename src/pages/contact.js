import React from "react"
class Contact extends React.Component{
    render(){
        const myStyle={
            backgroundImage: 
            "url('/images/3.png')",
                    height:'100vh',
                    marginTop:'-70px',
                    fontSize:'50px',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
        };
        return(
            <div style={myStyle}>
                <h1></h1>
            </div> 
        )
    }
}
export default Contact;