import Link from "next/link";
import { Boxes } from "./ui/background-boxes";

function Footer() {
  return (
    <footer
      id="footer"
      className="flex px-2 w-full relative justify-center  flex-col py-12 overflow-hidden bg-slate-900 text-white items-center"
    >
      {/* <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg"> */}
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      {/* </div> */}

      <div className="max-w-6xl mx-auto grid grid-cols-1 px-4 sm:px-6 lg:px-8 gap-8 p-4 grid-rows-4 sm:grid-rows-2 sm:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4">
        <section className="z-10">
          <h3 className="text-2xl font-medium">About Us</h3>
          <p className="mt-8 text-slate-400">
            We are the best website makers and another one is also us, we will
            take your business potential to another level
          </p>
        </section>
        <section className="z-10">
          <h3 className="text-2xl font-medium">Quick Links</h3>
          <nav className="mt-8 flex flex-col gap-2 text-slate-400">
            <Link className="hover:text-white" href={"#hero"}>
              Home
            </Link>
            <Link className="hover:text-white" href={"#skill"}>
              Skills
            </Link>
            <Link className="hover:text-white" href={"#mentor"}>
              Mentor
            </Link>
            <Link className="hover:text-white" href={"#contact"}>
              Contact Us
            </Link>
          </nav>
        </section>
        <section className="z-10">
          <h3 className="text-2xl font-medium">Follow Us</h3>
          <ul className="mt-8 list-none flex gap-2 text-slate-400">
            <li>
              <Link
                className="hover:text-white"
                href={"www.linkedin.com/in/ganesh-kale-4a7478205"}
              >
                Linkedin
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href={"/"}>
                Twitter
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-white"
                href={"https://github.com/Genx-unidirectional"}
              >
                Github
              </Link>
            </li>
          </ul>
        </section>
        <section className="z-10">
          <h3 className="text-2xl font-medium">Contact Us</h3>
          <address className="mt-8 text-slate-400 ">
            <p>Kalyan India</p>
            <p>Kalyan 421306</p>
            <p>Email: ganeshdoitnowh100@gmail.com</p>
            <p>Phone: 91-7718097304</p>
          </address>
        </section>
      </div>
      <p className="text-slate-400 z-10 text-center border-t border-slate-500 w-full">
        &copy; 2024 Gex-corpx All rights reserved.
      </p>
    </footer>
  );
}
export default Footer;
