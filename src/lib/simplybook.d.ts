// types/simplybook.d.ts
interface SimplybookWidgetConfig {
  widget_type: string;
  url: string;
  theme: string;
  theme_settings: {
    timeline_hide_unavailable: string;
    hide_past_days: string;
    timeline_show_end_time: string;
    timeline_modern_display: string;
    sb_base_color: string;
    display_item_mode: string;
    booking_nav_bg_color: string;
    body_bg_color: string;
    sb_review_image: string;
    dark_font_color: string;
    light_font_color: string;
    btn_color_1: string;
    sb_company_label_color: string;
    hide_img_mode: string;
    show_sidebar: string;
    sb_busy: string;
    sb_available: string;
  };
  timeline: string;
  datepicker: string;
  is_rtl: boolean;
  app_config: {
    clear_session: number;
    allow_switch_to_ada: number;
    predefined: unknown[]; // Utilisation de unknown[] à la place de any[]
  };
}

declare global {
  interface Window {
    SimplybookWidget: new (config: SimplybookWidgetConfig) => void;
  }
}

export {};
