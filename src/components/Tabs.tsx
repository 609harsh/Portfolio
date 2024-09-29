import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("London");

  const openCity = (cityName:string) => {
    setActiveTab(cityName);
  };

  return (
    <div className="flex flex-col items-start">
      <div className="flex w-full flex-col md:flex-row mb-5">
        {/* Tab Buttons */}
        <div className="tab w-full md:w-1/3 border border-gray-300 bg-gray-100">
          <button
            className={`w-full text-left p-4 transition duration-300 ${
              activeTab === "London" ? "bg-gray-300" : "bg-transparent"
            } hover:bg-gray-200`}
            onClick={() => openCity("London")}
          >
            Languages
          </button>
          {/* Tab Content */}
        <div className="md:hidden tabcontent w-full border border-gray-300 border-l-0">
          {activeTab === "London" && (
            <div id="London">
              <p className="inline-flex flex-wrap gap-4 p-4">
                <img alt="HTML" src="https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white"/>
                <img alt="CSS" src="https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white"/>
                <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black"/>
                <img alt="Typescript" src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" />
                <img alt="Java" src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"/>
              </p>
            </div>
          )}
        </div>
          <button
            className={`w-full text-left p-4 transition duration-300 ${
              activeTab === "Paris" ? "bg-gray-300" : "bg-transparent"
            } hover:bg-gray-200`}
            onClick={() => openCity("Paris")}
          >
            Frameworks & Libraries
          </button>
          <div className="md:hidden tabcontent w-full border border-gray-300 border-l-0">
          {activeTab === "Paris" && (
            <div id="Paris">
              <p className="inline-flex flex-wrap gap-4 p-4">
                <img alt="React" src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black"/>
                <img alt="NextJs" src="https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white" />
                <img alt="Node.js" src="https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
                <img alt="Express.js" src="https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white"/>
                <img alt="NestJS" src="https://img.shields.io/badge/NestJS-E0234E.svg?style=for-the-badge&logo=NestJS&logoColor=white"/>
                <img alt="Django" src="https://img.shields.io/badge/Django-092E20.svg?style=for-the-badge&logo=Django&logoColor=white"/>
                <img alt="TailwindCSS" src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white"/>
                <img alt="Material Design" src="https://img.shields.io/badge/Material%20Design-757575.svg?style=for-the-badge&logo=Material-Design&logoColor=white"/>
                <img alt="AntDesign" src="https://img.shields.io/badge/Ant%20Design-0170FE.svg?style=for-the-badge&logo=Ant-Design&logoColor=white"/>
                <img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-7952B3.svg?style=for-the-badge&logo=Bootstrap&logoColor=white"/>
                <img alt="Prisma" src="https://img.shields.io/badge/Prisma-2D3748.svg?style=for-the-badge&logo=Prisma&logoColor=white"/>
                <img alt="TypeORM" src="https://img.shields.io/badge/TypeORM-FE0803.svg?style=for-the-badge&logo=TypeORM&logoColor=white"/>
                <img alt="Mongoose" src="https://img.shields.io/badge/Mongoose-F04D35.svg?style=for-the-badge&logo=Mongoose&logoColor=white"/>
                <img alt="Swagger" src="https://img.shields.io/badge/Swagger-85EA2D.svg?style=for-the-badge&logo=Swagger&logoColor=black"/>
                <img alt="Zod" src="https://img.shields.io/badge/Zod-3E67B1.svg?style=for-the-badge&logo=Zod&logoColor=white"/>
              </p>
            </div>
          )}
          
        </div>
          <button
            className={`w-full text-left p-4 transition duration-300 ${
              activeTab === "Tokyo" ? "bg-gray-300" : "bg-transparent"
            } hover:bg-gray-200`}
            onClick={() => openCity("Tokyo")}
          >
            Databases, Cloud hosting, and Tools
          </button>
          <div className="md:hidden tabcontent w-full border border-gray-300 border-l-0 ">
          {activeTab === "Tokyo" && (
            <div id="Tokyo">
              <p className="inline-flex flex-wrap gap-4 p-4">
                <img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=MongoDB&logoColor=white"/>
                <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white"/>
                <img alt="Redis" src="https://img.shields.io/badge/Redis-FF4438.svg?style=for-the-badge&logo=Redis&logoColor=white"/>
                <img alt="MySQL" src="https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=MySQL&logoColor=white"/>
                <img alt="Vercel" src="https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white"/>
                <img alt="Render" src="https://img.shields.io/badge/Render-000000.svg?style=for-the-badge&logo=Render&logoColor=white"/>
                <img alt="AWS EC2" src="https://img.shields.io/badge/Amazon%20EC2-FF9900.svg?style=for-the-badge&logo=Amazon-EC2&logoColor=white"/>
                <img alt="Netlify" src="https://img.shields.io/badge/Netlify-00C7B7.svg?style=for-the-badge&logo=Netlify&logoColor=white"/>
                <img alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37.svg?style=for-the-badge&logo=Postman&logoColor=white"/>
                <img alt="Visual Studio Code" src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"/>
                <img alt="Git" src="https://img.shields.io/badge/Git-F05032.svg?style=for-the-badge&logo=Git&logoColor=white"/>
                <img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED.svg?style=for-the-badge&logo=Docker&logoColor=white" />
                <img alt="Heroku" src="https://img.shields.io/badge/Heroku-430098.svg?style=for-the-badge&logo=Heroku&logoColor=white" />
                <img alt="Github" src="https://img.shields.io/badge/GitHub-181717.svg?style=for-the-badge&logo=GitHub&logoColor=white"/>
                <img alt="GitHub Actions" src="https://img.shields.io/badge/GitHub%20Actions-2088FF.svg?style=for-the-badge&logo=GitHub-Actions&logoColor=white"/>
              </p>
            </div>
          )}
        </div>
        </div>

        {/* Tab Content */}
        <div className=" hidden md:block tabcontent w-full md:w-2/3 border border-gray-300 border-l-0 p-4">
          {activeTab === "London" && (
            <div id="London">
              <p className="inline-flex flex-wrap gap-4">
                <img alt="HTML" src="https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white"/>
                <img alt="CSS" src="https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white"/>
                <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black"/>
                <img alt="Typescript" src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" />
                <img alt="Java" src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"/>
              </p>
            </div>
          )}
          {activeTab === "Paris" && (
            <div id="Paris">
              <p className="inline-flex flex-wrap gap-4">
                <img alt="React" src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black"/>
                <img alt="NextJs" src="https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white" />
                <img alt="Node.js" src="https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
                <img alt="Express.js" src="https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white"/>
                <img alt="NestJS" src="https://img.shields.io/badge/NestJS-E0234E.svg?style=for-the-badge&logo=NestJS&logoColor=white"/>
                <img alt="Django" src="https://img.shields.io/badge/Django-092E20.svg?style=for-the-badge&logo=Django&logoColor=white"/>
                <img alt="TailwindCSS" src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white"/>
                <img alt="Material Design" src="https://img.shields.io/badge/Material%20Design-757575.svg?style=for-the-badge&logo=Material-Design&logoColor=white"/>
                <img alt="AntDesign" src="https://img.shields.io/badge/Ant%20Design-0170FE.svg?style=for-the-badge&logo=Ant-Design&logoColor=white"/>
                <img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-7952B3.svg?style=for-the-badge&logo=Bootstrap&logoColor=white"/>
                <img alt="Prisma" src="https://img.shields.io/badge/Prisma-2D3748.svg?style=for-the-badge&logo=Prisma&logoColor=white"/>
                <img alt="TypeORM" src="https://img.shields.io/badge/TypeORM-FE0803.svg?style=for-the-badge&logo=TypeORM&logoColor=white"/>
                <img alt="Mongoose" src="https://img.shields.io/badge/Mongoose-F04D35.svg?style=for-the-badge&logo=Mongoose&logoColor=white"/>
                <img alt="Swagger" src="https://img.shields.io/badge/Swagger-85EA2D.svg?style=for-the-badge&logo=Swagger&logoColor=black"/>
                <img alt="Zod" src="https://img.shields.io/badge/Zod-3E67B1.svg?style=for-the-badge&logo=Zod&logoColor=white"/>
              </p>
            </div>
          )}
          {activeTab === "Tokyo" && (
            <div id="Tokyo">
              <p className="inline-flex flex-wrap gap-4">
                <img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=MongoDB&logoColor=white"/>
                <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white"/>
                <img alt="Redis" src="https://img.shields.io/badge/Redis-FF4438.svg?style=for-the-badge&logo=Redis&logoColor=white"/>
                <img alt="MySQL" src="https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=MySQL&logoColor=white"/>
                <img alt="Vercel" src="https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white"/>
                <img alt="Render" src="https://img.shields.io/badge/Render-000000.svg?style=for-the-badge&logo=Render&logoColor=white"/>
                <img alt="AWS EC2" src="https://img.shields.io/badge/Amazon%20EC2-FF9900.svg?style=for-the-badge&logo=Amazon-EC2&logoColor=white"/>
                <img alt="Netlify" src="https://img.shields.io/badge/Netlify-00C7B7.svg?style=for-the-badge&logo=Netlify&logoColor=white"/>
                <img alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37.svg?style=for-the-badge&logo=Postman&logoColor=white"/>
                <img alt="Visual Studio Code" src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"/>
                <img alt="Git" src="https://img.shields.io/badge/Git-F05032.svg?style=for-the-badge&logo=Git&logoColor=white"/>
                <img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED.svg?style=for-the-badge&logo=Docker&logoColor=white" />
                <img alt="Heroku" src="https://img.shields.io/badge/Heroku-430098.svg?style=for-the-badge&logo=Heroku&logoColor=white" />
                <img alt="Github" src="https://img.shields.io/badge/GitHub-181717.svg?style=for-the-badge&logo=GitHub&logoColor=white"/>
                <img alt="GitHub Actions" src="https://img.shields.io/badge/GitHub%20Actions-2088FF.svg?style=for-the-badge&logo=GitHub-Actions&logoColor=white"/>
              </p>
            </div>
          )}
        </div>
      </div>
      <div x-data="{}"
                    x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })" className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex  justify-center  items-center text-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          <li >
            <img src="html-5.png" alt="html-5" />
            <p>HTML</p>
          </li>
          <li >
            <img src="css-3.png" alt="css-3" />
            <p>CSS</p>
          </li>
          <li >
            <img src="js.png" alt="js" />
            <p>Javascript</p>
          </li>
          <li >
            <img src="typescript.png" alt="typescript" />
            <p>Typescript</p>
          </li>
          <li >
            <img src="java.png" alt="java" />
            <p>JAVA</p>
          </li>
           <li >
            <img src="react.png" alt="react" />
            <p>ReactJs</p>
          </li>
          <li>
            <img src="nextjs.png" alt="next" />
            <p>NextJS</p>
          </li>
          <li>
            <img src="tailwindcss.png" alt="tailwindcss" />
            <p>TailwindCSS</p>
          </li>
          <li>
            <img src="node.png" alt="node" />
            <p>NodeJS</p>
          </li>
          <li>
            <img src="express.png" alt="express" />
            <p>ExpressJS</p>
          </li>
          <li>
            <img src="nestjs.png" alt="nest" />
            <p>NestJS</p>
          </li>
          <li>
            <img src="postgresql.png" alt="Postgresql" />
            <p>Postgresql</p>
          </li>
          <li>
            <img src="mongodb.png" alt="Mongodb" />
            <p>Mongodb</p>
          </li>
          <li>
            <img src="java.png" alt="java" />
            <p>TypeORM</p>
          </li>
          <li>
            <img src="prisma.png" alt="java" />
            <p>Prisma</p>
          </li>
          <li >
            <img src="githubtool.png" alt="github" />
            <p>Github</p>
          </li>
          <li>
            <img src="postman.png" alt="postman" />
            <p>Postman</p>
          </li>
          <li>
            <img src="docker.png" alt="docker" />
            <p>Docker</p>
          </li>
          <li>
            <img src="swagger.png" alt="swagger" />
            <p>Swagger</p>
          </li>
          <li>
            <img src="aws.png" alt="aws" />
            <p>AWS</p>
          </li>
          <li>
            <img src="vscode.png" alt="vscode" />
            <p>VS Code</p>
          </li>   
        </ul>
        <ul className="flex  justify-center  items-center text-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          <li >
            <img src="html-5.png" alt="html-5" />
            <p>HTML</p>
          </li>
          <li >
            <img src="css-3.png" alt="css-3" />
            <p>CSS</p>
          </li>
          <li >
            <img src="js.png" alt="js" />
            <p>Javascript</p>
          </li>
          <li >
            <img src="typescript.png" alt="typescript" />
            <p>Typescript</p>
          </li>
          <li >
            <img src="java.png" alt="java" />
            <p>JAVA</p>
          </li>
          <li >
            <img src="react.png" alt="react" />
            <p>ReactJs</p>
          </li>
          <li>
            <img src="nextjs.png" alt="next" />
            <p>NextJS</p>
          </li>
          <li>
            <img src="tailwindcss.png" alt="tailwindcss" />
            <p>TailwindCSS</p>
          </li>
          <li>
            <img src="node.png" alt="node" />
            <p>NodeJS</p>
          </li>
          <li>
            <img src="express.png" alt="express" />
            <p>ExpressJS</p>
          </li>
          <li>
            <img src="nestjs.png" alt="nest" />
            <p>NestJS</p>
          </li>
          <li>
            <img src="postgresql.png" alt="Postgresql" />
            <p>Postgresql</p>
          </li>
          <li>
            <img src="mongodb.png" alt="Mongodb" />
            <p>Mongodb</p>
          </li>
          <li>
            <img src="java.png" alt="java" />
            <p>TypeORM</p>
          </li>
          <li>
            <img src="prisma.png" alt="java" />
            <p>Prisma</p>
          </li>
          <li >
            <img src="githubtool.png" alt="github" />
            <p>Github</p>
          </li>
          <li>
            <img src="postman.png" alt="postman" />
            <p>Postman</p>
          </li>
          <li>
            <img src="docker.png" alt="docker" />
            <p>Docker</p>
          </li>
          <li>
            <img src="swagger.png" alt="swagger" />
            <p>Swagger</p>
          </li>
          <li>
            <img src="aws.png" alt="aws" />
            <p>AWS</p>
          </li>
          <li>
            <img src="vscode.png" alt="vscode" />
            <p>VS Code</p>
          </li>   
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
