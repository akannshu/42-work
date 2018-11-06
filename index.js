import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

 class Login extends React.Component{
   render(){
     return(
       <div>
          <header>
             <h1>HealthCare Insurance</h1>
          </header>
         <div className="login">
            <h2>Login</h2>
           <select id="selection">
             <option>Select Mode..</option>
             <option>Patient</option>
             <option>Hospital Admin</option>
             <option>Lab Admin</option>
             <option>Insurance Company</option>
          </select>
          <input type="email" placeholder="UserName"></input><br />
          <input type="password" placeholder="Password"></input><br />
          <button className="sub">Submit</button><br />
         </div>
       </div>
     );
   }
 }

ReactDOM.render(<Login />, document.getElementById('root'));
