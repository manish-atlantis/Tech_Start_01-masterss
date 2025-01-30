import React from 'react';

const ClientLogos = () => {
  return (
    <section className="client-logo-area client-logo-one bg-black py-24">
      {/* Section Title */}
      <div className="section-title-two text-white">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <span className="block text-3xl font-semibold">Our Trusted Partners</span>
              <div className="content mt-4">
                <p className="text-lg mx-auto max-w-3xl">
                  At Web Atlantis, we believe in building lasting relationships. These amazing clients have trusted us
                  to deliver exceptional web solutions, and we’re proud of the partnerships we’ve formed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Logos */}
      <div className="container mt-12">
        <div className="flex flex-wrap justify-center gap-12">
          <div className="single-client text-center">
            <img
              src="/images/elastologo.jpeg"
              alt="Elastomech Logo"
              className="max-w-[150px] h-auto mx-auto"
            />
          </div>
          <div className="single-client text-center">
            <img
              src="../../public/images/adrenixlogo.png"
              alt="Adrenix Logo"
              className="max-w-[150px] h-auto mx-auto"
            />
          </div>
          <div className="single-client text-center">
            <img
              src="../../public/images/healthbridgelogo.png"
              alt="Health Bridge International Logo"
              className="max-w-[150px] h-auto mx-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
