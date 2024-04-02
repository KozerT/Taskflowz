import { Link } from "react-router-dom";
import background from "../assets/background.png";
import man from "../assets/man.png";

const WelcomePage = () => {
  return (
    <>
      <header id="welcome-header">
        <div id="welcome-header-content">
          <h1>
            Work more <span className="highlighted-content">Structured</span>{" "}
            and Organized
          </h1>
          <Link id="cta-link" to="/tasks">
            Get Started
          </Link>
        </div>
        <img src={background} alt="ellipses" id="ellipses-background" />
        <img src={man} alt="man" id="hero-img" />
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
