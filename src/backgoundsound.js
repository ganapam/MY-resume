import { useRef, useEffect } from "react";

export default function BackgroundSound() {
  const audio = useRef(null);

  useEffect(() => {
    const a = audio.current;
    a.volume = 0.01; // 🔥 low pleasant volume

    a.play().catch(() => {
      document.addEventListener("click", () => a.play(), { once: true });
    });
  }, []);

  return (
    <audio
      ref={audio}
      src="https://raw.githubusercontent.com/ganapam/MY-resume/3ce51e5294b30c256e38322d1d7d0ed79b08546d/om-%5Bhindugodsongs.in%5D.mp3"
      loop
      autoPlay
    />
  );
}
