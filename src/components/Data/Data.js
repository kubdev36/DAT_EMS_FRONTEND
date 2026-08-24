// ==========================================
// 1. DANH SÁCH DỰ ÁN (PROJECTS)
// ==========================================
export const projects = [
  {
    id: 1,
    name: "Nhà máy Embody Solar",
    address: "KCN VSIP II, Bình Dương",
    location: "Bình Dương",
    status: "Đang vận hành",
    createdAt: "12/06/2026",
  },
  {
    id: 2,
    name: "DAT Battery Lab",
    address: "Quận 7, TP. Hồ Chí Minh",
    location: "TP. Hồ Chí Minh",
    status: "Đang vận hành",
    createdAt: "18/06/2026",
  },
  {
    id: 3,
    name: "Kho lạnh Mekong",
    address: "KCN Trà Nóc, Cần Thơ",
    location: "Cần Thơ",
    status: "Cảnh báo",
    createdAt: "25/06/2026",
  },
  {
    id: 4,
    name: "Khu văn phòng Lotus",
    address: "Hải Châu, Đà Nẵng",
    location: "Đà Nẵng",
    status: "Cảnh báo",
    createdAt: "01/07/2026",
  },
  {
    id: 5,
    name: "Cụm xưởng Precision",
    address: "KCN Long Thành, Đồng Nai",
    location: "Đồng Nai",
    status: "Đang vận hành",
    createdAt: "08/07/2026",
  },
];

// ==========================================
// 2. HỆ THỐNG ĐIỆN (ELECTRIC)
// ==========================================
export const electricDiagramData = [
  {
    id: 1,
    data: {
      title: "MCB TỔNG 1",
      metrics: [
        { label: "NĂNG LƯỢNG:", value: "123,456", unit: "kWh" },
        { label: "CÔNG SUẤT:", value: "45.67", unit: "kW" },
      ],
    },
    children: [
      {
        id: 11,
        data: {
          title: "DEMO TRẠM KHÍ 1",
          metrics: [
            { label: "NĂNG LƯỢNG:", value: "17,660", unit: "Nm³" },
            { label: "CÔNG SUẤT:", value: "300.3", unit: "Nm³/h" },
          ],
        },
        children: [],
      },
      {
        id: 12,
        data: {
          title: "DEMO MOTO PMSM 1",
          metrics: [
            { label: "NĂNG LƯỢNG:", value: "12,345", unit: "kWh" },
            { label: "CÔNG SUẤT:", value: "5.23", unit: "kW" },
          ],
        },
        children: [],
      },
      {
        id: 14,
        data: {
          title: "DEMO BESS 1",
          metrics: [
            { label: "NĂNG LƯỢNG:", value: "1,850", unit: "kWh" },
            { label: "CÔNG SUẤT:", value: "25.0", unit: "kW" },
          ],
        },
        children: [],
      },
    ],
  },
  {
    id: 2,
    data: {
      title: "MCB TỔNG 2",
      metrics: [
        { label: "NĂNG LƯỢNG:", value: "98,720", unit: "kWh" },
        { label: "CÔNG SUẤT:", value: "38.12", unit: "kW" },
      ],
    },
    children: [
      {
        id: 21,
        data: {
          title: "DEMO TRẠM KHÍ 2",
          metrics: [
            { label: "NĂNG LƯỢNG:", value: "14,210", unit: "Nm³" },
            { label: "CÔNG SUẤT:", value: "245.0", unit: "Nm³/h" },
          ],
        },
        children: [],
      },
      {
        id: 22,
        data: {
          title: "DEMO MOTO PMSM 2",
          metrics: [
            { label: "NĂNG LƯỢNG:", value: "9,870", unit: "kWh" },
            { label: "CÔNG SUẤT:", value: "4.15", unit: "kW" },
          ],
        },
        children: [],
      },
      {
        id: 23,
        data: {
          title: "DEMO BESS 2",
          metrics: [
            { label: "NĂNG LƯỢNG:", value: "2,100", unit: "kWh" },
            { label: "CÔNG SUẤT:", value: "30.0", unit: "kW" },
          ],
        },
        children: [],
      },
    ],
  },
];

