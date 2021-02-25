import React from "react";
import '../../styles/Showcase.css';

const Showcase = () => {

  return(
    <section id="showcase-inner" className="py-5 text-black">
        <div className="container">
            <div className="row text-center">
                <div className="col-md-12">
                    <h1 className="display-4">Managing <span style={{color:"#e7e7e7"}}>Blogs</span> Has Never Been So Easy</h1>
                    <p className="lead">Subscribe, manage and follow your favourite blogs in one place!  </p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Showcase;
