export default function RoadmapSection() {
    return (
      <section className="bg-yellow-300 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-tight text-black md:text-5xl">ROADMAP</h2>
            <p className="mx-auto max-w-2xl text-xl font-bold text-black">
              Our journey to conquer the crypto jungle and beyond
            </p>
          </div>
  
          <div className="relative mx-auto max-w-4xl">
            {/* Line */}
            <div className="absolute left-4 top-0 h-full w-1 bg-black md:left-1/2 md:-ml-0.5"></div>
  
            {/* Phase 1 */}
            <div className="mb-12 md:flex md:items-center">
              <div className="relative ml-10 flex-1 rounded-xl border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:ml-0 md:mr-10">
                <div className="absolute -left-14 flex h-8 w-8 items-center justify-center rounded-full border-4 border-black bg-yellow-400 md:-left-4 md:left-auto md:-right-4">
                  <span className="text-lg font-black text-black">1</span>
                </div>
                <h3 className="mb-2 text-2xl font-black uppercase text-black">PHASE 1: LAUNCH</h3>
                <ul className="ml-6 list-disc space-y-2 text-lg font-medium text-gray-800">
                  <li>Website Launch</li>
                  <li>Social Media Setup</li>
                  <li>Community Building</li>
                  <li>Token Launch on Solana</li>
                  <li>Initial DEX Offering</li>
                </ul>
              </div>
              <div className="hidden md:block md:flex-1"></div>
            </div>
  
            {/* Phase 2 */}
            <div className="mb-12 md:flex md:items-center">
              <div className="hidden md:block md:flex-1"></div>
              <div className="relative ml-10 flex-1 rounded-xl border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:ml-10 md:mr-0">
                <div className="absolute -left-14 flex h-8 w-8 items-center justify-center rounded-full border-4 border-black bg-yellow-400 md:-left-4">
                  <span className="text-lg font-black text-black">2</span>
                </div>
                <h3 className="mb-2 text-2xl font-black uppercase text-black">PHASE 2: GROWTH</h3>
                <ul className="ml-6 list-disc space-y-2 text-lg font-medium text-gray-800">
                  <li>CEX Listings</li>
                  <li>Marketing Campaigns</li>
                  <li>Partnership Announcements</li>
                  <li>Community Expansion</li>
                  <li>MONKE Merchandise Store</li>
                </ul>
              </div>
            </div>
  
            {/* Phase 3 */}
            <div className="mb-12 md:flex md:items-center">
              <div className="relative ml-10 flex-1 rounded-xl border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:ml-0 md:mr-10">
                <div className="absolute -left-14 flex h-8 w-8 items-center justify-center rounded-full border-4 border-black bg-yellow-400 md:-left-4 md:left-auto md:-right-4">
                  <span className="text-lg font-black text-black">3</span>
                </div>
                <h3 className="mb-2 text-2xl font-black uppercase text-black">PHASE 3: UTILITY</h3>
                <ul className="ml-6 list-disc space-y-2 text-lg font-medium text-gray-800">
                  <li>MONKE NFT Collection</li>
                  <li>Staking Platform</li>
                  <li>DAO Governance</li>
                  <li>MONKE Mobile App</li>
                  <li>Ecosystem Expansion</li>
                </ul>
              </div>
              <div className="hidden md:block md:flex-1"></div>
            </div>
  
            {/* Phase 4 */}
            <div className="md:flex md:items-center">
              <div className="hidden md:block md:flex-1"></div>
              <div className="relative ml-10 flex-1 rounded-xl border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:ml-10 md:mr-0">
                <div className="absolute -left-14 flex h-8 w-8 items-center justify-center rounded-full border-4 border-black bg-yellow-400 md:-left-4">
                  <span className="text-lg font-black text-black">4</span>
                </div>
                <h3 className="mb-2 text-2xl font-black uppercase text-black">PHASE 4: DOMINATION</h3>
                <ul className="ml-6 list-disc space-y-2 text-lg font-medium text-gray-800">
                  <li>MONKE Metaverse</li>
                  <li>Cross-Chain Integration</li>
                  <li>Major Exchange Listings</li>
                  <li>Global Marketing Campaign</li>
                  <li>MONKE to the Moon! 🚀</li>
                </ul>
              </div>
            </div>
          </div>
  
          <div className="mt-16 text-center">
            <a
              href="#"
              className="inline-block transform rounded-md border-4 border-black bg-red-500 px-8 py-3 text-xl font-black uppercase text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
            >
              JOIN THE JOURNEY
            </a>
          </div>
        </div>
      </section>
    )
  }
  