function NavBar() {
  return (
    <div>
      <nav class="nav nav-pills flex-column flex-sm-row">
        <a
          class="flex-sm-fill text-sm-center nav-link active"
          aria-current="page"
          href="#about-me"
        >
        About Me
        </a>
        <a class="flex-sm-fill text-sm-center nav-link" href="#portfolio">
          Portfolio
        </a>
        <a class="flex-sm-fill text-sm-center nav-link" href="#contact">
          Contact
        </a>
      
        <a class="flex-sm-fill text-sm-center nav-link" href="#resume">
          Resume
        </a>
      
      </nav>
    </div>
  );
}

export default NavBar;
