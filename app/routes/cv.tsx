import Rule from "~/components/Rule";

const workJSON = [
  {
    title: "Lead UX Designer, Design Director",
    company: "Indeed",
    date: "2018–2024",
    location: "Austin, Texas",
    desc: "Placeholder text for the description of the lead UX Designer, Design Director experience.",
  },
  {
    title: "Principal Product Designer",
    company: "ShipStation",
    date: "2017–2018",
    location: "Austin, Texas",
    desc: "At ShipStation, it's my responsibility to shepherd the design work we do as a team. I mentor younger designers and help set the tone for our work and interactions with the rest of the company. As a team we work closely with the engineers, of course. The most significant tool that we've built together, to help stabilize both the design rules and the implementation, is our front-end component library. I've worked closely with our front-end team to hash out best-practices for things like: responsiveness, interactions, reusability, state-handling, and code structure and clarity. Much of the design work I deliver is documented through a combination of live code mockups, interactive walkthroughs, and defining these components. As we research and design new features, we're constantly checking our assumptions and our design work with users. This, above all, has informed the direction of our work and has empowered our small design team to educate the rest of the company about our users' needs and has led to better collaboration between departments.",
  },
  {
    title: "Creative Director",
    company: "HotSchedules",
    date: "2016–2017",
    location: "Austin, Texas",
    desc: "At HotSchedules I managed a team of designers and guided the visual and user experience design of our products. During my time there, we smoothed out a lot of communication issues between the design, product management, and engineering teams and put many best-practice processes in place. I also oversaw the creation of a front-end component library to be used across multiple products as a tool to unify the code and the user experience",
  },
  {
    title: "Creative Director",
    company: "Snaptrends",
    date: "2014–2016",
    location: "Austin, Texas",
    desc: "At Snaptrends, I split my time between designing the UI/UX for the application and overseeing design and visuals for Marketing. On the product side, I led the design of new and existing features. This consisted of managing the design process, working alongside engineers to identify the problems and come up with solutions, making flat and live code mockups, and then finally assisting in the front-end development of the final product. On the marketing side, I designed and coded the company's website, helped lead marketing campaign efforts, and directed the creation of numerous print and digital pieces to support those efforts. All along the way I co-led the creation of CSS and HTML guidelines, but I also began adding AngularJS to my arsenal, which made my participation in building the end-product even more fluid than before",
  },
  {
    title: "Senior UX/UI Designer",
    company: "Bypass Mobile",
    date: "2014",
    location: "Austin, Texas",
    desc: "At Bypass, I led the design and redesign of products on multiple apps across the web and Android devices. Bypass had a suite of apps with similar functionalities, but disparate codebases and interface patterns (web and Android). I helped unify the workflows and UI for these apps and created standards for UI consistency.",
  },
  {
    title: "User Experience Designer",
    company: "Ringtail Design",
    date: "2012–2014",
    location: "Austin, Texas",
    desc: "At Ringtail, I was part of a two-person design team, creating interfaces and workflows for numerous applications. We worked closely with engineers to create apps on multiple platforms, including web, Android, and Windows Desktop. Together, we defined objectives, went through design processes, and coded numerous applications from the ground up.",
  },
  {
    title: "In-house Graphic Designer",
    company: "The Austin Stone, For the City Network",
    date: "2008–2012",
    location: "Austin, Texas",
    desc: "As an in-house Graphic Designer, I led the design of all kinds of media to support communications inside and outside the church. This included identities for events, designing and implementing websites to designing books and brochures and managing the printing process to completion, among other things.",
  },
  {
    title: "Design Intern",
    company: "Kym Abrams Design",
    date: "Summer 2009",
    location: "Chicago, Illinois",
    desc: "Placeholder text for the description of the internship experience.",
  },
];

const schoolJSON = [
  {
    title: "Bachelor of Fine Arts in Communication Design",
    company: "Cum Laude / Texas State University",
    date: "2009",
    location: "San Marcos, Texas",
    desc: "Placeholder text for the description of the school experience.",
  },
];

export function CVComponent({
  desc,
  title,
  company,
  date,
  location,
}: {
  desc: string;
  title: string;
  company: string;
  date: string;
  location: string;
}) {
  return (
    <div className="cv-component">
      <p>{desc}</p>
      <div className="cv-info">
        <span className="cv-title">{title}</span>
        <span>{company}</span>
        <span>
          {date} / {location}
        </span>
      </div>
    </div>
  );
}

export default function CVRoute() {
  return (
    <div className="cv-container">
      <p>
        Dolore duis amet deserunt sint excepteur proident ipsum magna aliquip
        deserunt nostrud irure dolore. Fugiat qui mollit sit quis veniam anim
        adipisicing aliqua elit. Commodo et dolore et. Eu sint officia aute
        fugiat Lorem eu ex minim non consequat aliqua quis velit excepteur.
      </p>
      <Rule />
      <h1>Work</h1>
      {workJSON.map((job, index) => (
        <CVComponent
          key={index}
          desc={job.desc}
          title={job.title}
          company={job.company}
          date={job.date}
          location={job.location}
        />
      ))}
      <Rule />
      <h1>Education</h1>
      {schoolJSON.map((job, index) => (
        <CVComponent
          key={index}
          desc={job.desc}
          title={job.title}
          company={job.company}
          date={job.date}
          location={job.location}
        />
      ))}
    </div>
  );
}
