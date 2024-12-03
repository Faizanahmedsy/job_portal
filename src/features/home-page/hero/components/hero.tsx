import { Button } from "@/components/ui/button";
import MasterSearchBox from "./master-search-box";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <>
      <div className="w-full h-[calc(100dvh-90px)] m-0 relative overflow-hidden bg-slate-200">
        <MasterSearchBox />
        <div className="flex justify-center items-center gap-16">
          <div className="">
            <ul>
              <li>Recent Jobs</li>
              <li>Suggestions</li>
              <li>My Resume </li>
              <li>Hiring</li>
              <li>Probability</li>
              <li> Applied Jobs</li>
              <li>Job Replies</li>
            </ul>
          </div>
          <div className="w-[45%] ">
            <div className="bg-white flex justify-center items-center flex-col py-5 px-3 mt-5 rounded-lg">
              <h1 className="font-bold">
                Find Jobs Perfectly Matched for You!
              </h1>
              <h3 className="text-sm text-slate-600">
                Unlock personalized job matches tailored to your skills!
              </h3>
              <h3 className="text-sm text-slate-600">
                Sign in and complete your resume to take the first step toward
                your dream role.
              </h3>

              <Button className="mt-5 w-full bg-gradient-to-r from-blue-700 to-blue-900">
                Let&apos;s Get Started!
              </Button>
            </div>
          </div>
          <div className="">
            <ul>
              <li>Recent Jobs</li>
              <li>Suggestions</li>
              <li>My Resume </li>
              <li>Hiring</li>
              <li>Probability</li>
              <li> Applied Jobs</li>
              <li>Job Replies</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
