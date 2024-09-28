"use client";
import { useEffect } from "react";

const SimplyBookWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//widget.simplybook.it/v2/widget/widget.js";
    script.type = "text/javascript";
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      if (window.SimplybookWidget) {
        new window.SimplybookWidget({
          widget_type: "iframe",
          url: "https://sturmayr.simplybook.it",
          theme: "default",
          theme_settings: {
            timeline_hide_unavailable: "1",
            hide_past_days: "0",
            timeline_show_end_time: "0",
            timeline_modern_display: "as_slots",
            sb_base_color: "#216849",
            display_item_mode: "block",
            booking_nav_bg_color: "#216849",
            body_bg_color: "#f7f7f7",
            sb_review_image: "",
            dark_font_color: "#333333",
            light_font_color: "#ffffff",
            btn_color_1: "#6b9080",
            sb_company_label_color: "#ffffff",
            hide_img_mode: "1",
            show_sidebar: "1",
            sb_busy: "#c7b3b3",
            sb_available: "#d6ebff",
          },
          timeline: "modern",
          datepicker: "top_calendar",
          is_rtl: false,
          app_config: {
            clear_session: 0,
            allow_switch_to_ada: 0,
            predefined: [],
          },
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div id="simplybook-widget"></div>
    </div>
  );
};

export default SimplyBookWidget;
