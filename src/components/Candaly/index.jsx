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
        url="https://calendly.com/jadwal-mahasiswa-bs/jadwal-untuk-mahasiswa-di-bintang-sempurna?hide_landing_page_details=1"
        styles={{ height: "800px", maxWidth: "100%" }}
      />
    </div>
  );
};

export default Calendly;
