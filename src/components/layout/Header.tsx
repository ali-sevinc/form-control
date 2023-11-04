import logoImage from "../../assets/logo2.svg";
export default function Header() {
  return (
    <header className="mx-auto my-12 flex w-full flex-col items-center">
      <img src={logoImage} className="h-32 w-32 rounded-full  p-2 " />
      <h1 className=" pt-8 text-5xl font-bold tracking-widest text-stone-200">
        Forms
      </h1>
    </header>
  );
}
