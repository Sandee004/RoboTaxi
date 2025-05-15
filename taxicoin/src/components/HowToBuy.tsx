import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import clsx from "clsx";

const HowToBuy = () => {
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
        "Connect to Uniswap. Go to app.uniswap.org in Google Chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $ticker token address into Uniswap, select ROBOTAXI, and confirm. When Metamask prompts you for a wallet signature, sign.",
    },
    {
      image: "/15.png",
      title: "SWAP ETH FOR $TAXT",
      description:
        "SWAP ETH for $TAXI. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.",
    },
  ];

  return (
    <div className="overflow-x-hidden bg-[#000080] text-white flex flex-col justify-center py-20 min-h-screen">
      <h1 className="text-center text-3xl underline mb-8">How To Buy</h1>

      <div className="flex flex-col gap-7 items-center">
        {instructions.map((step, i) => (
          <InstructionCard key={i} step={step} index={i} />
        ))}
      </div>
    </div>
  );
};

const InstructionCard = ({ step, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold: 0.1,
    once: false, // Ensures animation triggers every time the element enters the viewport
  });

  const variants = {
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -40 : 40, // Slide from left or right based on index
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={clsx(
        "w-[97%] md:w-[85%] px-4 py-3 border-4 gap-5 rounded-md border-yellow-300 flex"
      )}
    >
      <img src={step.image} alt={step.title} className="w-18" />
      <div className="flex flex-col">
        <p className="font-bold">{step.title}</p>
        <p>{step.description}</p>
      </div>
    </motion.div>
  );
};

export default HowToBuy;