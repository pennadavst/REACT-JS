import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
      <img src={url} alt="person" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="34" name="teja" job="developer"></Person>
      <Person img="22" name="sai" job="designer">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          officiis.
        </p>
      </Person>
      <Person img="75" name="pennada" job="tester"></Person>
    </section>
  );
};

ReactDom.render(<PersonList></PersonList>, document.getElementById("root"));
