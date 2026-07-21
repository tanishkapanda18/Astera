import { useEffect, useMemo, useState } from "react";

const WIDTH = 280;
const HEIGHT = 180;
const PADDING_X = 15;
const GRAPH_HEIGHT = 260;
const BASELINE = 132;

const initialPoints = [
  145, 122, 158, 112, 120, 108, 158, 92, 140, 82, 50, 90, 110, 145
];

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function createSmoothPath(points: number[]) {
  const step = (WIDTH - PADDING_X * 2) / (points.length - 1);

  let d = `M ${PADDING_X} ${points[0]}`;

  for (let i = 0; i < points.length - 1; i++) {
    const x1 = PADDING_X + i * step;
    const x2 = PADDING_X + (i + 1) * step;

    const y1 = points[i];
    const y2 = points[i + 1];

    const cx = (x1 + x2) / 2;

    d += ` C ${cx} ${y1}, ${cx} ${y2}, ${x2} ${y2}`;
  }

  return d;
}

export default function LineChart() {
  const [points, setPoints] = useState(initialPoints);

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((prev) => {
        const next = [...prev.slice(1)];

        const last = prev[prev.length - 1];

        const movement = (Math.random() - 0.35) * 26;

        const trend = -1;

        const nextValue = clamp(
          last + movement + trend,
          BASELINE - GRAPH_HEIGHT,
          BASELINE
        );

        next.push(nextValue);

        return next;
      });
    }, 1100);

    return () => clearInterval(interval);
  }, []);

  const linePath = useMemo(() => createSmoothPath(points), [points]);

  const areaPath = `${linePath}
L ${WIDTH - PADDING_X} 180
L ${PADDING_X} 180
Z`;

  const lastX = WIDTH - PADDING_X;
  const lastY = points[points.length - 1];

  return (
    <div className="mt-5">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-56 w-full overflow-visible"
        fill="none"
      >
        <defs>
          <linearGradient
            id="graphFill"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#22C55E"
              stopOpacity="0.34"
            />
            <stop
              offset="100%"
              stopColor="#22C55E"
              stopOpacity="0"
            />
          </linearGradient>

          <filter
            id="glow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur
              stdDeviation="1.6"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d={areaPath}
          fill="url(#graphFill)"
          style={{
            transition: "d .9s ease",
          }}
        />

        <path
          d={linePath}
          stroke="#22C55E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
          style={{
            transition: "d .9s ease",
          }}
        />

        <circle
          cx={lastX}
          cy={lastY}
          r="2.6"
          fill="#22C55E"
          filter="url(#glow)"
        />

        <text
          x="15"
          y="186"
          fill="#A2A8B3"
          fontSize="10"
        >
          Jan 1
        </text>

        <text
          x="118"
          y="186"
          fill="#A2A8B3"
          fontSize="10"
        >
          Jan 15
        </text>

        <text
          x="235"
          y="186"
          fill="#A2A8B3"
          fontSize="10"
        >
          Jan 30
        </text>
      </svg>
    </div>
  );
}