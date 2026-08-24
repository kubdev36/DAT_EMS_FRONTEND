const enMessages = {
  // =========================
  // LOGIN
  // =========================
  login: "Login",
  login_system: "Login To System",
  username: "Username",
  password: "Password",
  logining: "Logining",
  forgot_password: "Forgot password",
  save_login: "Save login",
  trial_account: "Trial account",
  version: "Version",
  alarm_username: "Please enter username.",
  alarm_password: "Please enter password.",
  alarm_forgot: "Please contact the administrator to have your password reset.",
  login_error: "Invalid username or password.",

  reset_password: "Reset password",
  verify_account: "Verify account",
  go_back: "Go back",
  next: "Next",
  send: "Send",
  input_email: "Enter email",
  input_otp: "Enter OTP",
  verify_code: "Verify code",
  resend_otp: "Resend OTP?",
  resend_otp_after: "Resend OTP after",
  confirm_password: "Confirm password",

  password_input: "Enter password",
  password_input_confirm: "Enter confirm password",
  password_input_new: "Enter new password",
  password_input_current: "Enter current password",

  current_password: "Current Password",
  new_password: "New Password",
  password_confirm: "Confirm Password",

  alarm_new_password: "Please enter new password",
  alarm_current_password: "Please enter current password.",
  alarm_confirm_password: "Please enter confirm password.",
  alarm_email: "Please enter email.",
  alarm_email_notfound: "Email not found.",
  alarm_otp: "Please enter the complete 6-digit OTP.",
  alarm_wrong_otp: "Wrong OTP!",
  alarm_password_not_match: "Passwords do not match!",
  alarm_wrong_current_password: "Wrong current password.",

  // =========================
  // HEADER
  // =========================
  common_logout: "Logout",
  common_open_alarms: "Open alarms",
  common_select_language: "Select language",
  modal_close_aria: "Close modal",
  notification: "Notification",
  title: "Energy Management System",

  language_vi: "Vietnamese",
  language_en: "English",

  alarm_center: "Alarm center",
  view_all_alarm: "View all alarms",

  user_information: "User Information",

  // =========================
  // SIDEBAR
  // =========================
  sidebar_group_overview: "OVERVIEW",
  sidebar_group_monitoring: "MONITORING",
  sidebar_group_operation: "OPERATION",
  sidebar_group_management: "MANAGEMENT",

  sidebar_group_overview_label: "Overview",
  sidebar_group_monitoring_label: "Monitoring",
  sidebar_group_operation_label: "Report",
  sidebar_group_management_label: "Management",
  project_management: "Project Management",
  project_management_label: "Projects",
  dashboard_overview: "Dashboard",
  dashboard_overview_label: "Dashboard",

  sidebar_item_dashboard_overview: "Dashboard",
  sidebar_item_pcs_detail: "PCS",
  sidebar_item_battery_detail: "BMS",
  sidebar_item_energy_report: "Report",
  sidebar_item_alarm_management: "Alarm",
  sidebar_item_alarm_management2: "Alarm ",
  sidebar_item_user_management: "User Management",
  sidebar_item_system_settings: "System Settings",
  sidebar_item_role_management: "Role Management",
  sidebar_item_user_info: "User Info",
  sidebar_item_alarm: "Alarm",
  sidebar_item_battery_management: "BMS Management",
  sidebar_item_electric: "Electric",
  sidebar_item_water: "Water",
  sidebar_item_compressed_air: "Compressed air",

  project_list_title: "Project list",
  project_list_description: "Manage and track projects in progress.",
  project_search_placeholder: "Search projects...",
  project_create: "Create project",
  project_name: "Project name",
  project_address: "Address",
  project_created_at: "Created date",
  project_status: "Status",
  project_open: "Open project",
  project_options: "Options",
  project_delete: "Delete project",
  project_empty: "No matching projects found.",

  // =========================
  // PROJECT DETAIL DASHBOARD
  // =========================
  dashboard_title: "Dashboard",

  dashboard_electric_title: "ELECTRICITY ENERGY",
  dashboard_water_title: "WATER SYSTEM",
  dashboard_gas_title: "GAS SYSTEM",
  dashboard_co2_title: "TOTAL CO₂E",

  dashboard_power: "POWER",
  dashboard_consumption: "CONSUMPTION",
  dashboard_flow_rate: "FLOW RATE",
  dashboard_volume: "VOLUME",

  dashboard_co2_formula_title: "CO₂E EMISSION CALCULATION FORMULA",

  dashboard_co2_electric_title: "1. GRID ELECTRICITY CALCULATION",
  dashboard_co2_electric_formula:
    "CO₂e emissions from grid electricity (tCO₂e) = [Total electricity consumption (MWh) × Grid emission factor (kg CO₂/MWh)] / 1000",

  dashboard_co2_water_title: "2. WATER CONSUMPTION CALCULATION",
  dashboard_co2_water_formula:
    "CO₂e emissions from water (tCO₂e) = [Water consumption (m³) × Water emission factor (kg CO₂e/m³)] / 1000",

  dashboard_co2_gas_title: "3. GAS (CNG/GAS) CALCULATION",
  dashboard_co2_gas_formula:
    "Gas CO₂e emissions (t) = (CO₂ emissions × 1) + (CH₄ emissions × 29.8) + (N₂O emissions × 273)",

  dashboard_co2_total_title: "4. NET EMISSIONS CALCULATION",
  dashboard_co2_total_formula:
    "Net emissions (tCO₂e) = (Grid electricity emissions + Water emissions + Gas emissions) - Total emission reductions (Solar + BESS)",

  dashboard_co2_note:
    "*Note: The grid emission factor is periodically published annually by the Ministry of Natural Resources and Environment.",

  dashboard_trend_instant: "Instantaneous Trend",
  dashboard_trend_accumulated: "Cumulative Trend",
  dashboard_trend_time: "Time",
  dashboard_trend_date: "Date",

  dashboard_trend_increase: "▲ Increase {percent}% vs yesterday",
  dashboard_trend_decrease: "▼ Decrease {percent}% vs yesterday",

  dashboard_trend_electric: "Electricity",
  dashboard_trend_water: "Water",
  dashboard_trend_gas: "Compressed air",

  project_monitor_add_child: "Add child station",
  project_monitor_delete_station: "Delete station",
  project_monitor_confirm_delete: "Confirm delete",
  project_monitor_cancel: "Cancel",
  project_monitor_delete_now: "Delete now",
  project_monitor_confirm: "Confirm",
  project_monitor_delete_message:
    "Are you sure you want to delete station {title} and all child branches?",
  project_monitor_add_child_for: "Add child station for [{title}]",
  project_monitor_child_station_name: "New child station name:",
  project_monitor_time: "Time",
  alarm_report_header: "Report",
  alarm_report_title: "Energy summary report",
  alarm_report_subtitle: "Export detailed data by day, week, and month",
  alarm_report_pdf: "Export PDF",
  alarm_report_excel: "Export Excel (.xlsx)",
  alarm_report_total_energy: "Total electricity",
  alarm_report_total_cost: "Total cost",
  alarm_report_co2: "CO₂ emissions",
  alarm_report_device_fail: "Fault devices",

  electric_system_title: "ELECTRIC SYSTEM",
  electric_outdoor_zone: "AREA OUTSIDE SHOWROOM",
  electric_showroom_zone: "SHOWROOM AREA",
  electric_create_root: "Create main MCB",
  electric_create_root_title: "Create new main MCB",
  electric_delete_root: "Delete main MCB",
  electric_root_name: "New main MCB name:",
  electric_root_placeholder: "Example: MAIN MCB 3",
  electric_child_placeholder: "Example: AIR COMPRESSOR 1",
  electric_metric_energy: "ENERGY:",
  electric_metric_power: "POWER:",
  electric_detail_energy_title: "Electric energy consumption",
  electric_detail_total: "Total accumulated",
  electric_detail_today: "Today",
  electric_detail_month: "This month",
  electric_detail_phase_title: "3-PHASE VOLTAGE & CURRENT",
  electric_detail_voltage: "Voltage (V)",
  electric_detail_current: "Current (A)",
  electric_detail_voltage_legend: "3-phase voltage",
  electric_detail_current_legend: "3-phase current",
  electric_detail_quality_title: "POWER QUALITY",
  electric_detail_chart_title: "Instantaneous power chart",
  electric_detail_chart_subtitle: "Track 24h instantaneous power (kW)",
  electric_detail_title: "Electric energy detail monitoring {title}",
  electric_detail_consumed_power: "Consumed power",
  electric_detail_reactive_power: "Reactive power",
  electric_detail_apparent_power: "Apparent power",

  water_system_title: "WATER SYSTEM",
  water_create_root: "Create main water station",
  water_create_root_title: "Create new main water station",
  water_delete_root: "Delete main water station",
  water_root_name: "New main station name:",
  water_root_placeholder: "Example: MAIN WATER STATION 2",
  water_child_placeholder: "Example: DEMO 6 PUMP",
  water_metric_total: "TOTAL CONSUMPTION:",
  water_metric_flow: "FLOW RATE:",
  water_detail_fallback_title: "Water detail monitoring {title}",
  water_detail_pressure: "Water pressure",
  water_detail_flow: "Water flow rate",
  water_detail_total_volume: "Total water volume",
  water_detail_chart_title: "Instantaneous water flow chart",
  water_detail_chart_subtitle: "Track instantaneous water flow (m³/h)",
  water_desc_pipe_pressure: "Pipeline pressure",
  water_desc_discharge_pressure: "Discharge pressure",
  water_desc_instant_flow: "Instantaneous flow rate",
  water_desc_four_pump_flow: "4-pump station flow rate",
  water_desc_two_pump_flow: "2-pump station flow rate",
  water_desc_accumulated_volume: "Accumulated volume",
  water_desc_total_pumped: "Total pumped water",

  air_system_title: "COMPRESSED AIR SYSTEM",
  air_create_root: "Create main air station",
  air_create_root_title: "Create new main air station",
  air_delete_root: "Delete main air station",
  air_root_name: "New main station name:",
  air_root_placeholder: "Example: MAIN AIR STATION 2",
  air_child_placeholder: "Example: AIR STATION 3",
  air_metric_total: "TOTAL AIR CONSUMPTION",
  air_metric_flow: "AIR FLOW RATE",
  air_detail_fallback_title: "Compressed air detail monitoring {title}",
  air_detail_pressure: "Air pressure",
  air_detail_flow: "Air flow rate",
  air_detail_total_volume: "Total air volume",
  air_detail_chart_title: "Instantaneous air flow chart",
  air_detail_chart_subtitle: "Track instantaneous air flow (Nm³/h)",
  air_desc_pipe_pressure: "Pipeline pressure",
  air_desc_workshop_pipe_pressure: "Workshop pipeline pressure",
  air_desc_instant_flow: "Instantaneous flow rate",
  air_desc_workshop_flow: "Workshop flow rate",
  air_desc_accumulated_volume: "Accumulated volume",

  // =========================
  // DASHBOARD - ENERGY MIX
  // =========================
  dashboard_energy_mix_title: "Today's Energy Mix",
  dashboard_energy_solar: "Solar",
  dashboard_energy_grid: "Grid",
  dashboard_bess_charge: "BESS Charge",
  dashboard_bess_discharge: "BESS Discharge",
  // =========================
  // DASHBOARD - LOAD
  // =========================
  dashboard_load_breakdown_title: "Load Breakdown by Type",
  dashboard_load_air_conditioner: "Air Conditioner",
  dashboard_load_lighting: "Lighting",
  dashboard_load_water_pump: "Water Pump",
  dashboard_load_other_devices: "Other Devices",
  // =========================
  // DASHBOARD - TIME BAND
  // =========================
  dashboard_consumption_time_band_title: "Consumption by Time Band",
  dashboard_peak_hours: "Peak Hours",
  dashboard_normal_hours: "Normal Hours",
  // =========================
  // DASHBOARD - ECONOMIC
  // =========================
  dashboard_economic_benefits_costs: "ECONOMIC BENEFITS & COSTS",
  dashboard_solar_economic_benefit: "SOLAR ECONOMIC BENEFIT",
  dashboard_solar_savings_estimate: "Estimated Solar Savings",
  dashboard_total_load_cost_today: "Total Load Cost Today",
  dashboard_grid_electricity_cost: "Grid Electricity Cost",
  dashboard_million_vnd: "Million VND",

  // =========================
  // SYSTEM SETTING
  // =========================
  system_setting_title: "Settings",
  system_setting_co2e_convert_title: "CO₂E Emission Conversion Factors",
  system_setting_co2e_convert_description:
    "Configure greenhouse gas (CO₂e) emission factors for each energy source",
  system_setting_co2e_convert_factors: "Emission Factors",
  system_setting_co2e_convert_electricity: "Electricity",
  system_setting_co2e_convert_water: "Water",
  system_setting_co2e_convert_air: "Air",

  system_setting_electricity_price_title:
    "Electricity Tariff & Time Slot Settings",
  system_setting_electricity_price_description:
    "Enter electricity prices (VND/kWh) and set corresponding time bands",
  system_setting_electricity_price_add_tier: "Add Tariff Tier",
  system_setting_electricity_price_add_tier_success:
    "Tariff tier added successfully!",
  system_setting_electricity_price_add_tier_failed:
    "Failed to add tariff tier!",
  system_setting_electricity_price_tier_title: "Tier Name",
  system_setting_electricity_price_tier_price: "Unit Price (VND/kWh)",
  system_setting_electricity_price_tier_time: "Applied Time Window",
  system_setting_electricity_price_tier_time_add: "Add Time Slot",
  system_setting_electricity_price_tier_time_add_success:
    "Time slot added successfully!",
  system_setting_electricity_price_tier_time_add_failed:
    "Failed to add time slot!",
  system_setting_electricity_price_tier_time_delete: "Delete",
  system_setting_electricity_price_tier_time_delete_confirm:
    "Are you sure you want to delete this time slot?",
  system_setting_electricity_price_tier_time_delete_confirm_alert_success:
    "Time slot deleted successfully!",
  system_setting_electricity_price_tier_time_delete_confirm_alert_failed:
    "Failed to delete time slot!",
  system_setting_electricity_price_tier_save: "Save Configuration",
  system_setting_electricity_price_tier_save_success:
    "System settings saved successfully! Emission & cost data auto-updated.",
  system_setting_electricity_price_tier_delete: "Delete this tier",
  system_setting_electricity_price_tier_delete_confirm:
    "Are you sure you want to delete this tariff tier?",
  system_setting_electricity_price_tier_delete_confirm_alert_success:
    "Tariff tier deleted successfully!",
  system_setting_electricity_price_tier_delete_confirm_alert_failed:
    "Failed to delete tariff tier!",
};

