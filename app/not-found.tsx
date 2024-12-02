import Link from "next/link";
import {Button}  from "@/components/utils/Button";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FiAlertCircle } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-4">
        <FiAlertCircle className="w-16 h-16 text-primary" aria-hidden="true" />
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          404 - Page Not Found
        </h1>
        <p className="max-w-[600px] text-lg text-muted-foreground">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might
          have been moved or deleted.
        </p>
        <Link href="/" passHref>
          <Button className="inline-flex items-center justify-center text-base">
            <FaArrowLeftLong className="mr-2 h-4 w-4" aria-hidden="true" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
