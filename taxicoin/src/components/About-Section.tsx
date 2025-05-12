import { Rocket, Shield, Zap } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="bg-yellow-300 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-black uppercase tracking-tight text-black md:text-5xl">ABOUT MONKE</h2>
          <p className="mx-auto max-w-2xl text-xl font-bold text-black">
            MONKE is not just a token, it's a movement. Join the wildest community in the Solana ecosystem!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="transform rounded-xl border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400">
              <Rocket className="h-8 w-8 text-black" />
            </div>
            <h3 className="mb-2 text-2xl font-black uppercase text-black">MOON MISSION</h3>
            <p className="text-lg font-medium text-gray-800">
              MONKE is on a mission to the moon and beyond. Our community-driven approach ensures everyone comes along
              for the ride.
            </p>
          </div>

          <div className="transform rounded-xl border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400">
              <Shield className="h-8 w-8 text-black" />
            </div>
            <h3 className="mb-2 text-2xl font-black uppercase text-black">STRONG SECURITY</h3>
            <p className="text-lg font-medium text-gray-800">
              Our token contract is audited and secure. We take security seriously so you can focus on having fun and
              making gains.
            </p>
          </div>

          <div className="transform rounded-xl border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400">
              <Zap className="h-8 w-8 text-black" />
            </div>
            <h3 className="mb-2 text-2xl font-black uppercase text-black">FAST TRANSACTIONS</h3>
            <p className="text-lg font-medium text-gray-800">
              Built on Solana, MONKE transactions are lightning fast and cost next to nothing. Trade, swap, and collect
              with ease.
            </p>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative max-w-3xl overflow-hidden rounded-xl border-4 border-black">
            <div className="bg-yellow-400 p-6 text-center">
              <h3 className="mb-4 text-3xl font-black uppercase text-black">JOIN THE MONKE ARMY</h3>
              <p className="mb-6 text-xl font-bold text-black">
                The wildest, most entertaining community in crypto. We don't just hold tokens, we build a movement.
              </p>
              <a
                href="#"
                className="inline-block transform rounded-md border-4 border-black bg-red-500 px-8 py-3 text-xl font-black uppercase text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              >
                BUY $MONKE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
