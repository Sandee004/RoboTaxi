import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import clsx from "clsx";

// Define the type for each instruction
interface Instruction {
  image: string;
  title: string;
  description: string;
}

// Inner component for each card to handle its own useInView
interface InstructionCardProps {
  step: Instruction;
  index: number;
}

const InstructionCard: React.FC<InstructionCardProps> = ({ step }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: 0.1,
    once: false, // Animation triggers every time the element enters the viewport
  });

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: 40, // Changed from x to y animation to prevent horizontal overflow
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
    id="howtobuy"
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={clsx(
        "w-full max-w-[97%] md:max-w-[85%] px-4 py-3 border-3 bg-[#39437E] gap-5 rounded-md border-gray-200 flex items-center box-border"
      )}
    >
      <img
        src={step.image}
        alt={step.title}
        className="w-16 sm:w-20 h-auto flex-shrink-0 object-contain"
      />
      <div className="flex flex-col">
        <p className="font-bold">{step.title}</p>
        <p>{step.description}</p>
      </div>
    </motion.div>
  );
};

const HowToBuy: React.FC = () => {
  const instructions: Instruction[] = [
    {
      image: "/wallet.png",
      title: "CREATE A WALLET",
      description:
        "Download Metamask or your wallet of choice from the app store or Google Play Store for free. Desktop users, download the Chrome extension at metamask.io.",
    },
    {
      image: "/eth.png",
      title: "GET SOME ETH",
      description:
        "Have ETH in your wallet to switch to $TOKEN. If you do not have any, you can buy directly on Metamask or transfer from another wallet.",
    },
    {
      image: "/uniswap.png",
      title: "GO TO UNISWAP",
      description:
        "Connect to Uniswap. Go to app.uniswap.org in Google Chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $ticker token address into Uniswap, select ROBOTAXI, and confirm. When Metamask prompts you for a wallet signature, sign.",
    },
    {
      image: "/coin.png",
      title: "SWAP ETH FOR $TAXI",
      description:
        "SWAP ETH for $TAXI. We have ZERO taxes so you don't need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.",
    },
  ];

  return (
    <div className="bg-yellow-500 text-white flex flex-col justify-center py-40">
      <h1 className="text-center text-3xl underline mb-8">How To Buy</h1>

      <div className="flex flex-col gap-7 items-center">
        {instructions.map((step, i) => (
          <InstructionCard key={i} step={step} index={i} />
        ))}
      </div>
    </div>
  );
};

export default HowToBuy;
