import { Link } from "react-router-dom";

const FOOTER_LINKS: string[] = [
  "Twitter",
  "LinkedIn",
  "Email",
  "RSS feed",
  "Add to Feedly",
];

const Footer = () => {
  return (
    <footer className="flex flex-col-reverse md:flex-row justify-center md:justify-start gap-8 md:gap-3.5 py-8 items-center mt-8 px-8 lg:px-0">
      <p className="text-center font-normal text-xl/[24px] dark:text-white">
        © 2023
      </p>
      <ul className="flex flex-col md:flex-row justify-center items-center gap-3.5">
        {FOOTER_LINKS.map((social, index) => (
          <li key={index}>
            <Link className="font-normal text-xl/[24px] dark:text-white" to="/">
              {social}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
