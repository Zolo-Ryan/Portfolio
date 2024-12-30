import coding from "../../assets/coding.png";
import internet from "../../assets/internet.png";
import setting from "../../assets/settings.png";
import c_image from "../../assets/c-.png";
import java_image from "../../assets/java.png";
import js_image from "../../assets/java-script.png";
import python_image from "../../assets/python.png";
import bash from "../../assets/gnu-bash.png";
import react_img from "../../assets/library.png";
import express_img from "../../assets/express.png";
import mongo_img from "../../assets/mongodb.png";
import node_img from "../../assets/nodejs.png";
import nest_img from "../../assets/nestjs.png";
import git_img from "../../assets/Git.png";
import prisma_img from "../../assets/Prisma.png";
import post_img from "../../assets/Postman.png";
import docker_img from "../../assets/Docker.png";
import make_img from "../../assets/gnu.png";

interface imageData {
  image: string;
  title: string;
  className?: string;
}
interface skillSetData {
  name: string;
  parentImage: string;
  images: imageData[];
}

const programming: imageData[] = [
  { image: c_image, title: "C" },
  { image: java_image, title: "Java" },
  { image: js_image, title: "JavaScript" },
  { image: python_image, title: "Python" },
  { image: bash, title: "Bash" },
];
const web: imageData[] = [
  { image: react_img, className: "bg-white", title: "ReactJs" },
  { image: express_img, title: "ExpressJs" },
  { image: mongo_img, title: "MongoDB" },
  { image: node_img, title: "NodeJs" },
  { image: nest_img, title: "NestJs" },
];
const tools: imageData[] = [
  { image: git_img, className: "bg-white", title: "Git" },
  { image: prisma_img, className: "bg-white", title: "Prisma" },
  { image: post_img, className: "bg-white", title: "Postman" },
  { image: docker_img, className: "bg-white", title: "Docker" },
  { image: make_img, className: "bg-white", title: "GNU Make" },
];

export const skillSet: skillSetData[] = [
  {
    name: "Programming Languages",
    parentImage: coding,
    images: programming,
  },
  {
    name: "Web Development",
    parentImage: internet,
    images: web,
  },
  {
    name: "Tools and Technologies",
    parentImage: setting,
    images: tools,
  },
];
