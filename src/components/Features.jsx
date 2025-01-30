import React from "react";
import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";

export function FeatureSection16() {
  return (
    <section className="lg:py-28 py-10 px-8">
      <div className="container mx-auto mb-10 text-center lg:mb-20" id="features">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Our Services
        </Typography>
        <Typography color="blue-gray" className="mb-4 !text-2xl font-bold lg:!text-4xl">
          Empowering Businesses with Technology
        </Typography>
        <Typography variant="lead" className="mx-auto max-w-lg !text-gray-500">
          At Web Atlantis, we provide cutting-edge web solutions tailored to 
          transform your ideas into powerful digital experiences.
        </Typography>
      </div>
      <div className="mb-8 container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-1 lg:grid-cols-3">
        <Card className="col-span-1 bg-gray-100/50 overflow-hidden" shadow={false}>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2 font-medium">
              Custom Web Development
            </Typography>
            <Typography className="text-center mb-0 max-w-xs mx-auto text-base font-normal leading-7 !text-gray-500">
              Scalable, responsive, and secure web applications crafted to your business needs.
            </Typography>
            <img
              src="https://www.material-tailwind.com/image/iphone.svg"
              alt="Custom Web Development"
              className="w-full xl:h-[370px] lg:h-[360px] lg:translate-y-8 translate-y-7 object-cover object-center"
            />
          </CardBody>
        </Card>
        <Card className="col-span-2 bg-gray-100/50 overflow-hidden" shadow={false}>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2 font-medium">
              UI/UX Design
            </Typography>
            <Typography className="text-center mb-0 max-w-xs mx-auto text-base font-normal leading-7 !text-gray-500">
              Intuitive and engaging interfaces designed to enhance user experience.
            </Typography>
            <img
              src="https://www.material-tailwind.com/image/laptop%201.svg"
              alt="UI/UX Design"
              className="w-full lg:h-[380px] md:h-[300px] h-[220px] lg:translate-y-16 translate-y-10 object-cover object-center"
            />
          </CardBody>
        </Card>
      </div>
      <div className="container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-1 lg:grid-cols-3">
        <Card className="col-span-2 bg-gray-100/50 overflow-hidden" shadow={false}>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2 font-medium">
              Scalable Backend Solutions
            </Typography>
            <Typography className="text-center max-w-sm mx-auto text-base font-normal leading-7 !text-gray-500">
              Powerful and efficient backend architecture to support business growth.
            </Typography>
            <img
              src="https://www.material-tailwind.com/image/logo-collection.svg"
              alt="Backend Solutions"
              className="w-full xl:h-[355px] lg:h-[380px] md:h-[300px] h-[180px] lg:translate-y-6 translate-y-10 object-cover object-top"
            />
          </CardBody>
        </Card>
      
      </div>
    </section>
  );
}
export default FeatureSection16;
