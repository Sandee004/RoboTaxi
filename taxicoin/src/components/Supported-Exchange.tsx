import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const exchanges = [
  { name: "Binance", logo: "/placeholder.svg?height=60&width=180" },
  { name: "Coinbase", logo: "/placeholder.svg?height=60&width=180" },
  { name: "Kraken", logo: "/placeholder.svg?height=60&width=180" },
  { name: "KuCoin", logo: "/placeholder.svg?height=60&width=180" },
  { name: "Huobi", logo: "/placeholder.svg?height=60&width=180" },
  { name: "Gate.io", logo: "/placeholder.svg?height=60&width=180" },
]

export default function SupportedExchanges() {
  return (
    <section className="bg-blue-50 py-16 md:py-24" id="exchanges">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Available Now</Badge>
          <h2 className="mb-4 text-3xl font-bold text-blue-800 sm:text-4xl">Supported Exchanges</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            CryptoNexus is available on the world's leading cryptocurrency exchanges
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:gap-8">
            {exchanges.map((exchange, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-yellow-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative z-10 flex h-full flex-col items-center justify-center">
                  <Image
                    src={exchange.logo || "/placeholder.svg"}
                    width={180}
                    height={60}
                    alt={exchange.name}
                    className="mb-4 h-12 w-auto object-contain"
                  />
                  <p className="font-medium text-blue-800">{exchange.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=300&width=800"
                width={800}
                height={300}
                alt="Global Exchange Support"
                className="rounded-xl object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-blue-800/70 p-8 text-white">
                <div className="flex h-full flex-col items-start justify-center">
                  <h3 className="mb-4 text-2xl font-bold">Global Availability</h3>
                  <p className="mb-6 max-w-md">
                    CryptoNexus is available in over 150 countries, making it one of the most accessible tokens in the
                    market.
                  </p>
                  <Badge className="bg-yellow-400 text-blue-900 hover:bg-yellow-300">More exchanges coming soon</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
