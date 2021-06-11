const simple: SMART.AccessTokenResponse = {
  access_token: "secret-xyz"
}

const exhaustive: SMART.AccessTokenResponse = {
  access_token: "secret-xyz",
  patient: "123",
  encounter: "123",
  need_patient_banner: false,
  intent: "reconcile-medications",
  smart_style_url: "https://ehr/styles/smart_v1.json"
}

const styling: SMART.AppStyling = {
  color_background: "#edeae3",
  color_error: "#9e2d2d",
  color_highlight: "#69b5ce",
  color_modal_backdrop: "",
  color_success: "#498e49",
  color_text: "#303030",
  dim_border_radius: "6px",
  dim_font_size: "13px",
  dim_spacing_size: "20px",
  font_family_body: "Georgia, Times, 'Times New Roman', serif",
  font_family_heading: "'HelveticaNeue-Light', Helvetica, Arial, 'Lucida Grande', sans-serif;"
}
