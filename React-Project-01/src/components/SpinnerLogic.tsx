import { useState } from "react";
import SpinnerDesign from "./SpinnerDesign";

const SpinnerLogic = () => {

    const segments = [
        { color: "#16a34a", text: "₹1Cr" },
        { color: "#facc15", text: "₹8Cr" },
        { color: "#dc2626", text: "₹5Cr" },
        { color: "#2563eb", text: "₹2Cr" },
        { color: "#9333ea", text: "₹7Cr" },
        { color: "#f97316", text: "₹9Cr" },
        { color: "#22c55e", text: "₹6Cr" },
        { color: "#a855f7", text: "₹4Cr" },
        { color: "#3b82f6", text: "₹10Cr" },
        { color: "#ef4444", text: "₹3Cr" }
    ];

    const [rotation, setRotation] = useState(0);
    const [isSpinning, setIsSpinning] = useState(false);
    const [result, setResult] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const spinWheel = () => {

        if (isSpinning) return;

        setIsSpinning(true);
        setShowPopup(false);

        const segmentAngle = 360 / segments.length;

        const randomIndex = Math.floor(Math.random() * segments.length);

        const stopAngle = randomIndex * segmentAngle + segmentAngle / 2;

        const spins = 360 * 5;

        const finalRotation = spins + stopAngle;

        setRotation(finalRotation);

        setTimeout(() => {

            setResult(segments[randomIndex].text);
            setShowPopup(true);
            setIsSpinning(false);

        }, 4000);

    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <SpinnerDesign
            segments={segments}
            rotation={rotation}
            spinWheel={spinWheel}
            isSpinning={isSpinning}
            result={result}
            showPopup={showPopup}
            closePopup={closePopup}
        />
    );
};

export default SpinnerLogic;