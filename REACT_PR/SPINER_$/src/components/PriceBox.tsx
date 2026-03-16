import { useState } from "react";
import type { BoxItem } from "./BoxData";

type PriceBoxProps = {
  box: BoxItem;
  onOpen: (price: number | null, e?: React.MouseEvent) => void;
  index: number;
};

function PriceBox({ box, onOpen, index }: PriceBoxProps) {
  const [opened, setOpened] = useState(false);
  const [shake, setShake] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleTap = (e: React.MouseEvent) => {
    if (opened || shake) return;
    setShake(true);
    setTimeout(() => {
      setShake(false);
      setOpened(true);
      onOpen(box.price, e);
    }, 320);
  };

  const isBomb = box.price === null;

  return (
    <>
      <style>{`
        @keyframes shakeBox {
          0%,100%{transform:translateX(0) rotate(0)}
          20%{transform:translateX(-7px) rotate(-4deg)}
          40%{transform:translateX(7px) rotate(4deg)}
          60%{transform:translateX(-4px) rotate(-2deg)}
          80%{transform:translateX(4px) rotate(2deg)}
        }
        @keyframes revealPop {
          0%{transform:scale(0.5) rotate(-8deg);opacity:0}
          65%{transform:scale(1.12) rotate(2deg)}
          100%{transform:scale(1) rotate(0);opacity:1}
        }
        @keyframes floatGlow {
          0%,100%{box-shadow:0 8px 24px rgba(79,70,229,0.35),0 0 0 0 rgba(79,70,229,0.2)}
          50%{box-shadow:0 12px 36px rgba(79,70,229,0.55),0 0 0 8px rgba(79,70,229,0.05)}
        }
        @keyframes bombGlow {
          0%,100%{box-shadow:0 8px 24px rgba(248,113,113,0.4)}
          50%{box-shadow:0 12px 40px rgba(248,113,113,0.7),0 0 0 8px rgba(248,113,113,0.05)}
        }
        @keyframes staggerIn {
          from{opacity:0;transform:translateY(24px) scale(0.9)}
          to{opacity:1;transform:translateY(0) scale(1)}
        }
        @keyframes giftBounce {
          0%,100%{transform:translateY(0) scale(1)}
          50%{transform:translateY(-6px) scale(1.08)}
        }
        @keyframes shimmer {
          0%{transform:translateX(-100%) rotate(25deg)}
          100%{transform:translateX(200%) rotate(25deg)}
        }
      `}</style>

      <div
        onClick={handleTap}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: "155px",
          height: "155px",
          borderRadius: "22px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          cursor: opened ? "default" : "pointer",
          background: opened
            ? isBomb
              ? "linear-gradient(135deg, rgba(239,68,68,0.2), rgba(220,38,38,0.1))"
              : "linear-gradient(135deg, rgba(79,70,229,0.2), rgba(124,58,237,0.1))"
            : "linear-gradient(135deg, #4f46e5 0%, #7c3aed 60%, #6d28d9 100%)",
          border: `2px solid ${
            opened
              ? isBomb ? "rgba(248,113,113,0.5)" : "rgba(129,140,248,0.5)"
              : hovered ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.15)"
          }`,
          backdropFilter: "blur(12px)",
          transition: "transform 0.2s ease, border 0.3s",
          transform: shake
            ? "none"
            : hovered && !opened
            ? "translateY(-6px) scale(1.04)"
            : "translateY(0) scale(1)",
          animation: shake
            ? "shakeBox 0.32s ease"
            : opened
            ? isBomb ? "bombGlow 1.5s ease-in-out infinite" : "none"
            : "floatGlow 2.5s ease-in-out infinite, staggerIn 0.5s ease both",
          animationDelay: shake || opened ? "0s" : `${index * 0.12}s`,
          userSelect: "none",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Shimmer on hover */}
        {!opened && hovered && (
          <div style={{
            position: "absolute",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)",
            animation: "shimmer 0.6s ease forwards",
            pointerEvents: "none",
          }} />
        )}

        {/* Shine dot */}
        {!opened && (
          <div style={{
            position: "absolute",
            top: "12%", left: "14%",
            width: "28%", height: "28%",
            background: "radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }} />
        )}

        {!opened && (
          <span style={{
            fontSize: "44px",
            filter: "drop-shadow(0 3px 8px rgba(0,0,0,0.4))",
            animation: hovered ? "giftBounce 0.5s ease infinite" : "none",
            display: "block",
          }}>🎁</span>
        )}

        {opened && !isBomb && (
          <div style={{ animation: "revealPop 0.45s cubic-bezier(0.34,1.56,0.64,1)", textAlign: "center" }}>
            <div style={{
              fontSize: "10px",
              color: "#a5b4fc",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: "4px",
            }}>{box.title}</div>
            <div style={{ fontSize: "32px", fontWeight: 900, color: "#e0e7ff", lineHeight: 1 }}>
              ₹{box.price}
            </div>
            <div style={{ fontSize: "20px", marginTop: "6px" }}>🎉</div>
          </div>
        )}

        {opened && isBomb && (
          <div style={{ animation: "revealPop 0.45s cubic-bezier(0.34,1.56,0.64,1)", textAlign: "center" }}>
            <div style={{ fontSize: "40px" }}>💀</div>
            <div style={{ fontSize: "12px", color: "#f87171", fontWeight: 800, letterSpacing: "1px", marginTop: "4px" }}>
              BOOM!
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default PriceBox;
