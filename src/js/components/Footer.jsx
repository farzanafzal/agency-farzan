import React from "react";

const Footer =()=>{
 
    return(
        <div className="pt-5">
              <div className="container-fluid pt-5" id="cog">
                  <div className="pt-5">
             <div className="container text-center">
                 <div className="row pb-5">
                     <div className="col-lg-6">
                     <h3> <i className="fa fa-paper-plane mm" />SIGN UP FOR APOINTMENT </h3>
                     </div>
                     <div className="col-lg-6">
                         
                     <div className="input-group mb-3 ">
        <input type="text" className="form-control bbd" placeholder= "Email" />
        <div className="input-group-append">
          <button className="btn btn-dark bbd" type="button">Button</button>
        </div>
      </div>
      </div>
                     </div>
                 </div>

             </div>
        </div>
        </div>
        
    )

}
export default Footer;
