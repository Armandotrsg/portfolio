import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, img, url, date }) => {
    if (typeof url !== 'undefined') {
        return (
            <Col sm={6} md={4}>
                <div className="proj-imgbx">
                    <img src={img} alt={title} className="projectCard-Img" width={519} height={380} />
                    <a href={url} target="_blank" rel="noreferrer">
                        <div className="proj-txtx">
                            <h4>{title}</h4>
                            <span>{description}<br />{date}</span>
                        </div>
                    </a>
                </div>
            </Col>
        );
    } else {
        return (
            <Col sm={6} md={4}>
                <div className="proj-imgbx">
                    <img src={img} alt={title} className="projectCard-Img" width={519} height={380} />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}<br />{date}</span>
                    </div>
                </div>
            </Col>
        );
    }
};
