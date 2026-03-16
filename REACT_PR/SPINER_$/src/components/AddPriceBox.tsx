import { useState } from "react";

type AddPriceBoxProps = {
  storedPrice: number;
  title: string;
};

function AddPriceBox({ storedPrice, title }: AddPriceBoxProps) {
  const [price1, setPrice1] = useState("");
  const [price2, setPrice2] = useState("");
  const [total, setTotal] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [focus1, setFocus1] = useState(false);
  const [focus2, setFocus2] = useState(false);

  const handleAdd = () => {
    const p1 = parseFloat(price1) || 0;
    const p2 = parseFloat(price2) || 0;
    setTotal(p1 + p2 + storedPrice);
  };

  return (
    <>
      <style>{`
        @keyframes expandIn {
          from { opacity:0; transform:translateY(-8px); }
          to { opacity:1; transform:translateY(0); }
        }
        @keyframes totalReveal {
          0%{transform:scale(0.8) translateY(6px);opacity:0}
          70%{transform:scale(1.05)}
          100%{transform:scale(1) translateY(0);opacity:1}
        }
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button { -webkit-appearance:none; }
      `}</style>

      <div style={{
        width: "248px",
        borderRadius: "20px",
        padding: "18px 20px",
        background: isOpen
          ? "linear-gradient(135deg, rgba(79,70,229,0.14), rgba(124,58,237,0.08))"
          : "rgba(255,255,255,0.04)",
        backdropFilter: "blur(16px)",
        border: `1.5px solid ${isOpen ? "rgba(129,140,248,0.4)" : "rgba(255,255,255,0.08)"}`,
        boxShadow: isOpen
          ? "0 12px 40px rgba(79,70,229,0.2), inset 0 1px 0 rgba(255,255,255,0.06)"
          : "0 4px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04)",
        transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
        userSelect: "none",
      }}>

        {/* Header */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{
              width: "8px", height: "8px", borderRadius: "50%",
              background: isOpen ? "#818cf8" : "#374151",
              boxShadow: isOpen ? "0 0 8px #818cf8" : "none",
              transition: "all 0.3s",
            }} />
            <span style={{ fontWeight: 700, fontSize: "14px", color: "#e0e7ff" }}>{title}</span>
          </div>
          <div style={{
            fontSize: "11px",
            color: isOpen ? "#818cf8" : "#4b5563",
            background: isOpen ? "rgba(129,140,248,0.12)" : "rgba(255,255,255,0.05)",
            border: `1px solid ${isOpen ? "rgba(129,140,248,0.25)" : "rgba(255,255,255,0.06)"}`,
            padding: "3px 10px",
            borderRadius: "20px",
            transition: "all 0.3s",
            fontWeight: 600,
          }}>
            {isOpen ? "▲" : "▼"}
          </div>
        </div>

        {isOpen && (
          <div style={{ marginTop: "16px", animation: "expandIn 0.3s ease" }}>
            <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "14px" }} />

            {/* Stored Price chip */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "rgba(167,139,250,0.08)",
              border: "1px solid rgba(167,139,250,0.15)",
              borderRadius: "10px",
              padding: "8px 12px",
              marginBottom: "12px",
            }}>
              <span style={{ fontSize: "11px", color: "#6b7280", letterSpacing: "0.5px", textTransform: "uppercase" }}>Stored</span>
              <span style={{ fontSize: "15px", fontWeight: 800, color: "#a78bfa" }}>₹{storedPrice}</span>
            </div>

            {/* Inputs */}
            {[
              { val: price1, set: setPrice1, ph: "Price 1", foc: focus1, setFoc: setFocus1 },
              { val: price2, set: setPrice2, ph: "Price 2", foc: focus2, setFoc: setFocus2 },
            ].map(({ val, set, ph, foc, setFoc }, i) => (
              <input
                key={i}
                type="number"
                placeholder={ph}
                value={val}
                onClick={(e) => e.stopPropagation()}
                onFocus={() => setFoc(true)}
                onBlur={() => setFoc(false)}
                onChange={(e) => set(e.target.value)}
                style={{
                  width: "100%",
                  padding: "9px 12px",
                  borderRadius: "11px",
                  border: `1.5px solid ${foc ? "rgba(129,140,248,0.6)" : "rgba(255,255,255,0.08)"}`,
                  background: foc ? "rgba(79,70,229,0.1)" : "rgba(255,255,255,0.05)",
                  color: "#e0e7ff",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                  marginTop: i === 1 ? "8px" : "0",
                  transition: "border 0.2s, background 0.2s",
                  boxShadow: foc ? "0 0 0 3px rgba(79,70,229,0.15)" : "none",
                }}
              />
            ))}

            {/* Add Button */}
            <button
              onClick={(e) => { e.stopPropagation(); handleAdd(); }}
              style={{
                marginTop: "10px",
                width: "100%",
                padding: "10px",
                background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                color: "#fff",
                border: "none",
                borderRadius: "11px",
                fontSize: "14px",
                cursor: "pointer",
                fontWeight: 700,
                boxShadow: "0 4px 16px rgba(79,70,229,0.35)",
                transition: "transform 0.15s, box-shadow 0.15s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0 6px 24px rgba(79,70,229,0.55)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(79,70,229,0.35)";
              }}
            >
              ➕ Calculate
            </button>

            {/* Total */}
            {total !== null && (
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "12px",
                background: "rgba(74,222,128,0.08)",
                border: "1px solid rgba(74,222,128,0.2)",
                borderRadius: "12px",
                padding: "10px 14px",
                animation: "totalReveal 0.4s cubic-bezier(0.34,1.56,0.64,1)",
              }}>
                <span style={{ fontSize: "11px", color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.5px" }}>Total</span>
                <span style={{ fontSize: "24px", fontWeight: 900, color: "#4ade80", lineHeight: 1 }}>₹{total}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default AddPriceBox;
