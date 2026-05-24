import { memo } from "react";

const NoiseOverlay = memo(function NoiseOverlay() {
  return (
    <div 
      className="pointer-events-none fixed inset-0 z-[9999] h-screen w-screen opacity-[0.02]"
      style={{
        backgroundImage: "url('data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%221%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')",
        backgroundRepeat: "repeat",
        backgroundSize: "200px 200px"
      }}
    />
  );
});

export default NoiseOverlay;
