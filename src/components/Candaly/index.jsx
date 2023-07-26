import React from "react";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";
import "./styles.css";

const Calendly = () => {
  useCalendlyEventListener({
    onProfilePageViewed: () => "onProfilePageViewed",
    onDateAndTimeSelected: () => "onDateAndTimeSelected",
    onEventTypeViewed: () => "onEventTypeViewed",
    onEventScheduled: (e) => e.data.payload,
  });

  return (
    <div className="App">
      <InlineWidget
        className="calendly-inline-widget"
        url="https://calendly.com/appointment-pry/jadwal-konsultasi-bintang-sempurna?hide_landing_page_details=1"
        styles={{ height: "800px", maxWidth: "100%" }}
      />
    </div>
  );
};

export default Calendly;
