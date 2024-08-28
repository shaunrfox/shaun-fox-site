import Rule from "../components/Rule";

export default function ServicesRoute() {
  return (
    <div className="services-container">
      <div className="service">
        <div className="service-header">
          <h2>Users</h2>
          <ul>
            <li>User research + validation</li>
            <li>
              <span>Develop personas</span> + <span>goal mapping</span>
            </li>
            <li>Opportunity Discovery</li>
            <li>Identify usability problems</li>
          </ul>
        </div>
        <p>
          All of my work is aimed at making the users I serve happier and more
          productive, whether they’re a customer, a teammate, or a stakeholder.
          Every decision is rooted in understanding who my users are and what
          they need. There are many methods to gain this understanding, but one
          of the best ways is to invite users into the process to both generate
          and validate ideas.
        </p>
      </div>
      <Rule />
      <div className="service">
        <div className="service-header">
          <h2>Design</h2>
          <ul>
            <li>Product design (UI/UX)</li>
            <li>Visual design</li>
            <li>Design Systems</li>
            <li>Prototyping + testing</li>
          </ul>
        </div>
        <p>
          Delivering good design is my bread and butter, but pixel perfection is
          just the cherry on top. Along with solving the problem at hand, design
          work should always consider the surrounding context – things like
          relevant history or related research, development constraints,
          usability standards, potential business impact, and the anticipated
          effect on the users.
        </p>
      </div>
      <Rule />
      <div className="service">
        <div className="service-header">
          <h2>Implementation</h2>
          <ul>
            <li>Front-end development</li>
            <li>
              <span>Design Systems</span> + <span>Style Guides</span>
            </li>
            <li>Component libraries</li>
            <li>UX writing</li>
          </ul>
        </div>
        <p>
          I have a passion for building things that are both beautiful and
          functional. I love working with developers to ensure that the designs
          I create are not only beautiful, but also functional and easy to use.
        </p>
      </div>
      <Rule />
      <div className="service">
        <div className="service-header">
          <h2>Operations</h2>
          <ul>
            <li>Operational analysis</li>
            <li>Team processes + tools</li>
            <li>Customer-centric processes</li>
            <li>Training + Workshops</li>
            <li>Design + build internal tools</li>
          </ul>
        </div>
        <p>
          Dolore duis amet deserunt sint excepteur proident ipsum magna aliquip
          deserunt nostrud irure dolore. Fugiat qui mollit sit quis veniam anim
          adipisicing aliqua elit. Commodo et dolore et. Eu sint officia aute
          fugiat Lorem eu ex minim non consequat aliqua quis velit excepteur.
        </p>
      </div>
      <Rule />
      <div className="service">
        <div className="service-header">
          <h2>Strategy</h2>
          <ul>
            <li>
              <span>Product strategy</span> + <span>value alignment</span>
            </li>
            <li>Strategic planning</li>
            <li>Product performance measurement</li>
          </ul>
        </div>
        <p>
          Dolore duis amet deserunt sint excepteur proident ipsum magna aliquip
          deserunt nostrud irure dolore. Fugiat qui mollit sit quis veniam anim
          adipisicing aliqua elit. Commodo et dolore et. Eu sint officia aute
          fugiat Lorem eu ex minim non consequat aliqua quis velit excepteur.
        </p>
      </div>
    </div>
  );
}
