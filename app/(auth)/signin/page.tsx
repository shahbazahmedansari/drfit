"use client"
import React from "react";
import { SignInCard } from "@/components/auth/SignInCard";
import { motion } from "framer-motion";

const SignIn = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <motion.div
        className="md:h-auto md:w-[500px]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <SignInCard />
      </motion.div>
    </div>
  );
};

export default SignIn;
