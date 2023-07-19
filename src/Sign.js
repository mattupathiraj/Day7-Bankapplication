import React from 'react'
import './Sign.css';
import { Link } from 'react-router-dom';

function Sign() {
  return (
      <div className='box1'>
  
      <div class="box">
        <div class="inner-box">
          <div class="forms-wrap">
            <form action="index.html" autocomplete="off" class="sign-in-form">
              <div class="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Vdd-VpHyFzhAmYv2wT5E7V-Ki_O_ejwZFg&usqp=CAU" alt="easyclass" />
                <h4>Register here!</h4>
              </div>

              <div class="heading">
                <h2>Welcome</h2>
               
                <br></br>
                
                
              </div>

              <div class="actual-form">
                <div class="input-wrap">
                  <input
                    type="text"
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    placeholder='Name'
                    required
                  />
                  
                </div>

                <div class="input-wrap"> 
                  <input
                    type="password"
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    placeholder="Password"
                    required
                  />
                  
                </div>
                <div class="input-wrap"> 
                  <input
                    type="email"
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    placeholder='Email'
                    required
                  />
                  
                </div>
              
                    
               

                
                <br>
                </br>
              <Link to="/">  <input type="submit" value="Login" class="sign-btn" /></Link>
            
              </div>
            </form>

            
          </div>

          <div class="carousel">
        
            <img className="wall" style={{height:"500px"}}src="https://img.freepik.com/free-vector/bank-reception-area-cartoon-vector_33099-1304.jpg?w=2000"></img>

           
          </div>
        </div>
      </div>  
   

 
    </div>
    
  )
}

export default Sign