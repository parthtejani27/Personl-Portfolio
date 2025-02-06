import Image from "next/image";
import EmailLink from "../EmailLink";
const Footer = () => {
  return (
    <footer className="bg-background-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-text-secondary">
            © {new Date().getFullYear()} Parth Tejani. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/parthtejani27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-main transition-colors"
              aria-label="GitHub"
            >
              <Image
                src="/icon/github.svg"
                alt="GitHub"
                width={50}
                height={50}
                className="dark:invert" // This will invert the color in dark mode
              />
            </a>
            <a
              href="https://linkedin.com/in/parthtejani27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-main transition-colors"
              aria-label="LinkedIn"
            >
              <Image
                src="/icon/linkedin.svg"
                alt="LinkedIn"
                width={50}
                height={50}
              />
            </a>
            <EmailLink />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
