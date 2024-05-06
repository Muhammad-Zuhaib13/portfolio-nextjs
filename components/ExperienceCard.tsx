import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Col, CardImg } from "reactstrap";
import Fade from "react-reveal/Fade";
import { ExperienceType } from "../types/sections";

const ExperienceCard = ({ companyLogo, company, role, date, desc, descBullets }: ExperienceType) => {
  return (
    <Col lg="6">
      <Card style={{ flex: 1 }} className="shadow-lg--hover my-4 shadow border-0 text-center rounded h-100">
        <CardBody className="">
          <div
            style={{
              width: "8rem",
              height: "8rem",
              backgroundColor: "transparent",
              borderRadius: "50%",
              position: "relative",
              overflow: "hidden",
              margin: "0 auto 1.6rem",
              boxShadow:'rgb(38, 57, 77) 0px 20px 30px -10px',
            }}
          >
            <img
              src={companyLogo}
              style={{ width: "60%", height: "60%", position: "absolute", top: "20%", left: "20%" }}
              alt={companyLogo}
            />
          </div>

          <CardTitle tag="h4" className="mb-2">
            {company}
          </CardTitle>
          <CardSubtitle tag="h5" className="mb-2">
            {role}
          </CardSubtitle>
          <CardSubtitle>{date}</CardSubtitle>
          <CardText tag="div" className="description my-3 text-left">
            {desc}
            <ul>
              {descBullets
                ? descBullets.map(desc => {
                    return <li key={desc}>{desc}</li>;
                  })
                : null}
            </ul>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ExperienceCard;
