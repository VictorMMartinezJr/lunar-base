import PhasesSlider from "../components/PhasesSlider";

const Phases = () => {
  return (
    <section id="phases" className="phases-section">
      <div className="h-full flex xl:flex-row flex-col items-center relative">
        <div>
          <PhasesSlider />
        </div>
      </div>
    </section>
  );
};

export default Phases;