const viMessages = {
  // =========================
  // LOGIN
  // =========================
  login: "Đăng nhập",
  login_system: "Đăng nhập hệ thống",
  username: "Tên tài khoản",
  password: "Mật khẩu",
  logining: "Đang đăng nhập",
  forgot_password: "Quên mật khẩu",
  save_login: "Lưu đăng nhập",
  trial_account: "Tài khoản trải nghiệm",
  version: "Phiên bản",
  alarm_username: "Vui lòng nhập tên tài khoản.",
  alarm_password: "Vui lòng nhập mật khẩu.",
  alarm_forgot: "Vui lòng liên hệ quản trị viên để được cấp lại mật khẩu.",
  login_error: "Tên tài khoản hoặc mật khẩu sai.",

  reset_password: "Đặt lại mật khẩu",
  verify_account: "Xác minh tài khoản",
  go_back: "Quay lại",
  next: "Tiếp tục",
  send: "Gửi",
  input_email: "Nhập email",
  input_otp: "Nhập OTP",
  verify_code: "Mã xác thực",
  resend_otp: "Gửi lại OTP?",
  resend_otp_after: "Gửi lại OTP sau",
  confirm_password: "Xác nhận mật khẩu",

  password_input: "Nhập mật khẩu",
  password_input_confirm: "Nhập mật khẩu xác nhận",
  password_input_new: "Nhập mật khẩu mới",
  password_input_current: "Nhập mật khẩu hiện tại",

  current_password: "Mật khẩu hiện tại",
  new_password: "Mật khẩu mới",
  password_confirm: "Xác nhận mật khẩu",

  alarm_new_password: "Vui lòng nhập mật khẩu mới.",
  alarm_current_password: "Vui lòng nhập mật khẩu hiện tại.",
  alarm_confirm_password: "Vui lòng nhập mật khẩu xác nhận.",
  alarm_email: "Vui lòng nhập email.",
  alarm_email_notfound: "Không tìm thấy email trong hệ thống.",
  alarm_otp: "Vui lòng nhập đủ 6 số OTP.",
  alarm_wrong_otp: "OTP chưa đúng!",
  alarm_password_not_match: "Mật khẩu chưa khớp!",
  alarm_wrong_current_password: "Mật khẩu hiện tại chưa đúng.",

  // =========================
  // HEADER
  // =========================
  common_logout: "Đăng xuất",
  common_open_alarms: "Mở cảnh báo",
  common_select_language: "Chọn ngôn ngữ",
  modal_close_aria: "Đóng",
  notification: "Thông báo",
  title: "Hệ thống quản lý năng lượng",

  language_vi: "Tiếng Việt",
  language_en: "Tiếng Anh",

  alarm_center: "Thông báo",
  view_all_alarm: "Xem tất cả",

  user_information: "Thông tin người dùng",

  // =========================
  // SIDEBAR
  // =========================
  sidebar_group_overview: "Tổng quan",
  sidebar_group_monitoring: "Giám sát",
  sidebar_group_operation: "Vận hành - Bảo trì",
  sidebar_group_management: "Quản lý hệ thống",

  sidebar_group_overview_label: "Tổng quan",
  sidebar_group_monitoring_label: "Giám sát",
  sidebar_group_operation_label: "Báo cáo",
  sidebar_group_management_label: "Quản lý",
  project_management: "Quản lý dự án",
  project_management_label: "Dự án",
  dashboard_overview: "Tổng quan",
  dashboard_overview_label: "Tổng quan",

  sidebar_item_dashboard_overview: "Tổng quan hệ thống",
  sidebar_item_pcs_detail: "PCS",
  sidebar_item_battery_detail: "BMS",
  sidebar_item_energy_report: "Báo cáo",
  sidebar_item_alarm_management: "Cảnh báo",
  sidebar_item_alarm_management2: "Quản lý cảnh báo",
  sidebar_item_user_management: "Quản lý người dùng",
  sidebar_item_system_settings: "Cài đặt hệ thống",
  sidebar_item_role_management: "Quản lý vai trò",
  sidebar_item_user_info: "Thông tin",
  sidebar_item_alarm: "Cảnh báo",
  sidebar_item_battery_management: "Quản lý BMS",
  sidebar_item_electric: "Điện",
  sidebar_item_water: "Nước",
  sidebar_item_compressed_air: "Khí nén",

  project_list_title: "Danh sách dự án",
  project_list_description: "Quản lý và theo dõi các dự án đang thực hiện.",
  project_search_placeholder: "Tìm kiếm dự án...",
  project_create: "Tạo dự án",
  project_name: "Tên dự án",
  project_address: "Địa chỉ",
  project_created_at: "Ngày tạo",
  project_status: "Trạng thái",
  project_open: "Mở dự án",
  project_options: "Tùy chọn",
  project_delete: "Xóa dự án",
  project_empty: "Không tìm thấy dự án phù hợp.",

  // =========================
  // PROJECT DETAILS DASHBOARD
  // =========================
  dashboard_title: "Dashboard",

  dashboard_electric_title: "NĂNG LƯỢNG ĐIỆN",
  dashboard_water_title: "HỆ THỐNG NƯỚC",
  dashboard_gas_title: "HỆ THỐNG KHÍ",
  dashboard_co2_title: "TỔNG LƯỢNG CO₂E",

  dashboard_power: "CÔNG SUẤT",
  dashboard_consumption: "TIÊU THỤ",
  dashboard_flow_rate: "LƯU LƯỢNG",
  dashboard_volume: "THỂ TÍCH",

  dashboard_co2_formula_title: "CÔNG THỨC TÍNH PHÁT THẢI CO₂E",

  dashboard_co2_electric_title: "1. Công thức tính cho ĐIỆN LƯỚI",
  dashboard_co2_electric_formula:
    "Phát thải CO₂e từ điện lưới (tấn CO₂e) = [Tổng điện tiêu thụ (MWh) × Hệ số phát thải lưới (kg CO₂/MWh)] / 1000",

  dashboard_co2_water_title: "2. Công thức tính cho NƯỚC TIÊU THỤ",
  dashboard_co2_water_formula:
    "Phát thải CO₂e từ Nước (tấn CO₂e) = [Lượng nước tiêu thụ (m³) × Hệ số phát thải nước (kg CO₂e/m³)] / 1000",

  dashboard_co2_gas_title: "3. Công thức tính cho KHÍ (CNG/Gas)",
  dashboard_co2_gas_formula:
    "Phát thải CO₂e của Khí (tấn) = (Lượng phát thải CO₂ × 1) + (Lượng phát thải CH₄ × 29.8) + (Lượng phát thải N₂O × 273)",

  dashboard_co2_total_title:
    "4. Công thức tính TỔNG PHÁT THẢI RÒNG (Net Emissions)",
  dashboard_co2_total_formula:
    "Tổng phát thải ròng (tCO₂e) = (Phát thải Điện lưới + Phát thải Nước + Phát thải Khí Gas) - Tổng giảm phát thải (Solar + BESS)",

  dashboard_co2_note:
    "*Lưu ý: Hệ số phát thải lưới do Bộ Tài nguyên và Môi trường công bố định kỳ hàng năm.",

  dashboard_trend_instant: "Xu hướng tức thời",
  dashboard_trend_accumulated: "Xu hướng tích lũy",
  dashboard_trend_time: "Thời gian",
  dashboard_trend_date: "Ngày",

  dashboard_trend_increase: "▲ Tăng {percent}% so với hôm qua",
  dashboard_trend_decrease: "▼ Giảm {percent}% so với hôm qua",

  dashboard_trend_electric: "Điện năng",
  dashboard_trend_water: "Nước",
  dashboard_trend_gas: "Khí nén",

  project_monitor_add_child: "Thêm trạm con",
  project_monitor_delete_station: "Xóa trạm",
  project_monitor_confirm_delete: "Xác nhận xóa",
  project_monitor_cancel: "Hủy",
  project_monitor_delete_now: "Xóa ngay",
  project_monitor_confirm: "Xác nhận",
  project_monitor_delete_message:
    "Bạn có chắc muốn xóa trạm {title} và toàn bộ nhánh con?",
  project_monitor_add_child_for: "Thêm trạm con cho [{title}]",
  project_monitor_child_station_name: "Tên trạm con mới:",
  project_monitor_time: "Thời gian",
  alarm_report_header: "Báo cáo",
  alarm_report_title: "Báo cáo tổng hợp năng lượng",
  alarm_report_subtitle: "Xuất dữ liệu chi tiết theo ngày, tuần, tháng",
  alarm_report_pdf: "Xuất PDF",
  alarm_report_excel: "Xuất Excel (.xlsx)",
  alarm_report_total_energy: "Tổng điện năng",
  alarm_report_total_cost: "Tổng chi phí",
  alarm_report_co2: "Phát thải CO₂",
  alarm_report_device_fail: "Thiết bị báo lỗi",

  electric_system_title: "HỆ THỐNG ĐIỆN",
  electric_outdoor_zone: "KHU VỰC NGOÀI PHÒNG SHOWROOM",
  electric_showroom_zone: "KHU VỰC PHÒNG SHOWROOM",
  electric_create_root: "Tạo MCB tổng",
  electric_create_root_title: "Tạo MCB tổng mới",
  electric_delete_root: "Xóa MCB tổng",
  electric_root_name: "Tên MCB tổng mới:",
  electric_root_placeholder: "Ví dụ: MCB TỔNG 3",
  electric_child_placeholder: "Ví dụ: MÁY NÉN KHÍ 1",
  electric_metric_energy: "NĂNG LƯỢNG:",
  electric_metric_power: "CÔNG SUẤT:",
  electric_detail_energy_title: "Điện năng tiêu thụ",
  electric_detail_total: "Tổng tích lũy",
  electric_detail_today: "Hôm nay",
  electric_detail_month: "Tháng này",
  electric_detail_phase_title: "ĐIỆN ÁP & DÒNG ĐIỆN 3 PHA",
  electric_detail_voltage: "Điện áp (V)",
  electric_detail_current: "Dòng điện (A)",
  electric_detail_voltage_legend: "Điện áp 3 pha",
  electric_detail_current_legend: "Dòng điện 3 pha",
  electric_detail_quality_title: "CHẤT LƯỢNG ĐIỆN NĂNG",
  electric_detail_chart_title: "Đồ thị công suất tức thời",
  electric_detail_chart_subtitle: "Theo dõi công suất tức thời 24h (kW)",
  electric_detail_title: "Giám sát chi tiết Điện năng {title}",
  electric_detail_consumed_power: "Công suất tiêu thụ",
  electric_detail_reactive_power: "Công suất phản kháng",
  electric_detail_apparent_power: "Công suất biểu kiến",

  water_system_title: "HỆ THỐNG NƯỚC",
  water_create_root: "Tạo trạm tổng nước",
  water_create_root_title: "Tạo trạm tổng nước mới",
  water_delete_root: "Xóa trạm tổng nước",
  water_root_name: "Tên trạm tổng mới:",
  water_root_placeholder: "Ví dụ: TRẠM TỔNG NƯỚC 2",
  water_child_placeholder: "Ví dụ: DEMO 6 BƠM",
  water_metric_total: "TỔNG TIÊU THỤ:",
  water_metric_flow: "LƯU LƯỢNG:",
  water_detail_fallback_title: "Giám sát chi tiết Nước {title}",
  water_detail_pressure: "Áp suất nước",
  water_detail_flow: "Lưu lượng nước",
  water_detail_total_volume: "Tổng thể tích nước",
  water_detail_chart_title: "Đồ thị lưu lượng nước tức thời",
  water_detail_chart_subtitle: "Theo dõi lưu lượng nước tức thời (m³/h)",
  water_desc_pipe_pressure: "Áp suất đường ống",
  water_desc_discharge_pressure: "Áp suất đầu đẩy",
  water_desc_instant_flow: "Lưu lượng tức thời",
  water_desc_four_pump_flow: "Lưu lượng trạm 4 bơm",
  water_desc_two_pump_flow: "Lưu lượng trạm 2 bơm",
  water_desc_accumulated_volume: "Thể tích tích lũy",
  water_desc_total_pumped: "Tổng lượng nước bơm",

  air_system_title: "HỆ THỐNG KHÍ NÉN",
  air_create_root: "Tạo trạm tổng khí",
  air_create_root_title: "Tạo trạm tổng khí mới",
  air_delete_root: "Xóa trạm tổng khí",
  air_root_name: "Tên trạm tổng mới:",
  air_root_placeholder: "Ví dụ: TRẠM TỔNG KHÍ 2",
  air_child_placeholder: "Ví dụ: TRẠM KHÍ SỐ 3",
  air_metric_total: "TỔNG TIÊU THỤ KHÍ",
  air_metric_flow: "LƯU LƯỢNG KHÍ",
  air_detail_fallback_title: "Giám sát chi tiết Khí nén {title}",
  air_detail_pressure: "Áp suất khí",
  air_detail_flow: "Lưu lượng khí",
  air_detail_total_volume: "Tổng thể tích khí",
  air_detail_chart_title: "Đồ thị lưu lượng khí tức thời",
  air_detail_chart_subtitle: "Theo dõi lưu lượng khí tức thời (Nm³/h)",
  air_desc_pipe_pressure: "Áp suất đường ống",
  air_desc_workshop_pipe_pressure: "Áp suất đường ống xưởng",
  air_desc_instant_flow: "Lưu lượng tức thời",
  air_desc_workshop_flow: "Lưu lượng phân xưởng",
  air_desc_accumulated_volume: "Thể tích tích lũy",

  // =========================
  // DASHBOARD - ENERGY MIX
  // =========================
  dashboard_energy_mix_title: "Cơ cấu năng lượng hôm nay",
  dashboard_energy_solar: "Solar",
  dashboard_energy_grid: "Lưới điện",
  dashboard_bess_charge: "BESS Sạc",
  dashboard_bess_discharge: "BESS Xả",
  // =========================
  // DASHBOARD - LOAD
  // =========================
  dashboard_load_breakdown_title: "Tải tiêu thụ theo loại",
  dashboard_load_air_conditioner: "Máy lạnh",
  dashboard_load_lighting: "Đèn chiếu sáng",
  dashboard_load_water_pump: "Bơm nước",
  dashboard_load_other_devices: "Thiết bị khác",
  // =========================
  // DASHBOARD - TIME BAND
  // =========================
  dashboard_consumption_time_band_title: "Điện năng tiêu thụ theo khung giờ",
  dashboard_peak_hours: "Giờ cao điểm",
  dashboard_normal_hours: "Giờ bình thường",
  // =========================
  // DASHBOARD - ECONOMIC
  // =========================
  dashboard_economic_benefits_costs: "LỢI ÍCH KINH TẾ & CHI PHÍ",
  dashboard_solar_economic_benefit: "LỢI ÍCH KINH TẾ SOLAR",
  dashboard_solar_savings_estimate: "Tiết kiệm ước tính từ solar",
  dashboard_total_load_cost_today: "Tổng phụ tải hôm nay",
  dashboard_grid_electricity_cost: "Chi phí điện lưới",
  dashboard_million_vnd: "Triệu VND",

  // =========================
  // SYSTEM SETTING
  // =========================
  system_setting_title: "Cài đặt",
  system_setting_co2e_convert_title: "Chỉ số phát thải quy đổi CO₂E từng loại",
  system_setting_co2e_convert_description:
    "Cấu hình hệ số quy đổi lượng phát thải khí nhà kính (CO₂e) cho từng nguồn năng lượng",
  system_setting_co2e_convert_factors: "Hệ số phát thải",
  system_setting_co2e_convert_electricity: "Điện năng",
  system_setting_co2e_convert_water: "Nước",
  system_setting_co2e_convert_air: "Khí",

  system_setting_electricity_price_title: "Cài đặt Đơn giá điện & Khung giờ",
  system_setting_electricity_price_description:
    "Nhập đơn giá điện (VNĐ/kWh) và thiết lập trực tiếp các khung giờ áp dụng tương ứng",
  system_setting_electricity_price_add_tier: "Thêm bậc giá",
  system_setting_electricity_price_add_tier_success:
    "Bậc giá đã được thêm thành công!",
  system_setting_electricity_price_add_tier_failed: "Thêm bậc giá thất bại!",
  system_setting_electricity_price_tier_title: "Tên bậc giá",
  system_setting_electricity_price_tier_price: "Đơn giá (VNĐ/kWh)",
  system_setting_electricity_price_tier_time: "Khung giờ áp dụng",
  system_setting_electricity_price_tier_time_add: "Thêm khung giờ",
  system_setting_electricity_price_tier_time_add_success:
    "Thêm khung giờ thành công!",
  system_setting_electricity_price_tier_time_add_failed:
    "Thêm khung giờ thất bại!",
  system_setting_electricity_price_tier_time_add_success:
    "Khung giờ đã được thêm thành công!",
  system_setting_electricity_price_tier_time_add_failed:
    "Thêm khung giờ thất bại!",
  system_setting_electricity_price_tier_time_delete: "Xóa",
  system_setting_electricity_price_tier_time_delete_confirm:
    "Bạn có chắc chắn muốn xóa khung giờ này không?",
  system_setting_electricity_price_tier_time_delete_confirm_alert_success:
    "Đã xóa khung giờ thành công!",
  system_setting_electricity_price_tier_time_delete_confirm_alert_failed:
    "Đã xóa khung giờ thất bại!",
  system_setting_electricity_price_tier_save: "Lưu thông số cài đặt",
  system_setting_electricity_price_tier_save_success:
    "Đã lưu thông số cài đặt hệ thống thành công! Dữ liệu tính toán phát thải & chi phí đa tự động cập nhật.",
  system_setting_electricity_price_tier_delete: "Xóa bậc giá này",
  system_setting_electricity_price_tier_delete_confirm:
    "Bạn có chắc chắn muốn xóa bậc giá này không?",
  system_setting_electricity_price_tier_delete_confirm_alert_success:
    "Đã xóa bậc giá thành công!",
  system_setting_electricity_price_tier_delete_confirm_alert_failed:
    "Đã xóa bậc giá thất bại!",
};

export const messages = {
  en: enMessages,
  vi: viMessages,
};
