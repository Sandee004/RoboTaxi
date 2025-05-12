"use client";

import { useState } from "react";
import { Progress } from "@/components/ui/progress";

export default function TokenomicsSection() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="bg-yellow-400 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-black uppercase tracking-tight text-black md:text-5xl">
            TOKENOMICS
          </h2>
          <p className="mx-auto max-w-2xl text-xl font-bold text-black">
            MONKE has a fair and transparent tokenomics structure designed for
            long-term growth
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="mb-6 text-2xl font-black uppercase text-black">
              TOKEN DISTRIBUTION
            </h3>

            <div className="space-y-6">
              <div>
                <div className="mb-2 flex justify-between">
                  <span className="text-lg font-bold text-black">
                    Community & Airdrop
                  </span>
                  <span className="text-lg font-bold text-black">50%</span>
                </div>
                <Progress
                  value={50}
                  className="h-4 bg-gray-200"
                  indicatorClassName="bg-yellow-500"
                />
              </div>

              <div>
                <div className="mb-2 flex justify-between">
                  <span className="text-lg font-bold text-black">
                    Liquidity Pool
                  </span>
                  <span className="text-lg font-bold text-black">30%</span>
                </div>
                <Progress
                  value={30}
                  className="h-4 bg-gray-200"
                  indicatorClassName="bg-red-500"
                />
              </div>

              <div>
                <div className="mb-2 flex justify-between">
                  <span className="text-lg font-bold text-black">
                    Team & Development
                  </span>
                  <span className="text-lg font-bold text-black">10%</span>
                </div>
                <Progress
                  value={10}
                  className="h-4 bg-gray-200"
                  indicatorClassName="bg-blue-500"
                />
              </div>

              <div>
                <div className="mb-2 flex justify-between">
                  <span className="text-lg font-bold text-black">
                    Marketing
                  </span>
                  <span className="text-lg font-bold text-black">10%</span>
                </div>
                <Progress
                  value={10}
                  className="h-4 bg-gray-200"
                  indicatorClassName="bg-green-500"
                />
              </div>
            </div>
          </div>

          <div className="rounded-xl border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="mb-6 text-2xl font-black uppercase text-black">
              TOKEN INFO
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between border-b-2 border-dashed border-gray-300 pb-2">
                <span className="text-lg font-bold text-black">Token Name</span>
                <span className="text-lg font-bold text-black">MONKE</span>
              </div>

              <div className="flex justify-between border-b-2 border-dashed border-gray-300 pb-2">
                <span className="text-lg font-bold text-black">
                  Token Symbol
                </span>
                <span className="text-lg font-bold text-black">$MONKE</span>
              </div>

              <div className="flex justify-between border-b-2 border-dashed border-gray-300 pb-2">
                <span className="text-lg font-bold text-black">
                  Total Supply
                </span>
                <span className="text-lg font-bold text-black">
                  1,000,000,000
                </span>
              </div>

              <div className="flex justify-between border-b-2 border-dashed border-gray-300 pb-2">
                <span className="text-lg font-bold text-black">Blockchain</span>
                <span className="text-lg font-bold text-black">Solana</span>
              </div>

              <div className="flex justify-between">
                <span className="text-lg font-bold text-black">Tax</span>
                <span className="text-lg font-bold text-black">
                  0% Buy / 0% Sell
                </span>
              </div>
            </div>

            <div className="mt-8">
              <div
                className="relative overflow-hidden rounded-lg bg-yellow-300 p-4 text-center"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div
                  className={`absolute inset-0 bg-[url('/banana.png')] bg-repeat opacity-10 transition-transform duration-1000 ${
                    isHovering ? "scale-110" : "scale-100"
                  }`}
                ></div>
                <p className="relative z-10 text-xl font-black uppercase text-black">
                  NO TAXES, NO NONSENSE, JUST MONKE BUSINESS!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
