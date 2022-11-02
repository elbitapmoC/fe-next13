import Image from "next/image";

const Pill = ({ text, imgAlt, imgSource }: { text: string, imgAlt: string, imgSource: string }) => {
  return (
    <section className="flex items-center flex-col">
      <Image
        src={imgSource}
        alt={imgAlt}
        className="pill mb-8"
        width="134"
        height="278"
        layout="responsive"
        priority
      ></Image>
      <span className="font-light text-xl">{text}</span>
    </section >
  );
};

Pill.defaultProps = {
  label: "Helpful advice",
  position: "top",
};

export default Pill;
