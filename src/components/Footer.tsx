const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex">
      <div className="container mx-auto px-5 lg:px-48 sm:px:20 md:px-32">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h6 className="my-4 text-3xl  font-medium tracking-wider font-title">
              <span className="text-green">Sekai </span>
              itami yo
            </h6>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
            <div>&copy; {currentYear} Sekai itami yo. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
