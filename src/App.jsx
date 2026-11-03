import "./styles/global.css";
import "./styles/dashboard-layout.css";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import WelcomeSection from "./components/WelcomeSection";
import QuoteCard from "./components/QuoteCard";

import ProgressCards from "./components/ProgressCards";

import ContinueLearning from "./components/ContinueLearning";
import DailyChallenge from "./components/DailyChallenge";
import Recommendations from "./components/Recommendations";

import SkillsSection from "./components/SkillsSection";
import QuickResources from "./components/QuickResources";


function App() {

  return (

    <div className="dashboard-layout">

      {/* LEFT SIDEBAR */}

      <Sidebar />


      {/* MAIN DASHBOARD CONTENT */}

      <main className="main-content">


        {/* TOP NAVIGATION */}

        <Navbar />


        {/* WELCOME BANNER + QUOTE */}

        <section className="hero-row">

          <WelcomeSection />

          <QuoteCard />

        </section>


        {/* FOUR PROGRESS CARDS */}

        <section className="progress-grid">

          <ProgressCards />

        </section>


        {/* LEARNING + DAILY CHALLENGE + RECOMMENDATIONS */}

        <section className="learning-row">

          <ContinueLearning />

          <DailyChallenge />

          <Recommendations />

        </section>


        {/* SKILLS + QUICK RESOURCES */}

        <section className="bottom-row">

          <SkillsSection />

          <QuickResources />

        </section>


      </main>

    </div>

  );

}

export default App;
