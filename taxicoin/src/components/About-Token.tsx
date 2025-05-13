import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react";

export default function AboutToken() {
  return (
    <section className="py-16 md:py-24" id="about">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-blue-800 sm:text-4xl">
            About CryptoNexus
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Revolutionizing the crypto space with innovative technology and a
            sustainable tokenomics model
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="order-2 space-y-6 md:order-1">
            <div className="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
              <h3 className="mb-4 text-xl font-bold text-blue-700">
                Tokenomics
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <span className="font-medium text-gray-700">
                    Total Supply
                  </span>
                  <span className="font-bold text-blue-800">1,000,000,000</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <span className="font-medium text-gray-700">
                    Circulating Supply
                  </span>
                  <span className="font-bold text-blue-800">450,000,000</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <span className="font-medium text-gray-700">
                    Initial Price
                  </span>
                  <span className="font-bold text-blue-800">$0.015</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">
                    Current Price
                  </span>
                  <span className="font-bold text-yellow-500">$0.032</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-blue-50 p-5 transition-all duration-300 hover:bg-blue-100">
                <Shield className="mb-3 h-8 w-8 text-blue-700" />
                <h4 className="mb-2 text-lg font-bold text-blue-800">Secure</h4>
                <p className="text-sm text-gray-600">
                  Built on a robust blockchain with advanced security protocols
                </p>
              </div>
              <div className="rounded-xl bg-yellow-50 p-5 transition-all duration-300 hover:bg-yellow-100">
                <Zap className="mb-3 h-8 w-8 text-yellow-500" />
                <h4 className="mb-2 text-lg font-bold text-blue-800">Fast</h4>
                <p className="text-sm text-gray-600">
                  Lightning-fast transactions with minimal fees
                </p>
              </div>
              <div className="rounded-xl bg-yellow-50 p-5 transition-all duration-300 hover:bg-yellow-100">
                <TrendingUp className="mb-3 h-8 w-8 text-yellow-500" />
                <h4 className="mb-2 text-lg font-bold text-blue-800">
                  Scalable
                </h4>
                <p className="text-sm text-gray-600">
                  Designed to handle millions of transactions per second
                </p>
              </div>
              <div className="rounded-xl bg-blue-50 p-5 transition-all duration-300 hover:bg-blue-100">
                <ArrowRight className="mb-3 h-8 w-8 text-blue-700" />
                <h4 className="mb-2 text-lg font-bold text-blue-800">
                  Interoperable
                </h4>
                <p className="text-sm text-gray-600">
                  Seamlessly connects with other blockchain networks
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 flex items-center justify-center md:order-2">
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 p-2">
                <div className="rounded-xl object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl bg-yellow-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
