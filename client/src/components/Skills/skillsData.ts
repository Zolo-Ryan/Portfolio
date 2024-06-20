import coding from "../../assets/coding.png";
import internet from "../../assets/internet.png";
import setting from "../../assets/settings.png"
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
  className?: string;
}
interface skillSetData {
  name: string;
  parentImage: string;
  images: imageData[];
}

const programming: imageData[] = [
  { image: c_image },
  { image: java_image },
  { image: js_image },
  { image: python_image },
  { image: bash },
];
const web: imageData[] = [
  { image: react_img, className: "bg-white" },
  { image: express_img },
  { image: mongo_img },
  { image: node_img },
  { image: nest_img },
];
const tools: imageData[] = [
  { image: git_img, className: "bg-white" },
  { image: prisma_img, className: "bg-white" },
  { image: post_img, className: "bg-white" },
  { image: docker_img, className: "bg-white" },
  { image: make_img, className: "bg-white" },
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
