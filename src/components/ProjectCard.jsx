import { Col } from "react-bootstrap";

function ProjectCard({ title, description, imgUrl }) {
  return (
    <div className=" flex justify-center items-center ">
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </div>
      
      
  );
}
export default ProjectCard;
