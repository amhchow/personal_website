import React from "react";
import Pdf from '../amhchow.resume_W20.pdf';
 
class Homepage extends React.Component {
    constructor (props) {
        super(props);
        this.myAbout = React.createRef();
        this.myExperiences = React.createRef();
    }    
    render (){
        return(
                <div className="page">
                    <nav className="nav">
                    <div class="nav-left">
                    <a href="https://amhchow.github.io/personal_website/" class="navL">Anton Chow</a>
                        </div>
                    </nav>
                    <div class="nav-right">
                            <a href = "" class="navR1">Work</a>
                            <a href = {Pdf} class="navR2" target = "blank">Resume</a> 
                            <a href = "" class="navR3">About</a>
                    </div>
                <div className="title">
                    Hey! I'm Anton,
                    <p class="intro-text">
                        an aspiring product marketer based in <span>📍</span>Toronto. I'm focused on designing products for social good. 
                        Feel free to contact me! 
                    </p>
                    <p class="internship">
                    Currently looking for a spring 2020 PMM internship!
                    </p>
                </div>
                </div>
        )
    }
}     
 
export default Homepage;