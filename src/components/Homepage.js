import React from "react";

class Homepage extends React.Component {
    constructor (props) {
        super(props);
        this.myAbout = React.createRef();
        this.myExperiences = React.createRef();
    }    
    render (){
        return(
            <div className="page">
               <div className="title">
                   Hey! I'm Anton,
                   <p class="intro-text">
                       an aspiring UI/UX designer based in 📍Toronto.
                   </p>
                <div className="btn-group">
                     <button onClick={this.props.scrollToAbout}>About</button>
                     <button onClick={this.props.scrollToExperiences}>Experience</button>
                </div>
               </div>
            </div>
        )
    }
}     
class nav extends
export default Homepage;