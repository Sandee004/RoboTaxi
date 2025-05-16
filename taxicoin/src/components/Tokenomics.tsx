import { motion } from "framer-motion";

const Tokenomics = () => {
  const fadeZoom = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i = 0) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="tokenomics"
      className="pb-12 pt-10 bg-yellow-500 border-b border-[#39437E] text-center"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          className="text-4xl font-extrabold text-[#39437E] mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeZoom}
        >
          TOKENOMICS
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: "0%", subtitle: "Buy TAX" },
            { title: "0%", subtitle: "Sell TAX" },
            { title: "BURNT", subtitle: "LIQUIDITY" },
            { title: "100M", subtitle: "Total Supply" },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              className="bg-[#39437E]/80 rounded-lg p-6 shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeZoom}
            >
              <h3 className="text-3xl font-bold text-yellow-100">
                {item.title}
              </h3>
              <p className="mt-2 text-lg font-semibold text-gray-200 uppercase">
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
