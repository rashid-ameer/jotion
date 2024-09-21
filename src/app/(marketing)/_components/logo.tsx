import Image from "next/image";

function Logo() {
  return (
    <div className="hidden md:flex md:items-center">
      <Image
        src="/images/logo.svg"
        className="dark:hidden"
        alt="Jotion"
        width={40}
        height={40}
      />
      <Image
        src="/images/logo-dark.svg"
        className="hidden dark:block"
        alt="Jotion"
        width={40}
        height={40}
      />
      <p className="text-xl font-semibold">Jotion</p>
    </div>
  );
}
export default Logo;
