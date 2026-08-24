import React from "react";
import { LuChevronLeft } from "react-icons/lu";
import { useNavigate, useParams } from "react-router-dom";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { waterDiagramData, waterDetailData } from "../../../../Data/Data";
import "./WaterDetail.scss";

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    const val = Number(payload[0].value).toFixed(1).replace(".", ",");
    return (
      <div className="DAT_WaterDetail_Tooltip">
        <span className="DAT_WaterDetail_Tooltip_Time">{label}</span>
        <span className="DAT_WaterDetail_Tooltip_Val">
          {val} <strong>m³/h</strong>
        </span>
      </div>
    );
  }
  return null;
}

export default function WaterDetail() {
  const navigate = useNavigate();
  const { nodeId } = useParams();

  // 1. Hàm đệ quy tìm Node trong Diagram Data
  const findNode = (nodes, targetId) => {
    for (const node of nodes) {
      if (String(node.id) === String(targetId) || node.data?.title === targetId) {
        return node;
      }
      if (node.children?.length) {
        const found = findNode(node.children, targetId);
        if (found) return found;
      }
    }
    return null;
  };

  const currentNode = findNode(waterDiagramData, nodeId);

  // 2. Tìm chi tiết: Ưu tiên khớp ID số -> ID chuỗi -> ID của Node tìm được -> Mặc định 1
  const detail =
    waterDetailData[Number(nodeId)] ||
    waterDetailData[nodeId] ||
    (currentNode ? waterDetailData[currentNode.id] : null) ||
    waterDetailData[1];

  const chartData = detail?.chart || [];

  return (
    <div className="DAT_WaterDetail">
      {/* Header */}
      <div className="DAT_WaterDetail_Header">
        <button
          type="button"
          className="DAT_WaterDetail_Header_BackBtn"
          onClick={() => navigate(-1)}
        >
          <LuChevronLeft />
        </button>
        <h2 className="DAT_WaterDetail_Header_Title">
          {detail?.title || `Giám sát chi tiết Nước ${currentNode?.data?.title || ""}`}
        </h2>
      </div>

      {/* 3 Stat Cards */}
      <div className="DAT_WaterDetail_StatCards">
        <div className="DAT_WaterDetail_StatCards_Card">
          <span className="DAT_WaterDetail_StatCards_Card_Label">Áp suất nước</span>
          <div className="DAT_WaterDetail_StatCards_Card_ValueGroup">
            <span className="DAT_WaterDetail_StatCards_Card_ValueGroup_Value">{detail?.pressure?.value}</span>
            <span className="DAT_WaterDetail_StatCards_Card_ValueGroup_Unit">{detail?.pressure?.unit}</span>
          </div>
          <span className="DAT_WaterDetail_StatCards_Card_Sub">{detail?.pressure?.desc}</span>
        </div>

        <div className="DAT_WaterDetail_StatCards_Card">
          <span className="DAT_WaterDetail_StatCards_Card_Label">Lưu lượng nước</span>
          <div className="DAT_WaterDetail_StatCards_Card_ValueGroup">
            <span className="DAT_WaterDetail_StatCards_Card_ValueGroup_Value">{detail?.flowRate?.value}</span>
            <span className="DAT_WaterDetail_StatCards_Card_ValueGroup_Unit">{detail?.flowRate?.unit}</span>
          </div>
          <span className="DAT_WaterDetail_StatCards_Card_Sub">{detail?.flowRate?.desc}</span>
        </div>

        <div className="DAT_WaterDetail_StatCards_Card">
          <span className="DAT_WaterDetail_StatCards_Card_Label">Tổng thể tích nước</span>
          <div className="DAT_WaterDetail_StatCards_Card_ValueGroup">
            <span className="DAT_WaterDetail_StatCards_Card_ValueGroup_Value">{detail?.totalVolume?.value}</span>
            <span className="DAT_WaterDetail_StatCards_Card_ValueGroup_Unit">{detail?.totalVolume?.unit}</span>
          </div>
          <span className="DAT_WaterDetail_StatCards_Card_Sub">{detail?.totalVolume?.desc}</span>
        </div>
      </div>

      {/* Đồ thị Recharts */}
      <div className="DAT_WaterDetail_ChartCard">
        <div className="DAT_WaterDetail_ChartCard_Header">
          <h3 className="DAT_WaterDetail_ChartCard_Header_Title">Đồ thị lưu lượng nước tức thời</h3>
          <p className="DAT_WaterDetail_ChartCard_Header_Sub">Theo dõi lưu lượng nước tức thời (m³/h)</p>
        </div>

        <div className="DAT_WaterDetail_ChartCard_Wrap">
          <ResponsiveContainer width="100%" height={260}>
            <LineChart
              data={chartData}
              margin={{ top: 15, right: 30, left: 0, bottom: 20 }}
            >
              <defs>
                <filter id="waterLineGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="rgba(34, 211, 238, 1)" floodOpacity="0.8" />
                </filter>
              </defs>

              <CartesianGrid
                strokeDasharray="4 4"
                stroke="rgba(255, 255, 255, 0.08)"
                vertical={false}
              />

              <YAxis
                domain={[0, 60]}
                ticks={[0, 15, 30, 45, 60]}
                stroke="rgba(255, 255, 255, 0.2)"
                tick={{ fill: "rgba(148, 163, 184, 1)", fontSize: 11, fontFamily: "monospace" }}
                axisLine={{ stroke: "rgba(255, 255, 255, 0.2)" }}
                tickLine={{ stroke: "rgba(255, 255, 255, 0.2)" }}
                label={{
                  value: "m³/h",
                  position: "insideLeft",
                  angle: -90,
                  offset: 10,
                  fill: "rgba(148, 163, 184, 1)",
                  fontSize: 11,
                }}
              />

              <XAxis
                dataKey="time"
                stroke="rgba(255, 255, 255, 0.2)"
                tick={{ fill: "rgba(148, 163, 184, 1)", fontSize: 11, fontFamily: "monospace" }}
                axisLine={{ stroke: "rgba(255, 255, 255, 0.2)" }}
                tickLine={false}
                dy={10}
                label={{
                  value: "Thời gian",
                  position: "insideBottom",
                  offset: -12,
                  fill: "rgba(148, 163, 184, 1)",
                  fontSize: 11,
                }}
              />

              <Tooltip
                content={<CustomTooltip />}
                cursor={{
                  stroke: "rgba(255, 255, 255, 0.6)",
                  strokeWidth: 1.5,
                }}
              />

              <Line
                type="monotone"
                dataKey="value"
                stroke="rgba(34, 211, 238, 1)"
                strokeWidth={3.5}
                dot={{
                  r: 4.5,
                  fill: "rgba(34, 211, 238, 1)",
                  stroke: "rgba(255, 255, 255, 1)",
                  strokeWidth: 2,
                }}
                activeDot={{
                  r: 7,
                  fill: "rgba(255, 255, 255, 1)",
                  stroke: "rgba(34, 211, 238, 1)",
                  strokeWidth: 3,
                }}
                filter="url(#waterLineGlow)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}