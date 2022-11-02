import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-center mb-24 pt-16">
        <Link href="./pharmacists">Pharmacy</Link>
      <Link href="/">
        <Image
          src="/icons/ph-logo.svg"
          alt="Logo, Photon Health"
          height={30}
          width={140}
          priority
        />
      </Link>
      <Link href="./providers">Provider</Link>
    </nav>
  );
};

export default Nav;
