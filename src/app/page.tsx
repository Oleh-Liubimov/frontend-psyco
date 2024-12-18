import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <main className="font-bold">
      <div>
        <div>
          <h1 className="font-semibold text-7xl">
            The road to the
            <span className="text-primary font-semibold text-7xl">
              {" "}
              depths{" "}
            </span>{" "}
            of the human soul
          </h1>
          <span className="font-medium text-lg">
            We help you to reveal your potential, overcome challenges and find a
            guide in your own life with the help of our experienced
            psychologists.
          </span>
        </div>
        <div>
          <Image
            src="/public/images/hero_image_main.png"
            width={464}
            height={526}
            alt="Hero image"
          />
        </div>
      </div>
    </main>
  );
}
