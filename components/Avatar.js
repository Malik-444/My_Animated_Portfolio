import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/ava.png"}
        width={737}
        height={678}
        alt="pic"
        className="w-full h-full translate-z-0"
      ></Image>
    </div>
  );
};

export default Avatar;
