import PhasesSlider from "../components/PhasesSlider";

const Phases = () => {
  return (
    <section id="phases" className="phases-section">
      <div className="h-full flex xl:flex-row flex-col items-center relative">
        {/* <div className="lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0">
          <FlavorTitle />
        </div> */}
        <div>
          <PhasesSlider />
        </div>
      </div>
    </section>
  );
};

export default Phases;
