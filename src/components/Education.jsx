import EventCard from "./EventCard";
import Timeline from "./Timeline";

function Education() {
  return (
    <div>
      <Timeline
        title="Education"
        content={
          <EventCard
            position={"Bachelors in Business Management"}
            institution={"Lousiana State University"}
            location={"Baton Rouge, LA"}
            time={"August 2019 - May 2023"}
            logo="/imgs/LSU-Logo.jpeg"
          />
        }
      />
    </div>
  );
}

export default Education;
