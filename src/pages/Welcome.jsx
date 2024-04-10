import { Link } from "react-router-dom";
import background from "../assets/background.png";
import man from "../assets/man.png";
import { motion, useScroll, useTransform } from "framer-motion";

const WelcomePage = () => {
  const { scrollY } = useScroll();

  const yMen = useTransform(scrollY, [0, 200], [0, -100]);
  const opacityMen = useTransform(scrollY, [0, 200], [1, 0]);

  const yBackground = useTransform(scrollY, [0, 200], [0, -50]);
  const opacityBackground = useTransform(scrollY, [0, 200], [1, 0]);

  const scaleText = useTransform(scrollY, [0, 200], [1, 1.2]);
  const yText = useTransform(scrollY, [0, 200], [0, 300]);
  return (
    <>
      <header id="welcome-header">
        <motion.div
          id="welcome-header-content"
          style={{ scale: scaleText, y: yText }}
        >
          <h1>
            Work more <span className="highlighted-content">Structured</span>{" "}
            and Organized
          </h1>
          <Link id="cta-link" to="/tasks" className="primary-btn">
            Get Started
          </Link>
        </motion.div>
        <motion.img
          style={{ opacity: opacityBackground, y: yBackground }}
          src={background}
          alt="ellipses"
          id="ellipses-background"
        />
        <motion.img
          src={man}
          alt="man"
          id="hero-img"
          style={{ y: yMen, opacity: opacityMen }}
        />
      </header>
      <main id="welcome-content">
        <section>
          <h2>
            Building <span className="content-highlighted">Better </span>
            Workplaces
          </h2>
          <p>
            Create a unique emotional story that describes better than words
          </p>
        </section>
        <section>
          <h2>Features</h2>
          <ul>
            <li>
              Task Customization: Tailor tasks to fit your unique challenges and
              goals.
            </li>
            <li>
              Progress Tracking: Monitor your productivity journey with detailed
              analytics and insights.
            </li>
            <li>
              Community Support: Join our community and get motivated by peers.
            </li>
          </ul>
        </section>

        <section>
          <h2>
            Join <span className="content-highlighted">Thousands</span>{" "}
            Embracing The Challenge
          </h2>
          <p>
            I never thought staying organized could be this easy. This app has
            truly revolutionized the way I manage my tasks.”- Alex S.
          </p>
          <p>
            The community support feature is a game-changer. It&apos;s
            motivating to connect with others who share similar goals and
            challenges.” - Sarah M.
          </p>
        </section>
      </main>
    </>
  );
};

export default WelcomePage;
