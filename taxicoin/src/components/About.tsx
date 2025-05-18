const About = () => {
  return (
    <div
      id="about"
      className="bg-[#0cc0df] pt-24 border-b border-[#39437E] pb-12 gap-5 items-center justify-center flex flex-col md:flex-row px-5 md:px-8"
    >
      <div className="md:w-1/3">
        <img
          className="rounded-md md:h-[1024px] w-[768px]"
          src="https://robotaxioneth.com/wp-content/uploads/2024/09/6021587721891464726-768x1024.jpg"
        />
      </div>

      <div className="flex justify-center items-center md:w-2/3 flex-col">
        <p className="text-4xl font-extrabold text-[#0cc0df] mb-5">
          INTRODUCING ROBOTAXI $TAXI
        </p>
        <p className="text-2xl font-extrabold text-black">
          Robotaxi (TAXI) is an Ethereum-based blockchain project created to
          honor Elon Musk's ambitious vision of a fully autonomous future.
          Musk's new groundbreaking plan centers around the development of
          Robotaxis — a fleet of self-driving Tesla vehicles designed to disrupt
          the traditional taxi industry.
        </p>

        <p className="text-3xl font-extrabold text-[#0cc0df] mt-9 mb-5">
          The Robotaxi: A Revolution in the Making
        </p>
        <p className="font-extrabold text-2xl text-black">
          The Robotaxi could redefine urban transportation as we know it.
          Without the need for human drivers, the robotaxi will be a more
          affordable, efficient, and sustainable alternative to modern
          transportation - the future is upon us! Tesla owners may be able to
          integrate their cars into the robotaxi fleet, generating a passive
          income stream while contributing to a smarter, more connected future
          of transportation.
        </p>
        <img
          className="w-[800px] lg:h-[600px] rounded-md mt-5"
          src="https://robotaxioneth.com/wp-content/uploads/2024/09/6021587721891464725-1-1024x768.jpg"
        />
      </div>
    </div>
  );
};

export default About;