const defaultElectricDetail = {
  title: "Giám sát chi tiết Điện năng MCB TỔNG",
  energy: {
    total: "25.647,59",
    today: "89,99",
    month: "5.652,61",
  },
  powers: [
    { label: "Công suất tiêu thụ", value: "6,64", unit: "kW" },
    { label: "reactivePower", value: "4,25", unit: "kVAR" },
    { label: "apparentPower", value: "17,72", unit: "kVA" },
  ],
  phases: [
    { phase: "A", subLabel: "Pha A", color: "purple", voltage: "232,74", current: "8,15" },
    { phase: "B", subLabel: "Pha B", color: "green", voltage: "233,05", current: "12,51" },
    { phase: "C", subLabel: "Pha C", color: "cyan", voltage: "234,06", current: "8,89" },
  ],
  quality: [
    { phase: "A", subLabel: "Pha A", color: "purple", thdv: "1,82", thdi: "4,21" },
    { phase: "B", subLabel: "Pha B", color: "green", thdv: "2,05", thdi: "3,87" },
    { phase: "C", subLabel: "Pha C", color: "cyan", thdv: "1,64", thdi: "4,53" },
  ],
  chart: [
    { time: "00:00", kw: 34 },
    { time: "02:00", kw: 32 },
    { time: "04:00", kw: 34 },
    { time: "06:00", kw: 22 },
    { time: "08:00", kw: 55 },
    { time: "10:00", kw: 73 },
    { time: "12:00", kw: 65 },
    { time: "14:00", kw: 68 },
    { time: "16:00", kw: 59 },
    { time: "18:00", kw: 38 },
    { time: "20:00", kw: 24 },
    { time: "22:00", kw: 18 },
    { time: "24:00", kw: 16 },
  ],
};

export const electricDetailData = {
  1: { ...defaultElectricDetail, title: "Giám sát chi tiết Điện năng MCB TỔNG 1" },
  11: { ...defaultElectricDetail, title: "Giám sát chi tiết Điện năng DEMO TRẠM KHÍ 1" },
  12: { ...defaultElectricDetail, title: "Giám sát chi tiết Điện năng DEMO MOTO PMSM 1" },
  13: { ...defaultElectricDetail, title: "Giám sát chi tiết Điện năng DEMO SOLAR 1" },
  14: { ...defaultElectricDetail, title: "Giám sát chi tiết Điện năng DEMO BESS 1" },
  2: { ...defaultElectricDetail, title: "Giám sát chi tiết Điện năng MCB TỔNG 2" },
  21: { ...defaultElectricDetail, title: "Giám sát chi tiết Điện năng DEMO TRẠM KHÍ 2" },
  22: { ...defaultElectricDetail, title: "Giám sát chi tiết Điện năng DEMO MOTO PMSM 2" },
  23: { ...defaultElectricDetail, title: "Giám sát chi tiết Điện năng DEMO BESS 2" },
};

// ==========================================
// 3. HỆ THỐNG NƯỚC (WATER)
// ==========================================
export const waterDiagramData = [
  {
    id: 1,
    data: {
      title: "TRẠM TỔNG NƯỚC",
      metrics: [
        { label: "TỔNG TIÊU THỤ:", value: "1.860", unit: "m³" },
        { label: "LƯU LƯỢNG:", value: "72.8", unit: "m³/h" },
      ],
    },
    children: [
      {
        id: 101,
        data: {
          title: "DEMO 4 BƠM",
          metrics: [
            { label: "TỔNG TIÊU THỤ:", value: "1.240", unit: "m³" },
            { label: "LƯU LƯỢNG:", value: "48.5", unit: "m³/h" },
          ],
        },
        children: [],
      },
      {
        id: 102,
        data: {
          title: "DEMO 2 BƠM",
          metrics: [
            { label: "TỔNG TIÊU THỤ:", value: "620", unit: "m³" },
            { label: "LƯU LƯỢNG:", value: "24.3", unit: "m³/h" },
          ],
        },
        children: [],
      },
    ],
  },
  {
    id: 2,
    data: {
      title: "TRẠM TỔNG NƯỚC 2",
      metrics: [
        { label: "TỔNG TIÊU THỤ:", value: "2.450", unit: "m³" },
        { label: "LƯU LƯỢNG:", value: "95.0", unit: "m³/h" },
      ],
    },
    children: [
      {
        id: 201,
        data: {
          title: "DEMO 6 BƠM",
          metrics: [
            { label: "TỔNG TIÊU THỤ:", value: "1.850", unit: "m³" },
            { label: "LƯU LƯỢNG:", value: "68.2", unit: "m³/h" },
          ],
        },
        children: [],
      },
    ],
  },
];

const defaultWaterDetail = {
  title: "Giám sát chi tiết Nước TRẠM TỔNG NƯỚC",
  pressure: { value: "3,85", unit: "Bar", desc: "Áp suất đường ống" },
  flowRate: { value: "48,5", unit: "m³ /h", desc: "Lưu lượng tức thời" },
  totalVolume: { value: "1.240", unit: "m³", desc: "Thể tích tích lũy" },
  chart: [
    { time: "00:00", value: 31.0 },
    { time: "04:00", value: 28.2 },
    { time: "08:00", value: 52.4 },
    { time: "12:00", value: 48.5 },
    { time: "16:00", value: 55.1 },
    { time: "20:00", value: 40.0 },
  ],
};

