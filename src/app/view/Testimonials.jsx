import Image from "next/image";
import { FaStar } from "react-icons/fa";
import testimonials from "../../../public/data/testimonials";

const Testimonials = () => {
  return (
    <section className="my-16">
      <h1 className="text-center font-medium md:text-4xl text-3xl lg:w-1/3 lg:mx-auto mx-8 ">
        Trusted by Thousands of Happy Customers
      </h1>
      <p className="text-center lg:w-1/2 md:mx-auto mx-4 md:w-8/12 mt-4 text-secondary">
        These are the stories of our customers who have joined us with great
        pleasure when using this amazing feature.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-2 mt-8 lg:w-10/12 lg:mx-auto mx-8">
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <div
            key={index}
            className="rounded-lg lg:p-8 p-4  border-2 border-secondary hover:border-primary"
          >
            <div className="flex items-center mb-4">
              <Image
                src={testimonial.ava}
                className="w-[50px] h-[50px] rounded-full"
              />
              <div className="ml-4">
                <h1 className="font-medium md:text-[10px]">
                  {testimonial.name}
                </h1>
                <p className="text-secondary md:text-[10px]">
                  {testimonial.location}
                </p>
              </div>
              <h1 className="flex items-center ml-auto">
                {testimonial.rating}
                <span className="text-yellow-500 ml-2">
                  <FaStar />
                </span>
              </h1>
            </div>
            <p className="text-secondary">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
