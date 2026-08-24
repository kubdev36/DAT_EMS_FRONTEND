import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { LuChevronLeft } from "react-icons/lu";
import { electricDetailData } from "../../../../Data/Data";
import "./ElectricDetail.scss";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function ElectricDetail() {
  const navigate = useNavigate();
  const { nodeId } = useParams();
  const detail = electricDetailData[Number(nodeId)] || electricDetailData[nodeId] || electricDetailData[1];

  const chartData = {
    labels: detail.chart.map((item) => item.time),
    datasets: [
      {
        label: "kW",
        data: detail.chart.map((item) => item.kw),
        borderColor: "#b455ff",
        borderWidth: 2.5,
        backgroundColor: "transparent",
        tension: 0.4,
        pointBackgroundColor: "#b455ff",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 1,
        pointRadius: 4,
        pointHoverRadius: 6,
        fill: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "rgba(10, 18, 42, 0.9)",
        titleColor: "#93c5fd",
        bodyColor: "#fff",
        borderColor: "rgba(0, 130, 202, 0.5)",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Thời gian",
          color: "#7d8fa6",
          font: { size: 11 },
          padding: { top: 8 },
        },
        ticks: { color: "#7d8fa6", font: { size: 10 } },
        grid: { display: false },
      },
      y: {
        title: {
          display: true,
          text: "kW",
          color: "#7d8fa6",
          font: { size: 11 },
        },
        min: 0,
        max: 80,
        ticks: {
          stepSize: 20,
          color: "#7d8fa6",
          font: { size: 10 },
        },
        grid: {
          color: "rgba(255, 255, 255, 0.05)",
          drawBorder: false,
        },
      },
    },
  };

  return (
    <div className="DAT_ElectricDetail">
      {/* Header */}
      <div className="DAT_ElectricDetail_Header">
        <button
          type="button"
          className="DAT_WaterDetail_BackBtn"
          onClick={() => navigate(-1)}
        >
          <LuChevronLeft />
        </button>
        <h2>{detail.title}</h2>
      </div>

      {/* 4 Cards Grid */}
      <div className="DAT_ElectricDetail_Grid">
        {/* Card 1: Điện năng tiêu thụ */}
        <section className="DAT_ElectricDetail_Card">
          <h3 className="DAT_ElectricDetail_Card_TitleCyan">Điện năng tiêu thụ</h3>

          <div className="DAT_ElectricDetail_Energy_Section">
            <span className="DAT_ElectricDetail_Label">Tổng tích lũy</span>
            <div className="DAT_ElectricDetail_ValueRow">
              <strong className="DAT_ElectricDetail_BigNum">{detail.energy.total}</strong>
              <span className="DAT_ElectricDetail_Unit">kWh</span>
            </div>
          </div>

          <div className="DAT_ElectricDetail_Divider" />

          <div className="DAT_ElectricDetail_Energy_Section">
            <span className="DAT_ElectricDetail_Label">Hôm nay</span>
            <div className="DAT_ElectricDetail_ValueRow">
              <strong className="DAT_ElectricDetail_MidNum">{detail.energy.today}</strong>
              <span className="DAT_ElectricDetail_Unit">kWh</span>
            </div>
          </div>

          <div className="DAT_ElectricDetail_Divider" />

          <div className="DAT_ElectricDetail_Energy_Section">
            <span className="DAT_ElectricDetail_Label">Tháng này</span>
            <div className="DAT_ElectricDetail_ValueRow">
              <strong className="DAT_ElectricDetail_MidNum">{detail.energy.month}</strong>
              <span className="DAT_ElectricDetail_Unit">kWh</span>
            </div>
          </div>
        </section>

        {/* Card 2: 3 Khối Công suất */}
        <div className="DAT_ElectricDetail_PowersCol">
          {detail.powers.map((p, idx) => (
            <section key={idx} className="DAT_ElectricDetail_Card DAT_ElectricDetail_PowerCard">
              <h3 className="DAT_ElectricDetail_Card_TitleCyan">{p.label}</h3>
              <div className="DAT_ElectricDetail_ValueRow">
                <strong className="DAT_ElectricDetail_BigNum">{p.value}</strong>
                <span className="DAT_ElectricDetail_Unit">{p.unit}</span>
              </div>
            </section>
          ))}
        </div>

        {/* Card 3: ĐIỆN ÁP & DÒNG ĐIỆN 3 PHA */}
        <section className="DAT_ElectricDetail_Card DAT_ElectricDetail_PhaseCard">
          <h3>ĐIỆN ÁP & DÒNG ĐIỆN 3 PHA</h3>
          <div className="DAT_ElectricDetail_PhaseColHeader">
            <span>Điện áp (V)</span>
            <span>Dòng điện (A)</span>
          </div>

          <div className="DAT_ElectricDetail_PhaseList">
            {detail.phases.map((phase) => (
              <div key={phase.phase} className="DAT_ElectricDetail_PhaseItem">
                <div className="DAT_ElectricDetail_BadgeCol">
                  <div className={`DAT_ElectricDetail_Badge DAT_ElectricDetail_Badge_${phase.color}`}>
                    {phase.phase}
                  </div>
                  <small>{phase.subLabel}</small>
                </div>

                <div className="DAT_ElectricDetail_MetricCol">
                  <div className="DAT_ElectricDetail_MetricVal">
                    <strong>{phase.voltage}</strong>
                    <span>V</span>
                  </div>
                  <div className={`DAT_ElectricDetail_Bar DAT_ElectricDetail_Bar_${phase.color}`} />
                </div>

                <div className="DAT_ElectricDetail_MetricCol">
                  <div className="DAT_ElectricDetail_MetricVal">
                    <strong>{phase.current}</strong>
                    <span>A</span>
                  </div>
                  <div className="DAT_ElectricDetail_Bar DAT_ElectricDetail_Bar_orange" />
                </div>
              </div>
            ))}
          </div>

          <div className="DAT_ElectricDetail_CardLegend">
            <span className="dot dot-purple"></span>
            <label>Điện áp 3 pha</label>
            <span className="dot dot-orange"></span>
            <label>Dòng điện 3 pha</label>
          </div>
        </section>

        {/* Card 4: CHẤT LƯỢNG ĐIỆN NĂNG */}
        <section className="DAT_ElectricDetail_Card DAT_ElectricDetail_PhaseCard">
          <h3>CHẤT LƯỢNG ĐIỆN NĂNG</h3>
          <div className="DAT_ElectricDetail_PhaseColHeader">
            <span>THDv (%)</span>
            <span>THDi (%)</span>
          </div>

          <div className="DAT_ElectricDetail_PhaseList">
            {detail.quality.map((phase) => (
              <div key={phase.phase} className="DAT_ElectricDetail_PhaseItem">
                <div className="DAT_ElectricDetail_BadgeCol">
                  <div className={`DAT_ElectricDetail_Badge DAT_ElectricDetail_Badge_${phase.color}`}>
                    {phase.phase}
                  </div>
                  <small>{phase.subLabel}</small>
                </div>

                <div className="DAT_ElectricDetail_MetricCol">
                  <div className="DAT_ElectricDetail_MetricVal">
                    <strong>{phase.thdv}</strong>
                    <span>%</span>
                  </div>
                  <div className="DAT_ElectricDetail_Bar DAT_ElectricDetail_Bar_purple" />
                </div>

                <div className="DAT_ElectricDetail_MetricCol">
                  <div className="DAT_ElectricDetail_MetricVal">
                    <strong>{phase.thdi}</strong>
                    <span>%</span>
                  </div>
                  <div className="DAT_ElectricDetail_Bar DAT_ElectricDetail_Bar_orange" />
                </div>
              </div>
            ))}
          </div>

          <div className="DAT_ElectricDetail_CardLegend">
            <span className="dot dot-purple"></span>
            <label>THDv</label>
            <span className="dot dot-orange"></span>
            <label>THDi</label>
          </div>
        </section>
      </div>

      {/* Chart Section */}
      <section className="DAT_ElectricDetail_Card DAT_ElectricDetail_ChartCard">
        <h3 className="DAT_ElectricDetail_ChartTitle">Đồ thị công suất tức thời</h3>
        <p className="DAT_ElectricDetail_ChartSub">Theo dõi công suất tức thời 24h (kW)</p>
        <div className="DAT_ElectricDetail_ChartWrap">
          <Line data={chartData} options={chartOptions} />
        </div>
      </section>
    </div>
  );
}