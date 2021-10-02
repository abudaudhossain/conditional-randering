import React from 'react';

const Users = (props) => {
    const {familier} = props;
    let element;
    if (familier){
         element = <h2>O Yes , You are my awesome Frineds</h2>
    }else{
         element = <h2>So Sorry , I have no time for you</h2>
    }
    return (
        <div>
           <div>
               <h1>Greetings</h1>
                {
                    element                    
                }
           </div>
           <div>
               <h1>Food</h1>
               {
                   familier ? <h2>ami tore khaci khaomu</h2>:<h2>tui keta re bal</h2>
               }
           </div>
           <div>
               <h1>Lot of Things</h1>
               {familier ? <div>
                   <h3>You are my bestu</h3>
                   <p>ami tore anek valobasi</p>
               </div>:<div>
                   <h4>You can not love me</h4>
                   <p>Your are chitare of me</p>
               </div>}
           </div>
           <div>
               <h1>Share Dringk</h1>
           </div>
        </div>
    );
};

export default Users;