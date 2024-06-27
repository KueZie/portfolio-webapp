import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-slate-200 text-primary">
      <div className="flex flex-col px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-1.5">
        <div className="flex gap-x-4 text-primary tracking-tighter leading-none">
          <Link
            href="/about"
            className="hover:text-primary/60 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary/60 transition-colors duration-300"
          >
            Contact
          </Link>
          <Link
            href="/terms"
            className="hover:text-primary/60 transition-colors duration-300"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="hover:text-primary/60 transition-colors duration-300"
          >
            Privacy
          </Link>
        </div>
        <div className="text-sm text-primary/60 py-4 max-w-screen-md">
          <p>
            This site collects information about you when you use our Website to
            access our services, and other online products and services
            (collectively, the “Services”) and through other interactions and
            communications you have with us.
          </p>
        </div>
        <div className="text-sm text-primary/60">
          <p>© 2024 Hunter Goram, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
