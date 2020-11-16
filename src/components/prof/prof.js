import React from "react";
import "./style.css";

export default class MyProf extends React.Component {
  render() {
    return (
      <div className="prof-block">
        <div className="main-block">
          <div className="main-user-data">
            <p>Игорь Белоконь</p>
            <p>21.07.1998</p>
            <p>Украина г.Днепр</p>
            <p>Web-developer(React.js)</p>
          </div>
          <div className="user-avatar"></div>
        </div>
        <div className="about-me">
          <h2>Programmer</h2>
          <p>
            Education: from 2017 - present Dnipro National University of Railway
            Transport named after academician V. Lazaryan
          </p>
          <p>
            Specialty: administrator of computer systems and networks from
            18.04.2019 till 20.08.2019 Training in сompany Ardas Group Inc.
          </p>
          <p>
            Specialty: course of JavaScript, Node JS, and React JS Skills:
            <br />• basic knowledge JavaScript, React JS, HTML5, CSS3; <br />•
            dynamic website creation; <br />• pure JavaScript development and
            using the framework React JS; <br />• scripting user interface
            binding, skills that provide visualization and animation of site
            pages; <br />• skills to provide the necessary level of user
            interface (UI - User Interface) and interaction experience (UX -
            User Experience); <br />• communication with customers
          </p>
          Personal qualities: Perseverance, achievement of goals,
          responsibility, punctuality, friendliness, easy to join the team. In
          my free time I like to read books..
          <p>
            Work experience: from october 2017 till october 2019 Company Allo as
            a seller
          </p>
          <p>Languages: English - reading professional literature </p>
          <p>My project: • https://github.com/AnSurt/reactKanban</p>
        </div>
      </div>
    );
  }
}
