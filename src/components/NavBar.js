function NavBar({ handlePageChange}) {
  return (
    <nav className="nav nav-pills flex-column flex-sm-row">
      <a
        className="flex-sm-fill text-sm-center nav-link active"
        aria-current="page"
        href="#about-me"
        onClick={() => {handlePageChange('About Me')}}
      >
        About Me
      </a>
      <a className="flex-sm-fill text-sm-center nav-link" href="#portfolio" 
      onClick={() => {handlePageChange('Portfolio')}}
      >
        Portfolio
      </a>
      <a className="flex-sm-fill text-sm-center nav-link" href="#contact"
      onClick={() => {handlePageChange('Contact')}}
      >
        Contact
      </a>

      <a className="flex-sm-fill text-sm-center nav-link" href="#resume"
      onClick={() => {handlePageChange('Resume')}}
      >
        Resume
      </a>
    </nav>
  );
}

export default NavBar;
