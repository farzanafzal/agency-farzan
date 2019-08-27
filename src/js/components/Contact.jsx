import React from "react";

const Contact =()=>{
 
    return(
        <div>
      
          <h1 className="text-center">CONTACT US</h1>
          <div className="container">
              <div className="row">
                  <div className="col-6">
                      <div className="pt-5">
                  <i class=" h fa fa-map-marker" /><br></br>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nulla!
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iusto harum, earum nemo tempore voluptate?
                  </p>
                  <i class=" h fa fa-envelope" /><br></br>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, natus.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, adipisci optio. Natus id possimus itaque?
                  </p>
                  <i class=" h fa fa-phone" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, enim.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, fugit! Illo culpa ratione quidem facere.
                  </p>
                  </div>

                  </div>
                  <div className="col-6">
                      <div className="pt-5">
                      <label htmlFor="name">NAME:</label>
                      <input type="text" placeholder="YOUR NAME" className="form-control"/>
                      <label htmlFor="name">E-MAIL:</label>
                      <input type="text" placeholder="YOUR E-MAIL" className="form-control"/>
                      <label htmlFor="name">NUMBER:</label>
                      <input type="numeric" placeholder="YOUR NUMBER" className="form-control"/>
                      <label htmlFor="name">PASSWORD:</label>
                      <input type="password" placeholder="PASSWORD" className="form-control"/>
                      <label htmlFor="name">MESSAGE:</label>
                      <textarea type="text" placeholder="MESSAGE" className="form-control" />
                      <div className="pt-3">
                      <button className="btn btn-dark text-center">SUBMIT</button>
                      </div>
                      </div>
                  </div>

              </div>
          </div>
     
          </div>
     
    )

}
export default Contact
