import Image from "next/image";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className=" pt-44 px-32 ">
      <div className="flex gap-10 justify-between">
        <div className="pt-14">
          <h1 className="font-semibold text-7xl">
            The road to the
            <br />
            <span className="text-primary font-semibold text-7xl italic">
              {" "}
              depths{" "}
            </span>
            of the
            <br />
            human soul
          </h1>
          <span className="font-medium text-lg pt-5 block">
            We help you to reveal your potential, overcome challenges <br /> and
            find a guide in your own life with the help of our <br />{" "}
            experienced psychologists.
          </span>
          <Button className="hover:bg-emerald-500 rounded-3xl py-6 px-10 font-medium text-xl mt-5">
            {" "}
            Get started <MoveUpRight />{" "}
          </Button>
        </div>
        <div className="relative">
          <Image
            src="/images/hero_image_main.png"
            width={464}
            height={526}
            alt="Hero image"
            className="rounded-[10px]"
          />
          <Image
            src="/images/block.png"
            alt="hero-img"
            width={311}
            height={118}
            className="absolute top-[340px] left-[-100px]"
          />
          <Image
            src="/images/contacts_image.png"
            alt="hero-img"
            width={59}
            height={59}
            className="absolute top-12 right-[-40px]"
          />
        </div>
      </div>
    </main>
  );
}
