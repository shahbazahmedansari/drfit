"use client";
import React from "react";
import { SignUpCard } from "@/components/auth/SignUpCard";
import { motion } from "framer-motion";

const SignUp = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <motion.div
        className="md:h-auto md:w-[500px]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <SignUpCard />
      </motion.div>
    </div>
  );
};

export default SignUp;
