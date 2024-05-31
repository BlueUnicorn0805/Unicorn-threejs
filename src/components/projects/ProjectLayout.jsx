import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);
const ProjectLayout = ({ title, category, img, repo, tag }) => {
  const UNIWAYGITHUB = "https://www.github.com/uniwaydev"
  return (

    <ProjectLink
      variants={item}
      href={UNIWAYGITHUB + "/" + repo}
      target={"_blank"}
      className=" text-sm md:text-base flex  items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
    >
      <Image src={img} className="w-[200px] rounded-lg" />
      <div className="flex items-center justify-center space-x-2 pl-5">
        <h2 className="text-foreground">{title}</h2>
      </div>
      <div className="self-center flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
      <p className="text-muted sm:text-foreground">
        {category}({tag})
      </p>
    </ProjectLink>
  );
};

export default ProjectLayout;
