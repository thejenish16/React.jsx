import { useState, useEffect, useRef } from "react";
import PriceBox from "./components/PriceBox";
import { boxList } from "./components/BoxData";

function App() {
  const [total, setTotal] = useState(0);
  const [displayTotal, setDisplayTotal] = useState(0);
  const [reset, setReset] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [allOpened, setAllOpened] = useState(false);
  const [opened, setOpened] = useState(0);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; color: string }[]>([]);
  const animRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Smooth score tick-up
  useEffect(() => {
    if (animRef.current) clearTimeout(animRef.current);
    if (displayTotal === total) return;
    const diff = total - displayTotal;
    const step = Math.ceil(Math.abs(diff) / 12);
    animRef.current = setTimeout(() => {
      setDisplayTotal((p) => (diff > 0 ? Math.min(p + step, total) : Math.max(p - step, total)));
    }, 16);
  }, [displayTotal, total]);

  const spawnParticles = (x: number, y: number, win: boolean) => {
    const colors = win
      ? ["#4ade80", "#a78bfa", "#60a5fa", "#fbbf24", "#f472b6"]
      : ["#f87171", "#fb923c", "#fbbf24"];
    const newP = Array.from({ length: 18 }, (_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() - 0.5) * 200,
      y: y + (Math.random() - 0.5) * 200,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setParticles((p) => [...p, ...newP]);
    setTimeout(() => setParticles((p) => p.filter((pt) => !newP.find((n) => n.id === pt.id))), 900);
  };

  const handleOpen = (price: number | null, e?: React.MouseEvent) => {
    const newOpened = opened + 1;
    setOpened(newOpened);
    if (price === null) {
      setTotal(0);
      setDisplayTotal(0);
      setGameOver(true);
      if (e) spawnParticles(e.clientX, e.clientY, false);
    } else {
      setTotal((prev) => prev + price);
      if (e) spawnParticles(e.clientX, e.clientY, true);
      if (newOpened === boxList.filter((b) => b.price !== null).length) setAllOpened(true);
    }
  };

  const handleRestart = () => {
    setTotal(0);
    setDisplayTotal(0);
    setGameOver(false);
    setAllOpened(false);
    setOpened(0);
    setReset(true);
    setTimeout(() => setReset(false), 0);
  };

  const progress = (opened / boxList.length) * 100;

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0a0818 0%, #1a1040 50%, #0d1b2a 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Segoe UI', sans-serif",
      gap: "32px",
      padding: "24px",
      position: "relative",
      overflow: "hidden",
    }}>

      <style>{`
        @keyframes orbFloat1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(40px,-30px) scale(1.1)} }
        @keyframes orbFloat2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-30px,40px) scale(0.9)} }
        @keyframes orbFloat3 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(20px,20px)} }
        @keyframes particleFly {
          0% { transform: scale(1) translate(0,0); opacity: 1; }
          100% { transform: scale(0) translate(var(--tx), var(--ty)); opacity: 0; }
        }
        @keyframes scoreGlow {
          0%,100% { text-shadow: 0 0 20px rgba(74,222,128,0.4); }
          50% { text-shadow: 0 0 40px rgba(74,222,128,0.8), 0 0 80px rgba(74,222,128,0.3); }
        }
        @keyframes badGlow {
          0%,100% { text-shadow: 0 0 20px rgba(248,113,113,0.4); }
          50% { text-shadow: 0 0 40px rgba(248,113,113,0.9), 0 0 80px rgba(248,113,113,0.3); }
        }
        @keyframes winPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(74,222,128,0.4); }
          50% { box-shadow: 0 0 0 12px rgba(74,222,128,0); }
        }
        @keyframes slideUp {
          from { opacity:0; transform:translateY(16px); }
          to { opacity:1; transform:translateY(0); }
        }
        @keyframes badgePop {
          0% { transform:scale(0); opacity:0; }
          70% { transform:scale(1.15); }
          100% { transform:scale(1); opacity:1; }
        }
      `}</style>

      {/* Ambient orbs */}
      <div style={{ position:"fixed", inset:0, pointerEvents:"none", zIndex:0 }}>
        <div style={{ position:"absolute", top:"10%", left:"15%", width:"320px", height:"320px", borderRadius:"50%", background:"radial-gradient(circle, rgba(79,70,229,0.18) 0%, transparent 70%)", animation:"orbFloat1 8s ease-in-out infinite" }} />
        <div style={{ position:"absolute", bottom:"15%", right:"10%", width:"280px", height:"280px", borderRadius:"50%", background:"radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)", animation:"orbFloat2 10s ease-in-out infinite" }} />
        <div style={{ position:"absolute", top:"50%", left:"50%", width:"200px", height:"200px", borderRadius:"50%", background:"radial-gradient(circle, rgba(96,165,250,0.1) 0%, transparent 70%)", animation:"orbFloat3 6s ease-in-out infinite" }} />
      </div>

      {/* Particles */}
      {particles.map((p) => (
        <div key={p.id} style={{
          position: "fixed",
          left: p.x,
          top: p.y,
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: p.color,
          pointerEvents: "none",
          zIndex: 999,
          // @ts-ignore
          "--tx": `${(Math.random() - 0.5) * 120}px`,
          "--ty": `${(Math.random() - 0.5) * 120}px`,
          animation: "particleFly 0.8s ease-out forwards",
          boxShadow: `0 0 6px ${p.color}`,
        }} />
      ))}

      {/* Title */}
      <div style={{ textAlign: "center", zIndex: 1, animation: "slideUp 0.5s ease" }}>
        <h1 style={{
          margin: 0,
          fontSize: "32px",
          fontWeight: 900,
          background: "linear-gradient(90deg, #a78bfa, #60a5fa, #f472b6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}>
          🎰 Spin & Win
        </h1>
        <p style={{ color: "#4b5563", fontSize: "13px", margin: "6px 0 0", letterSpacing: "0.5px" }}>
          Open all boxes • Avoid the bomb
        </p>
      </div>

      {/* Score Card */}
      <div style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(20px)",
        border: `1px solid ${gameOver ? "rgba(248,113,113,0.3)" : allOpened ? "rgba(74,222,128,0.3)" : "rgba(255,255,255,0.08)"}`,
        borderRadius: "24px",
        padding: "28px 56px",
        textAlign: "center",
        boxShadow: gameOver
          ? "0 8px 40px rgba(248,113,113,0.15), inset 0 1px 0 rgba(255,255,255,0.05)"
          : "0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        zIndex: 1,
        animation: allOpened && !gameOver ? "winPulse 1.5s ease-in-out infinite" : "slideUp 0.5s ease 0.1s both",
        transition: "border 0.4s, box-shadow 0.4s",
        minWidth: "220px",
      }}>
        <p style={{ color: "#4b5563", fontSize: "11px", margin: "0 0 6px", letterSpacing: "2px", textTransform: "uppercase" }}>
          Total Collected
        </p>
        <p style={{
          margin: 0,
          fontSize: "64px",
          fontWeight: 900,
          color: gameOver ? "#f87171" : "#4ade80",
          lineHeight: 1,
          animation: gameOver ? "badGlow 1.5s ease-in-out infinite" : "scoreGlow 2s ease-in-out infinite",
          transition: "color 0.4s",
          fontVariantNumeric: "tabular-nums",
        }}>
          ₹{displayTotal}
        </p>

        {/* Progress bar */}
        <div style={{ marginTop: "16px", height: "4px", background: "rgba(255,255,255,0.06)", borderRadius: "4px", overflow: "hidden" }}>
          <div style={{
            height: "100%",
            width: `${progress}%`,
            background: gameOver ? "linear-gradient(90deg,#f87171,#fb923c)" : "linear-gradient(90deg,#4f46e5,#a78bfa)",
            borderRadius: "4px",
            transition: "width 0.5s ease",
          }} />
        </div>
        <p style={{ margin: "8px 0 0", color: "#374151", fontSize: "11px", letterSpacing: "0.5px" }}>
          {opened} / {boxList.length} opened
        </p>

        {gameOver && (
          <div style={{ marginTop: "10px", animation: "badgePop 0.4s ease" }}>
            <span style={{
              display: "inline-block",
              background: "rgba(248,113,113,0.15)",
              border: "1px solid rgba(248,113,113,0.3)",
              color: "#f87171",
              fontSize: "12px",
              fontWeight: 700,
              padding: "4px 14px",
              borderRadius: "20px",
              letterSpacing: "0.5px",
            }}>
              💀 BOOM — Reset!
            </span>
          </div>
        )}

        {allOpened && !gameOver && (
          <div style={{ marginTop: "10px", animation: "badgePop 0.4s ease" }}>
            <span style={{
              display: "inline-block",
              background: "rgba(74,222,128,0.12)",
              border: "1px solid rgba(74,222,128,0.3)",
              color: "#4ade80",
              fontSize: "12px",
              fontWeight: 700,
              padding: "4px 14px",
              borderRadius: "20px",
              letterSpacing: "0.5px",
            }}>
              🏆 You Won!
            </span>
          </div>
        )}
      </div>

      {/* Boxes */}
      {!reset && (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", zIndex: 1 }}>
          {boxList.map((box, i) => (
            <PriceBox key={box.id} box={box} onOpen={handleOpen} index={i} />
          ))}
        </div>
      )}

      {/* Restart */}
      <button
        onClick={handleRestart}
        style={{
          padding: "13px 40px",
          background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
          color: "#fff",
          border: "none",
          borderRadius: "50px",
          fontSize: "15px",
          fontWeight: 700,
          cursor: "pointer",
          letterSpacing: "0.5px",
          boxShadow: "0 4px 24px rgba(79,70,229,0.45)",
          transition: "transform 0.15s, box-shadow 0.15s",
          zIndex: 1,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "scale(1.06)";
          e.currentTarget.style.boxShadow = "0 6px 32px rgba(79,70,229,0.65)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 24px rgba(79,70,229,0.45)";
        }}
      >
        🔄 Restart
      </button>
    </div>
  );
}

export default App;
