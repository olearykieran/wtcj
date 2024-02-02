export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto lg:px-4 py-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex gap-4 justify-center px-16">
            <a href="/about" className="hover:underline">
              About Us
            </a>
            <a href="/services" className="hover:underline">
              Services
            </a>
            <a href="/blog" className="hover:underline">
              Blog
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </div>
          <div className="mb-4 lg:mb-0 text-sm text-center flex-grow">
            &copy; {new Date().getFullYear()} Winning the Cancer Journey. All rights
            reserved.
            <br className="lg:hidden" /> {/* Break line on small screens only */}
            Website by{" "}
            <a
              href="https://holygrailstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Holy Grail Studio
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
}
