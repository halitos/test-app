import React from "react";

const Card = ({ allCount }) =>
  allCount.map((item, index) => (
    <div className="card" key={index}>
      <p>
        <span style={{ fontWeight: "800", fontSize: 20, marginRight: 5 }}>
          {item}
        </span>{" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facilis
        odio eaque consequuntur rem architecto commodi autem nam? Sequi iste,
        itaque laudantium culpa magnam quo aliquam atque eveniet aperiam
        reprehenderit.
      </p>
    </div>
  ));

export default Card;
