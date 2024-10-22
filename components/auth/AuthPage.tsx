"use client";
import { useState } from "react";
import { SignUpCard } from "./SignUpCard";
import { motion } from "framer-motion";
import { SignUpFlow } from "@/types";
import { SignInCard } from "./SignInCard";

export const AuthPage = () => {
  const [state, setState] = useState<SignUpFlow>("signUp");
  return (
    <div className="flex h-full items-center justify-center">
      <motion.div
        className="md:h-auto md:w-[500px]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {state === "signIn" ? (
          <SignInCard setState={setState} />
        ) : (
          <SignUpCard setState={setState} />
        )}
      </motion.div>
    </div>
  );
};
