"use client";
import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { features } from "@/constants";
import { Icon } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent ">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold my-6 space-x-4">
              <span className="text-foreground">Magical</span>
              <span className="bg-gradient-primary !bg-clip-text text-transparent">
                Features
              </span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your photos with cutting-edge AI technology. Each
              features is designed to give you professional results in seconds,
              not hours.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {features?.slice(0, 3).map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
