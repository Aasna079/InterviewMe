import WelcomeSection from "../components/WelcomeSection";
import QuoteCard from "../components/QuoteCard";
import ProgressCards from "../components/ProgressCards";

import ContinueLearning from "../components/ContinueLearning";
import DailyChallenge from "../components/DailyChallenge";
import Recommendations from "../components/Recommendations";

import SkillsSection from "../components/SkillsSection";
import QuickResources from "../components/QuickResources";

function Dashboard() {
  return (
    <>
      {/* ROW 1 — Welcome + Quote */}
      <section className="hero-row">
        <WelcomeSection />
        <QuoteCard />
      </section>

      {/* ROW 2 — Progress Cards */}
      <section className="progress-grid">
        <ProgressCards />
      </section>

      {/* ROW 3 — Learning */}
      <section className="learning-row">
        <ContinueLearning />
        <DailyChallenge />
        <Recommendations />
      </section>

      {/* ROW 4 — Skills + Resources */}
      <section className="bottom-row">
        <SkillsSection />
        <QuickResources />
      </section>
    </>
  );
}

export default Dashboard;