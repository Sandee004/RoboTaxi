const Roadmap = () => {
  return (
    <div
      id="roadmap"
      className="bg-[#0cc0df] pt-24 border-b border-[#39437E] pb-12 gap-5 items-center justify-center flex flex-col md:flex-row px-5 md:px-8"
    >
      <div className="md:w-1/2">
        <img src="/roadmap.jpg" className="" />
      </div>

      <div className="md:w-1/2 border-2 border-[#39437E] w-fit p-6">
        <h2 className="text-2xl font-extrabold text-[#0a3d4d] mb-4 border-b-2 border-[#39437E] pb-2">
          🚀 Roadmap
        </h2>
        <div className="space-y-3 text-[#0a3d4d]">
          <p className="text-lg font-semibold">
            ✅ Phase 1: <span className="font-normal">Meme Phase</span>
          </p>
          <p className="text-lg font-semibold">
            🔥 Phase 2: <span className="font-normal">Vibe and HODL Phase</span>
          </p>
          <p className="text-lg font-semibold">
            📢 Phase 3:{" "}
            <span className="font-normal">Huge Marketing Phase</span>
          </p>
          <p className="text-lg font-semibold">
            👑 Phase 4: <span className="font-normal">Meme Takeover</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
