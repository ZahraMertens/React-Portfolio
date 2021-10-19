import React from "react";

export default function ProjectCard(props) {

  const renderCards = (card) => {
    return (
      <div className="col-6 card" key={card.id}>
        <div className="project-card">
          <img
            src={card.image}
            className="card-img-top card-img-projects"
            alt="Project"
          />
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.describtion}</p>
            <a href={card.GitUrl} className="btn btn-warning btn-project">
              GitHub Repository
            </a>
            <a href={card.AppUrl} className="btn btn-warning btn-project">
              Deployed Application
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="row justify-content-center">
        {props.cardContent.map(renderCards)} 
    </div>
  )
}