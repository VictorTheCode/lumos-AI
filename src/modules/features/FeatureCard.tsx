import React from "react";
import { motion } from "framer-motion";
import { Icon } from "lucide-react";

const FeatureCard = ({ feature, index }: { feature: any; index: number }) => {
  const { icon: Icon, title, description, gradient, delay } = feature;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group"
    >
      <div className="h-full glass rounded-2xl p-8 border border-card-border hover:border-primary/30 transition-all duration-300 shadow-glow-subtle hover:shadow-glow-primary">
        <div className="relative mb-6">
          <div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient}  p-4 group-hover:animate-glow-pulse`}
          >
            <Icon classname="w-full h-full text-background" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