export const waterDetailData = {
  1: { ...defaultWaterDetail, title: "Giám sát chi tiết Nước TRẠM TỔNG NƯỚC" },
  101: {
    title: "Giám sát chi tiết Nước DEMO 4 BƠM",
    pressure: { value: "3,80", unit: "Bar", desc: "Áp suất đầu đẩy" },
    flowRate: { value: "48,5", unit: "m³ /h", desc: "Lưu lượng trạm 4 bơm" },
    totalVolume: { value: "1.240", unit: "m³", desc: "Tổng lượng nước bơm" },
    chart: defaultWaterDetail.chart,
  },
  102: {
    title: "Giám sát chi tiết Nước DEMO 2 BƠM",
    pressure: { value: "2,95", unit: "Bar", desc: "Áp suất đầu đẩy" },
    flowRate: { value: "24,3", unit: "m³ /h", desc: "Lưu lượng trạm 2 bơm" },
    totalVolume: { value: "620", unit: "m³", desc: "Tổng lượng nước bơm" },
    chart: [
      { time: "00:00", value: 15.5 },
      { time: "04:00", value: 14.0 },
      { time: "08:00", value: 24.3 },
      { time: "12:00", value: 22.1 },
      { time: "16:00", value: 26.0 },
      { time: "20:00", value: 18.4 },
    ],
  },
  2: { ...defaultWaterDetail, title: "Giám sát chi tiết Nước TRẠM TỔNG NƯỚC 2" },
  201: { ...defaultWaterDetail, title: "Giám sát chi tiết Nước DEMO 6 BƠM" },
};
// ==========================================
// 4. HỆ THỐNG KHÍ NÉN (COMPRESSED AIR)
// ==========================================
export const compressedAirDiagramData = [
  {
    id: 1,
    data: {
      title: "TRẠM TỔNG KHÍ",
      metrics: [
        { label: "TỔNG TIÊU THỤ KHÍ", value: "17.660", unit: "Nm³" },
        { label: "LƯU LƯỢNG KHÍ", value: "300.3", unit: "Nm³/h" },
      ],
    },
    children: [
      {
        id: 101,
        data: {
          title: "TRẠM KHÍ NHÀ KÍNH",
          metrics: [
            { label: "TỔNG TIÊU THỤ KHÍ", value: "8.520", unit: "Nm³" },
            { label: "LƯU LƯỢNG KHÍ", value: "142.3", unit: "Nm³/h" },
          ],
        },
        children: [],
      },
      {
        id: 102,
        data: {
          title: "TRẠM KHÍ PHÂN XƯỞNG",
          metrics: [
            { label: "TỔNG TIÊU THỤ KHÍ", value: "9.140", unit: "Nm³" },
            { label: "LƯU LƯỢNG KHÍ", value: "158.0", unit: "Nm³/h" },
          ],
        },
        children: [],
      },
    ],
  },
];

const defaultAirDetail = {
  title: "Giám sát chi tiết Khí nén TRẠM TỔNG KHÍ",
  pressure: { value: "6,82", unit: "Bar", desc: "Áp suất đường ống" },
  flowRate: { value: "142,3", unit: "m³ /h", desc: "Lưu lượng tức thời" },
  totalVolume: { value: "8.520", unit: "Nm³", desc: "Thể tích tích lũy" },
  chart: [
    { time: "00:00", value: 110.5 },
    { time: "04:00", value: 105.0 },
    { time: "08:00", value: 152.4 },
    { time: "12:00", value: 142.3 },
    { time: "16:00", value: 158.0 },
    { time: "20:00", value: 125.0 },
  ],
};

export const compressedAirDetailData = {
  1: { ...defaultAirDetail, title: "Giám sát chi tiết Khí nén TRẠM TỔNG KHÍ" },
  101: {
    title: "Giám sát chi tiết Khí nén TRẠM KHÍ NHÀ KÍNH",
    pressure: { value: "6,82", unit: "Bar", desc: "Áp suất đường ống" },
    flowRate: { value: "142,3", unit: "m³ /h", desc: "Lưu lượng tức thời" },
    totalVolume: { value: "8.520", unit: "Nm³", desc: "Thể tích tích lũy" },
    chart: defaultAirDetail.chart,
  },
  102: {
    title: "Giám sát chi tiết Khí nén TRẠM KHÍ PHÂN XƯỞNG",
    pressure: { value: "7,15", unit: "Bar", desc: "Áp suất đường ống xưởng" },
    flowRate: { value: "158,0", unit: "m³ /h", desc: "Lưu lượng phân xưởng" },
    totalVolume: { value: "9.140", unit: "Nm³", desc: "Thể tích tích lũy" },
    chart: [
      { time: "00:00", value: 115.0 },
      { time: "04:00", value: 112.0 },
      { time: "08:00", value: 165.0 },
      { time: "12:00", value: 158.0 },
      { time: "16:00", value: 172.0 },
      { time: "20:00", value: 130.0 },
    ],
  },
};