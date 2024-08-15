import { type MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "shaunfox.com | Principal Product Designer" }];
};

export default function Index() {
  return (
    <div className="home">
      <h1>
        Howdy, I'm Shaun <span>👋</span>
      </h1>
      <p>
        I'm a designer, technologist, and strategist living in Austin, Texas,
        with my beautiful wife and daughters. I've worked with a variety of
        companies in the design and technology space for over 15 years.
      </p>
      <p>
        My natural curiosity and love for learning has allowed me to acquire
        complementary skills in multiple areas. I began my career in design, and
        quickly recognized the value of understanding the other parts of the
        business &ndash; technology, product management, data analysis,
        operations, hiring, and others.
      </p>
      <p>
        I have a knack for understanding systems, and can often recognize
        patterns where others simply see complexity. Having an intuitive grasp
        of the way things connect allows me to build bridges between people and
        ideas, and to quickly process options and analyze the implications of a
        direction.
      </p>
      <p>
        I'm currently taking on new clients. If you have a problem you think I
        could help solve or a gap on your team, I'd love to chat with you about
        it.
      </p>
      <p>
        <a href="mailto:hello@shaunfox.com">hello@shaunfox.com</a>
      </p>
    </div>
  );
}
