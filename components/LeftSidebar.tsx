import Image from "next/image";
import Link from "next/link";
import React from "react";

const LeftSidebar = () => {
  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6">
        <Link href="/" className="flex cursor-pointer items-center gap-1 pb-10">
          <Image src="/icons/logo.svg" alt="logo" width={23} height={27} />
          <h1 className="text-24 font-extrabold text-white max-lg:hidden">
            Podcasts
          </h1>
        </Link>

        {[
          {
            route: "/profile",
            label: "Profile",
            imgURL: "/icons/microphone.svg",
          },
          {
            route: "/home",
            label: "Home",
            imgURL: "/icons/home.svg",
          },
        ].map(({ route, label }) => {
          return <Link href={route}>{label}</Link>;
        })}
      </nav>
    </section>
  );
};

export default LeftSidebar;
