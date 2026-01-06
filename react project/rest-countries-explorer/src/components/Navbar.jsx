import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="navbar shadow">
      <div className="container nav-content">
        <h2>Where in the world?</h2>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
