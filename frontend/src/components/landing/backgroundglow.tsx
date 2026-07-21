function BackgroundGlow() {
  return (
    <>
      {/* Left Ambient Glow */}
      <div
        className="
        absolute
        -left-32
        top-40
        h-80
        w-80
        rounded-full
        bg-violet-500/5
        blur-[120px]
        pointer-events-none
        "
      />

      {/* Right Main Glow */}
      <div
        className="
        absolute
        right-10
        top-10
        h-[560px]
        w-[560px]
        rounded-full
        bg-violet-500/10
        blur-[140px]
        pointer-events-none
        "
      />

      {/* Bright Core */}
      <div
        className="
        absolute
        right-44
        top-52
        h-44
        w-44
        rounded-full
        bg-violet-400/20
        blur-[70px]
        pointer-events-none
        "
      />
    </>
  );
}

export default BackgroundGlow;