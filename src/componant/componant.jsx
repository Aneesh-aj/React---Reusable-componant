import React from "react";
import './componant.css'

function ReuseComponant(props) {
    return (
        <div className="Componantdiv">
            {
                props.current.map((user, index) => (

                    <div className="detials" key={index}>
                        <div>
                            <h3>{user.name}</h3>
                            <h4>{user.email}</h4>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}


export default ReuseComponant

