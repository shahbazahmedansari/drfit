import { SignUpFlow } from "@/types";
import { Button } from "../ui/button";
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

interface SignInCardProps {
  setState: (state: SignUpFlow) => void;
}

export const SignInCard = ({ setState }: SignInCardProps) => {
  return (
    <Card className="w-full h-full p-8 bg-indigo-800 text-white border-none">
      <CardHeader className="space-y-3">
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
                onChange={() => {}}
                className="w-full"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="space-y-2.5 mt-4">
              <Label htmlFor="password" className="text-md">
                Enter Password
              </Label>
              <Input
                onChange={() => {}}
                className="w-full"
                type="password"
                placeholder="Password"
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
              onClick={() => {}}
            >
              <FaGoogle className="size-5" />
              Continue with Google
            </Button>
            <Button
              className="bg-white text-black w-full my-2 hover:text-white"
              onClick={() => {}}
            >
              <FaGithub />
              Continue with Github
            </Button>
          </div>
          <p className="py-3">
            Don&apos;t have an account ?
            <span
              onClick={() => setState("signUp")}
              className="text-green-500 px-2 hover:text-rose-500 cursor-pointer hover:underline"
            >
              Sign Up
            </span>
          </p>
        </CardContent>
      </CardHeader>
    </Card>
  );
};
