"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowUp, ArrowDown, Users, BarChart3, Wallet } from "lucide-react";
import Image from "next/image";

export default function TokenTracker() {
  const [marketCap, setMarketCap] = useState(32500000);
  const [holders, setHolders] = useState(24750);
  const [price, setPrice] = useState(0.032);
  const [volume, setVolume] = useState(4250000);
  const [progress, setProgress] = useState(35);

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketCap(
        (prev) =>
          prev +
          (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 100000)
      );
      setHolders((prev) => prev + Math.floor(Math.random() * 10));
      setPrice(
        (prev) =>
          +(
            prev +
            (Math.random() > 0.5 ? 0.0001 : -0.0001) *
              Math.floor(Math.random() * 10)
          ).toFixed(5)
      );
      setVolume(
        (prev) =>
          prev +
          (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 50000)
      );
      setProgress((prev) => {
        const newValue =
          prev + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 3);
        return Math.min(Math.max(newValue, 30), 40); // Keep between 30-40
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US").format(num);
  };

  const isPriceUp = price > 0.031;

  return (
    <section className="py-16 md:py-24" id="tracker">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-blue-800 sm:text-4xl">
            Live Token Tracker
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Real-time statistics and performance metrics for CryptoNexus
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="col-span-2 grid gap-6 sm:grid-cols-2">
            <Card className="overflow-hidden border-blue-100 transition-all duration-300 hover:border-blue-300 hover:shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 pb-2 pt-6 text-white">
                <CardTitle className="flex items-center text-lg">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Market Cap
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-blue-800">
                  ${formatNumber(marketCap)}
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <span className="text-green-500">
                    <ArrowUp className="mr-1 inline h-4 w-4" />
                    12.5%
                  </span>
                  <span className="ml-2 text-gray-500">last 24h</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-blue-100 transition-all duration-300 hover:border-blue-300 hover:shadow-lg">
              <CardHeader className="bg-gradient-to-r from-yellow-400 to-yellow-500 pb-2 pt-6 text-blue-900">
                <CardTitle className="flex items-center text-lg">
                  <Users className="mr-2 h-5 w-5" />
                  Token Holders
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-blue-800">
                  {formatNumber(holders)}
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <span className="text-green-500">
                    <ArrowUp className="mr-1 inline h-4 w-4" />
                    8.3%
                  </span>
                  <span className="ml-2 text-gray-500">last 7 days</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-blue-100 transition-all duration-300 hover:border-blue-300 hover:shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 pb-2 pt-6 text-white">
                <CardTitle className="flex items-center text-lg">
                  <Wallet className="mr-2 h-5 w-5" />
                  Current Price
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-blue-800">
                  ${price.toFixed(5)}
                </div>
                <div className="mt-2 flex items-center text-sm">
                  {isPriceUp ? (
                    <span className="text-green-500">
                      <ArrowUp className="mr-1 inline h-4 w-4" />
                      3.2%
                    </span>
                  ) : (
                    <span className="text-red-500">
                      <ArrowDown className="mr-1 inline h-4 w-4" />
                      1.8%
                    </span>
                  )}
                  <span className="ml-2 text-gray-500">last 24h</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-blue-100 transition-all duration-300 hover:border-blue-300 hover:shadow-lg">
              <CardHeader className="bg-gradient-to-r from-yellow-400 to-yellow-500 pb-2 pt-6 text-blue-900">
                <CardTitle className="flex items-center text-lg">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  24h Volume
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-blue-800">
                  ${formatNumber(volume)}
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <span className="text-green-500">
                    <ArrowUp className="mr-1 inline h-4 w-4" />
                    5.7%
                  </span>
                  <span className="ml-2 text-gray-500">last 24h</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <Card className="border-blue-100 transition-all duration-300 hover:border-blue-300 hover:shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 pb-2 pt-6 text-white">
                <CardTitle>Token Distribution</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>Circulating Supply</span>
                      <span className="font-medium">{progress}%</span>
                    </div>
                    <Progress
                      value={progress}
                      className="h-2 bg-blue-100"
                      indicatorClassName="bg-blue-600"
                    />
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>Team & Advisors</span>
                      <span className="font-medium">15%</span>
                    </div>
                    <Progress
                      value={15}
                      className="h-2 bg-blue-100"
                      indicatorClassName="bg-yellow-400"
                    />
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>Ecosystem Growth</span>
                      <span className="font-medium">25%</span>
                    </div>
                    <Progress
                      value={25}
                      className="h-2 bg-blue-100"
                      indicatorClassName="bg-blue-400"
                    />
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>Reserve</span>
                      <span className="font-medium">20%</span>
                    </div>
                    <Progress
                      value={20}
                      className="h-2 bg-blue-100"
                      indicatorClassName="bg-yellow-500"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Token Analytics"
                className="h-full w-full rounded-xl object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-blue-900/60 p-6 text-center text-white">
                <div>
                  <h3 className="mb-2 text-xl font-bold">Advanced Analytics</h3>
                  <p className="mb-4">
                    Detailed metrics and insights available for token holders
                  </p>
                  <button className="rounded-full bg-yellow-400 px-4 py-2 font-medium text-blue-900 transition-colors hover:bg-yellow-300">
                    Connect Wallet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
