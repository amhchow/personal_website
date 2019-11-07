import React from "react";
import Pdf from '../Documents/anton_chow_resume.pdf'

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
                        <a href = "google.com" class="navR1">Work</a>
                        <a href = "google.com" class="navR2">Play</a>
                        <a href = "files\anton_chow_resume.pdf" class="navR3">Resume</a> 
                        <a href f= "google.com" class="navR4">About</a>
                </div>
               <div className="title">
                   Hey! I'm Anton,
                   <p class="intro-text">
                       an aspiring UI/UX designer based in <span>📍</span>Toronto. I'm focused on designing for social good. 
                       Feel free to contact me 
                   </p>
                   <p class="internship">
                   Currently looking for a spring 2020 design internship.
                   </p>
               </div>
            </div>
        )
    }
}     

export default Homepage;