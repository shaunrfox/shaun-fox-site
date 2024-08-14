import { type MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "shaunfox.com" },
    {
      name: "description",
      content:
        "I'm an experienced Product Designer living in Austin, TX, with my beautiful wife and daughters.",
    },
    {
      name: "keywords",
      content:
        "Shaun Fox, Shaun, Sean, Shawn, Fox, Design, Austin, Designer, Principle Product Designer, Product Designer, Lead UX Designer, UX Designer, Portfolio, Web Design, design technologist",
    },
  ];
};

export default function Index() {
  return (
    <div className="home">
      <h1>
        Howdy, I'm Shaun <span>👋</span>
      </h1>
      <p>
        I've worked on a variety of teams with companies in the design and
        technology space for over 15 years. I'm naturally curious and kinda
        interested in everything, so I've always got multiple projects going.
      </p>
      <p>
        I'm a systems-thinker &ndash; always looking for connections and trying
        to understand the big picture. Because of this, I've developed a knack
        for contextualizing information and framing problems in ways that help
        cross-disciplinary teams work together smoothly. I tend to be the
        glue-guy or the translator between multiple disciplines, which has
        allowed me to get my hands dirty in many areas.
      </p>
      <p>
        For me, design is just problem solving and can be applied to almost
        anything &ndash; you work to understand the problem, make sure to
        account for any constraints, explore a variety of solutions, and then
        you try them out. (yes, that's a rather simplified definition)
      </p>
      <p>Here's some of what I worked on recently:</p>
      <ul>
        <li>
          Creating new ways to understand what users need through data
          aggregation and analysis
        </li>
        <li>
          Developing software and design systems that make it easier for teams
          to build great experiences
        </li>
        <li>
          Building and leading a cross-functional team of designers,
          researchers, writers, and coders
        </li>
        <li>Collaborating on strategy and organizational planning</li>
      </ul>
    </div>
  );
}
