import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
  github?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");

  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`/videos/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  return (
    <div className="work-image">
      <div
        className="work-image-in"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        data-cursor={"disable"}
        style={{ position: "relative" }}
      >
        {props.link && (
          <a
            className="work-link"
            href={props.link}
            target="_blank"
            rel="noreferrer"
          >
            <MdArrowOutward />
          </a>
        )}

        {props.github && (
          <a
            className="work-link"
            href={props.github}
            target="_blank"
            rel="noreferrer"
            style={{ right: "3.5rem" }}
          >
            <FaGithub />
          </a>
        )}

        <img src={props.image} alt={props.alt} />

        {isVideo && (
          <video src={video} autoPlay muted playsInline loop></video>
        )}
      </div>
    </div>
  );
};

export default WorkImage;