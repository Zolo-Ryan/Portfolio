import img1 from "../../assets/zilo_text_editor_1.png";
import img2 from "../../assets/blog.png";
import img3 from "../../assets/weather.png";
import img4 from "../../assets/digitomize_svg.png";
import img5 from "../../assets/techspardha.png";
import img6 from "../../assets/emr_web.png"

export const projects = [
  {
    name: "Zilo - Text editor",
    overlay:
      "A text editor in made entirely in C. Simple text editor to view, update, create and save files. Additonal features of search, gotoline and clipboard are also available.",
    link: "https://github.com/Zolo-Ryan/Zilo",
    image: img1,
  },
  {
    name: "Blogify - Blogging application",
    overlay:
      "A blogging application to create, modify and update posts. There is also a login feature using jwt token for stateless authentication.",
    link: "https://blogify-zolo.vercel.app/",
    image: img2,
  },
  {
    name: "Open source contributor - Digitomize",
    overlay: "Contributed to a well known open source project - Digitomize. Generating Svgs based on user data stored on the server and embedding it on some other website with a simple click.",
    link: "https://github.com/digitomize/digitomize/pull/559",
    image: img4,
    objectPosition: "center",
  },
  {
    name: "Contributed to techspardha.in",
    overlay:
      "Contributed to the development of techspardha.in - Official webiste for the Technical Event of NIT Kurukshetra, Techspardha",
    link: "https://github.com/technobyte-nitkkr/Spardha/pulls?q=is%3Apr+author%3AZolo-Ryan+is%3Aclosed",
    image: img5,
    objectPosition: "center",
  },
  {
    name: "Contributed to EMR official website",
    overlay:
      "Contributed to the official website of EMR - Embedded systems and Robotics club, NIT Kurukshetra",
    link: "https://github.com/EmrNITK/WebD-2.1/pull/18",
    image: img6,
    objectPosition: "center",
  },
  {
    name: "Weather Application",
    overlay:
      "A weather application build by our team as a college project. It shows realtime weather of next 30 days for the region of Thanesar, Kurukshetra.",
    link: "https://github.com/Zolo-Ryan/Weather",
    image: img3,
  },
];
