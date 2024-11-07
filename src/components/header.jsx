import "../styles/components/header.css";

var Header = ({ brandDetails }) => {
  const { brandName, color } = brandDetails;

  return (
    <header>
      <nav>
        <a href="" className="brand-logo" style={color}>
          {brandName}
        </a>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
