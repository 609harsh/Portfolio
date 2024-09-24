import React from "react";

interface TimelineItemProps {
  year: string;
  content: string;
  side: "left" | "right";
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, content, side }) => {
  const isLeft = side === "left";

  return (
    <div
      className={`relative w-full md:w-1/2 px-6 py-4 md:px-10 md:py-6 ${
        isLeft ? "md:left-0" : "md:left-1/2"
      }`}
    >
      <div className="absolute w-6 h-full left-1/2 transform -translate-x-1/2 bg-white z-0" />

      <div
        className={`relative bg-white rounded-lg shadow-lg z-10 ${
          isLeft ? "md:text-left" : "md:text-right"
        }`}
      >
        <div
          className={`absolute w-6 h-6 rounded-full bg-white border-4 border-orange-500 top-8 ${
            isLeft ? "right-[-12px]" : "left-[-12px]"
          }`}
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{year}</h3>
          <p className="text-gray-600">{content}</p>
        </div>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  return (
    <div className="bg-slate-600 relative">
      <div className="relative w-full mx-auto my-0 after:content-[''] after:absolute after:w-2 after:bg-white after:top-0 after:bottom-0 after:left-8 sm:after:left-1/2 after:-ml-1">
        <div className="pl-[70px] pr-6 sm:pl-10 sm:pr-10 py-3 relative bg-inherit sm:w-1/2 before:left-[62px] before:border-t-8 before:border-b-8 before:border-r-8 before:border-l-0 after:content-[''] after:absolute after:w-6 after:h-6 after:left-5 sm:after:-right-3 sm:after:left-auto after:bg-white after:border-[#FF9F55] after:border-solid after:border-4 after:top-4 after:rounded-full after:z-10 left-0 before:content-[''] before:h-0 before:absolute before:top-6 before:w-0 before:z-10 sm:before:right-8 sm:before:left-auto before:border-solid sm:before:border-r-0 sm:before:border-l-8 before:border-t-transparent before:border-b-transparent before:border-r-white sm:before:border-r-transparent before:border-l-transparent sm:before:border-l-white">
          <div className="py-5 px-7 bg-white relative rounded-md">
            <h2 className="font-bold text-xl">Forescribe</h2>
            <p className="font-semibold text-lg">Backend Developer Intern</p>
            <p className="italic mb-1 text-sm">Gurgaon | May 2024-August 2024</p>
            <ul className="list-disc">
              <li>Enhanced the main application by integrating key services like Slack, Jira, and QuickBooks, using OAuth achieving notable improvements in system performance, latency reduction, and overall application efficiency</li>
              <li><span className="font-bold">Tech Stack</span>-NestJs, MongoDB, Prisma</li>
            </ul>
          </div>
        </div>
        <div className="pl-[70px] pr-6 sm:pl-10 sm:pr-10 py-3 relative bg-inherit sm:w-1/2 after:content-[''] after:absolute after:w-6 after:h-6 after:-right-3 after:bg-white after:border-[#FF9F55] after:border-solid after:border-4 after:top-4 after:rounded-full after:z-10 left-0 sm:left-1/2 before:content-[''] before:h-0 before:absolute before:top-6 before:w-0 before:z-10 before:left-[62px] sm:before:left-8 before:border-solid before:border-t-8 before:border-b-8 before:border-r-8 before:border-l-0 before:border-t-transparent before:border-b-transparent before:border-r-white before:border-l-white after:left-5 sm:after:-left-3 ">
          <div className="py-5 px-7 bg-white relative rounded-md">
            <h2 className="font-bold text-xl">Maximl</h2>
            <p className="font-semibold text-lg">Backend Developer Intern</p>
            <p className="italic mb-1 text-sm">Bangalore | Jan 2024-April 2024</p>
            <ul className="list-disc">
              <li>Spearheaded the development of a Low-code development platform, achieving a remarkable 20% increase in productivity and cost reduction by leveraging innovative solutions.</li>
              <li>Implemented crucial endpoints for authentication, authorization, CRUD operations for application ensuring seamless functionality and user experience.</li>
              <li><span className="font-bold">Tech Stack</span>- NestJS, PostgreSQL, TypeORM</li>
            </ul>
          </div>
        </div>
        <div className="pl-[70px] pr-6 sm:pl-10 sm:pr-10 py-3 relative bg-inherit sm:w-1/2 before:left-[62px] before:border-t-8 before:border-b-8 before:border-r-8 before:border-l-0 after:content-[''] after:absolute after:w-6 after:h-6 after:left-5 sm:after:-right-3 sm:after:left-auto after:bg-white after:border-[#FF9F55] after:border-solid after:border-4 after:top-4 after:rounded-full after:z-10 left-0 before:content-[''] before:h-0 before:absolute before:top-6 before:w-0 before:z-10 sm:before:right-8 sm:before:left-auto before:border-solid sm:before:border-r-0 sm:before:border-l-8 before:border-t-transparent before:border-b-transparent before:border-r-white sm:before:border-r-transparent before:border-l-transparent sm:before:border-l-white">
          <div className="py-5 px-7 bg-white relative rounded-md">
            <h2 className="font-bold text-xl">Xperia3D</h2>
            <p className="font-semibold text-lg">FullStack Developer Intern </p>
            <p className="italic mb-1 text-sm">Delhi | Jan 2023-March 2023</p>
            <ul className="list-disc">
              <li>Worked on creating a Website for Augmented Reality Solutions to enhance the customer engagement.</li>
              <li>Designed and Developed Main Website, Dashboard, In-house App from scratch.</li>
              <li><span className="font-bold">Tech Stack</span>-NextJs, Redux-toolkit, ExpressJs, MongoDB, AWS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
