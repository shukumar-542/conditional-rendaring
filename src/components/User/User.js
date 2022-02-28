import React from 'react';

const User = (props) => {
      const familier = props.familier;
      // console.log(familier);
      // let geratting;
      // if(familier){
      //       geratting =<p>Welcome to my frineds</p>

      // }
      // else{
      //       geratting=<p>Who the hell are you ?</p>

      // }
      const greatting = familier ? <p>Welcome to my frineds</p> : <p>Who the hell are you ?</p>;

      return (
            <div>
                 <div>
                 <h2>Greatting</h2>
                 {greatting}
                 </div>
                 <div>
                       <h2>Food</h2>
                       {
                        familier ? <p> I will Buy food for you ? </p> : <p>let's eat his his whose whose</p>
                            
                       }
                       
                 </div>
                 <div>
                       <h2>Connection</h2>
                       {
                             familier && <p> Let's join with us in facebook</p>
                       }
                       {/* <p>I don't add stronger </p> */}
                 </div>
            </div>
      );
};

export default User;