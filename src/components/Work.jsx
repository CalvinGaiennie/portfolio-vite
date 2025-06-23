import Timeline from "./Timeline";
import EventCard from "./EventCard";

function Work() {
  return (
    <div>
      <Timeline
        title="Work"
        content={
          <EventCard
            position={"Software Developer Intern"}
            institution={"Veris Global"}
            location={"Lafaytette, LA (onsite)"}
            time={"January 2025 - May 2025"}
            logo="/imgs/veris_global_logo.jpeg"
          />
        }
      />
    </div>
  );
}

export default Work;
