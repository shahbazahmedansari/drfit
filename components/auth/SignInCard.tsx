"use client";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { useState } from "react";
import Link from "next/link";

export const SignInCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Card className="w-full h-full p-4 bg-indigo-800 text-white border-none">
      <CardHeader className="space-y-3">
        <h1 className="text-4xl font-extrabold">
          Welcome to <span className="text-green-500 text-4xl">Drift</span>
        </h1>
        <CardTitle>Login to Continue</CardTitle>
        <CardDescription>
          Use your email or another service to continue
        </CardDescription>
        <CardContent className="px-0">
          <form>
            <div className="space-y-2.5">
              <Label htmlFor="email" className="text-md">
                Enter your Email
              </Label>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                disabled={false}
                value={email}
                className="w-full text-black"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="space-y-2.5 mt-4">
              <Label htmlFor="password" className="text-md">
                Enter Password
              </Label>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                disabled={false}
                value={password}
                className="w-full text-black"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <Button type="submit" onClick={() => {}} className="mt-6">
              Login
            </Button>
          </form>
          <Separator className="my-4" />
          <div>
            <Button
              className="bg-white text-black w-full my-1 hover:text-white"
              onClick={async () => {
                await signIn("google");
              }}
            >
              <FaGoogle className="size-5" />
              Continue with Google
            </Button>
            <Button
              className="bg-white text-black w-full my-2 hover:text-white"
              onClick={async () => {
                await signIn("github");
              }}
            >
              <FaGithub />
              Continue with Github
            </Button>
          </div>
          <p className="py-3">
            Don&apos;t have an account ?
            <Link
              href="/signup"
              className="text-green-500 px-2 hover:text-rose-500 cursor-pointer hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </CardContent>
      </CardHeader>
    </Card>
  );
};
