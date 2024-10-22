import React, { useEffect, useState } from "react";
import { Skeleton, Box } from "@mui/material";
import AboutUsSkeleton from "../components/AboutUsSkeleton";
const AboutUs = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-5 font-sans leading-relaxed text-gray-800">
      {loading ? (
        <AboutUsSkeleton />
      ) : (
        <>
          <section className="bg-[#fde2c7] p-8 text-center rounded-lg mb-5">
            <h2 className="text-5xl text-[#003366]">About CarDekho</h2>
            <p className="text-lg mt-2">
              CarDekho.com is India's leading car search platform, helping
              millions of users find the perfect vehicle. Our platform delivers
              rich automotive content like expert reviews, detailed
              specifications, prices, comparisons, videos, and images from all
              the top car brands.
            </p>
          </section>

          <section className="mb-10">
            <h3 className="text-4xl text-[#003366] border-b-2 border-[#003366] pb-2 mb-5">
              Our Journey
            </h3>
            <p className="text-lg text-gray-600">
              Established in 2008 by a group of visionary IIT graduates,
              CarDekho has grown exponentially from a small startup to the
              largest car marketplace in India. Over the years, we've expanded
              our footprint globally, operating in Southeast Asia and the UAE
              with our partner brands like Zigwheels and Oto.
            </p>
            <p className="text-lg text-gray-600">
              Our innovation has been fueled by strategic investments from
              industry giants like Google Capital, Sequoia Capital, HDFC Bank,
              and more. Today, CarDekho is synonymous with trust, quality, and
              convenience in the automotive industry.
            </p>
          </section>

          <section className="mb-10">
            <h3 className="text-4xl text-[#003366] border-b-2 border-[#003366] pb-2 mb-5">
              Our Vision & Mission
            </h3>
            <p className="text-lg text-gray-600">
              Our mission is to build a comprehensive automotive ecosystem where
              consumers, manufacturers, dealers, and related businesses thrive
              together. From buying and selling cars to providing end-to-end
              services like insurance, roadside assistance, and financing, we
              are committed to offering a seamless and enriched experience.
            </p>
          </section>

          <section className="mb-10">
            <h3 className="text-4xl text-[#003366] border-b-2 border-[#003366] pb-2 mb-5">
              Innovation at CarDekho
            </h3>
            <p className="text-lg text-gray-600">
              CarDekho has introduced several groundbreaking features to enhance
              user experience. These include:
            </p>
            <ul className="list-disc pl-5 mt-2">
              <li className="text-lg mb-2">
                <strong>Feel The Car:</strong> A 360-degree interactive
                experience that provides an immersive view of car interiors and
                exteriors, with audio explanations and video guides.
              </li>
              <li className="text-lg mb-2">
                <strong>Car Comparison Tool:</strong> Compare cars based on
                make, model, price, and features to help users make informed
                decisions.
              </li>
              <li className="text-lg mb-2">
                <strong>Live Offers:</strong> Access real-time promotions and
                offers across multiple cities.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h3 className="text-4xl text-[#003366] border-b-2 border-[#003366] pb-2 mb-5">
              What Our Users Say
            </h3>
            <div className="bg-gray-200 p-5 rounded-lg italic text-gray-600">
              <blockquote className="border-l-4 border-[#003366] bg-white p-5 rounded-md">
                "CarDekho made buying my first car an absolute breeze. The
                detailed reviews, comparisons, and offers helped me find exactly
                what I needed!" –{" "}
                <strong className="block mt-2 text-gray-800">
                  Priya Sharma
                </strong>
              </blockquote>
              <blockquote className="border-l-4 border-[#003366] bg-white p-5 rounded-md mt-5">
                "I sold my old car within a week using CarDekho’s used car
                platform. It was fast, easy, and hassle-free!" –{" "}
                <strong className="block mt-2 text-gray-800">Ravi Kumar</strong>
              </blockquote>
            </div>
          </section>

          <section className="mb-10">
            <h3 className="text-4xl text-[#003366] border-b-2 border-[#003366] pb-2 mb-5">
              Global Presence
            </h3>
            <p className="text-lg text-gray-600">
              Beyond India, CarDekho has expanded its operations to Southeast
              Asia and the UAE through partnerships with Zigwheels and Oto,
              bringing our top-tier automotive solutions to new markets.
            </p>
          </section>

          <section className="bg-[#fde2c7] text-center p-5 rounded-lg">
            <h3 className="text-4xl text-black border-b-2 border-black pb-2 mb-5">
              Get in Touch
            </h3>
            <p className="text-lg text-black">
              Have questions or need assistance? Reach out to us through our
              customer support channels or visit one of our partner showrooms.
              We’re here to help you on your car-buying journey!
            </p>
          </section>
        </>
      )}
    </div>
  );
};

export default AboutUs;
