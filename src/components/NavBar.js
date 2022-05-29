function NavBar({ currentPage, handlePageChange }) {
  return (
    <nav className="nav nav-pills flex-column flex-sm-row">
      <a
        className={
          currentPage === "About Me"
            ? "nav-link active flex-sm-fill text-sm-center"
            : "nav-link flex-sm-fill text-sm-center"
        }
        aria-current="page"
        href="#about-me"
        onClick={() => {
          handlePageChange("About Me");
        }}
      >
        About Me
      </a>
      <a
        className={
          currentPage === "Portfolio"
            ? "nav-link active flex-sm-fill text-sm-center"
            : "nav-link flex-sm-fill text-sm-center"
        }
        href="#portfolio"
        onClick={() => {
          handlePageChange("Portfolio");
        }}
      >
        Portfolio
      </a>
      <a
        className={
          currentPage === "Contact"
            ? "nav-link active flex-sm-fill text-sm-center"
            : "nav-link flex-sm-fill text-sm-center"
        }
        href="#contact"
        onClick={() => {
          handlePageChange("Contact");
        }}
      >
        Contact
      </a>

      <a
        className={
          currentPage === "Resume"
            ? "nav-link active flex-sm-fill text-sm-center"
            : "nav-link flex-sm-fill text-sm-center"
        }
        href="#resume"
        onClick={() => {
          handlePageChange("Resume");
        }}
      >
        Resume
      </a>
    </nav>
  );
}

export default NavBar;
