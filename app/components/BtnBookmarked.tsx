import Image from "next/image";
import imgEmpty from "../assets/icon-bookmark-empty.svg";
import imgFull from "../assets/icon-bookmark-full.svg";

export default function BtnBookmarked() {
  return (
    <button className="bg-[rgba(0,0,0,0.5)] rounded-full w-8 h-8  absolute top-2 right-2 flex justify-center items-center">
      <Image src={imgEmpty} alt="bookmark" width={12} height={14} />

      <Image
        src={imgFull}
        alt="bookmark"
        width={12}
        height={14}
        className="hidden"
      />
    </button>
  );
}
