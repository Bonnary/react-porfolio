import React from "react";
import Card from "./Card";
import HightSchool from "./image/Hight_School.png";
import University from "./image/University.png";
import Job from "./image/Job.png";

export default function Education() {
  return (
    <section id="Education">
      <div className="container-fluid">
        <div className="grid-container">
          <div className="grid-item item1">
            <Card
              image={HightSchool}
              title="Education"
              description="Graduate at Kombol
        High School "
            />
          </div>{" "}
          <div className="grid-item item2"> </div>{" "}
          <div className="grid-item item3"> </div>{" "}
          <div className="grid-item item4">
            <Card
              image={University}
              title="Education"
              description="2nd year at 
        Western University "
            />
          </div>{" "}
          <div className="grid-item item5">
            <Card
              image={Job}
              title="Experian"
              description="Worked as  a kindergarten
        teacher at CIS School "
            />
          </div>{" "}
          <div className="grid-item item6"> </div>{" "}
        </div>{" "}
        {/* <div className="row">
                                  <div className="col-sm-1">1</div>
                                  <div className="col-sm-1">1</div>
                                  <div className="col-sm-1">1</div>
                                  <div className="col-sm-1">1</div>
                                  <div className="col-sm-1">1</div>
                                  <div className="col-sm-1">1</div>
                                  <div className="col-sm-1">1</div>
                                  <div className="col-sm-1">1</div>
                                  <div className="col-sm-1">1</div>
                                  <div className="col-sm-1">1</div>
                                  <div className="col-sm-1">1</div>
                                  <div className="col-sm-1">1</div>
                                   <div className="col-sm-6 flex-column d-flex justify-content-center text-center">
                                    <Card image={HightSchool} title="Education" description="" />
                                    <Card image={HightSchool} title="Education" description="" />
                                  </div>
                                  <div className="col-sm-6 flex-column d-flex justify-content-center text-center">
                                    <Card image={HightSchool} title="Education" description="" />
                                    <Card image={HightSchool} title="Education" description="" />
                                  </div> 
                                </div> */}{" "}
      </div>{" "}
    </section>
  );
}
