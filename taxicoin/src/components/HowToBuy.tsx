import { useEffect, useRef } from "react";
import clsx from "clsx"; // optional, for class merging

const HowToBuy = () => {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLDivElement;
          const index = Number(el.dataset.index);
          if (entry.isIntersecting) {
            el.classList.add("opacity-100", "translate-x-0");
            el.classList.remove(
              "opacity-0",
              "translate-x-[-100px]",
              "translate-x-[100px]"
            );
          } else {
            el.classList.remove("opacity-100", "translate-x-0");
            el.classList.add(
              "opacity-0",
              index % 2 === 0 ? "translate-x-[-100px]" : "translate-x-[100px]"
            );
          }
        });
      },
      { threshold: 0.3 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const instructions = [
    {
      image: "/15.png",
      title: "CREATE A WALLET",
      description:
        "Download Metamask or your wallet of choice from the app store or Google Play Store for free. Desktop users, download the Chrome extension at metamask.io.",
    },
    {
      image: "/15.png",
      title: "GET SOME ETH",
      description:
        "Have ETH in your wallet to switch to $TOKEN. If you do not have any, you can buy directly on Metamask or transfer from another wallet.",
    },
    {
      image: "/15.png",
      title: "GO TO UNISWAP",
      description:
        "connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $ticker token address into Uniswap, select ROBOTAXI, and confirm. When Metamask prompts you for a wallet signature, sign.",
    },
    {
      image: "/15.png",
      title: "SWAP ETH FOR $TAXT",
      description:
        "SWAP ETH for $TAXI. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.",
    },
  ];

  return (
    <div className="text-white min-h-screen bg-[#000080] flex-col justify-center py-8">
      <h1 className="text-center text-2xl underline">How To Buy</h1>

      <div className="flex flex-col gap-7 items-center my-5 justify-center">
        {instructions.map((step, i) => (
          <div
            key={i}
            ref={(el) => {
              itemsRef.current[i] = el;
            }}
            data-index={i}
            className={clsx(
              "w-[97%] md:w-[85%] px-4 py-3 border-4 gap-5 rounded-md border-yellow-300 flex transform transition-all duration-700 ease-out opacity-0",
              i % 2 === 0 ? "translate-x-[-100px]" : "translate-x-[100px]"
            )}
          >
            <img src={step.image} alt={step.title} className="w-18" />
            <div className="flex flex-col">
              <p className="font-bold">{step.title}</p>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToBuy;
