import React, {useEffect} from 'react';
import axios from 'axios'


const LendingDash = ()=> {
    
 useEffect(() => {
    
       axios.post('https://sandbox.galileo-ft.com/instant/v1/login',{ username:"RLfPLRtyD8cK",
       password:"Y2AQ0hEh307UzG6RxWLa" })
        .then(response => {
            console.log(response);
        }).catch(err => { console.log(err) })
    });


    return (
        <div>
            <header>Ether Lending</header>
            <body>
                <div>
                    <button>Lending</button>
                </div>
            </body>
        </div>
    )
};

export default LendingDash;