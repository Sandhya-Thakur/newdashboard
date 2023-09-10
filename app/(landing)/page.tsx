import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Welcome to IntelliKid
      </h1>
      <p className="text-lg text-center text-gray-600 mb-6">
        Unlock a world of personalized learning for your child with IntelliKid. Our platform offers:
      </p>
      <ul className="list-disc text-lg text-gray-600 mb-6 pl-6">
        <li>Interactive and engaging educational content</li>
        <li>Customized learning paths tailored to your  needs</li>
        <li>Regular assessments to track progress</li>
        <li>Fun and challenging quizzes to reinforce learning</li>
      </ul>
      <div className="space-y-4">
        <Link href="/sign-in">
          <Button className="w-48 bg-blue-500 hover:bg-blue-600 text-white">
            Sign In
          </Button>
        </Link>
        <Link href="/sign-up">
          <Button className="w-48 bg-gray-300 hover:bg-gray-400 text-gray-800">
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
