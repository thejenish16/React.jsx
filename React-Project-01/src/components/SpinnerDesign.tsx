interface Segment {
  color: string;
  text: string;
}

interface SpinnerDesignProps {
  segments: Segment[];
  rotation: number;
  spinWheel: () => void;
  isSpinning: boolean;
  result: string;
  showPopup: boolean;
  closePopup: () => void;
}

const SpinnerDesign = ({
  segments,
  rotation,
  spinWheel,
  isSpinning,
  result,
  showPopup,
  closePopup
}: SpinnerDesignProps) => {

  const angle = 360 / segments.length;

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-400">

      <div className="flex flex-col items-center gap-10">

        <div className="relative w-[450px] h-[450px]">

          {/* WHEEL */}
          <div className="absolute inset-0 rounded-full border-[12px] border-blue-900 shadow-2xl overflow-hidden">

            <div
              className="w-full h-full"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: isSpinning
                  ? "transform 4s cubic-bezier(.17,.67,.83,.67)"
                  : "none"
              }}
            >

              {/* SEGMENTS */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(
                    ${segments
                      .map(
                        (seg, i) =>
                          `${seg.color} ${i * angle}deg ${(i + 1) * angle}deg`
                      )
                      .join(",")}
                  )`
                }}
              />

              {/* DIVIDER LINES */}
              {segments.map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-full"
                  style={{ transform: `rotate(${i * angle}deg)` }}
                >
                  <div className="absolute top-0 left-1/2 w-[2px] h-full bg-white/40 -translate-x-1/2"></div>
                </div>
              ))}

              {/* TEXT */}
              {segments.map((segment, i) => (
                <div
                  key={i}
                  className="absolute w-full h-full flex justify-center"
                  style={{
                    transform: `rotate(${i * angle + angle / 2}deg)`
                  }}
                >
                  <div className="absolute top-16 text-white font-bold text-sm">
                    {segment.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CENTER BUTTON */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={spinWheel}
              disabled={isSpinning}
              className="w-28 h-28 rounded-full bg-purple-600 text-white text-xl font-bold shadow-xl hover:scale-110 transition disabled:opacity-50"
            >
              SPIN
            </button>
          </div>

          {/* LEFT SIDE ARROW */}
          <div className="absolute top-1/2 -left-8 -translate-y-1/2 z-20">
            <div className="w-0 h-0 border-t-[25px] border-t-transparent border-b-[25px] border-b-transparent border-r-[45px] border-r-yellow-400"></div>
          </div>

        </div>

        {/* POPUP */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/60">

            <div className="bg-white p-10 rounded-xl text-center shadow-2xl">

              <h2 className="text-3xl font-bold mb-4">
                🎉 Congratulations
              </h2>

              <p className="text-2xl mb-6">
                You Won <span className="font-bold">{result}</span>
              </p>

              <button
                onClick={closePopup}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg"
              >
                Close
              </button>

            </div>

          </div>
        )}

      </div>

    </div>
  );
};

export default SpinnerDesign;