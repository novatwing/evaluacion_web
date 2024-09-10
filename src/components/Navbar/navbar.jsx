import Logo from '../Svg/apple.svg';
import search  from '../Svg/search.svg';
import shop from '../Svg/shopping-bag.svg';
const Navbar = () => {
  return (
    <nav className="Apple">
      <div className="NavBar">
      <ul className="Apple-links">
        <div>
        <div>
          <a href="#tienda">
          <img src={Logo} alt="apple logo" width={18}/>
          </a>
        </div>
        </div>
        <li><a href="#mac">Mac</a></li>
        <li><a href="#ipad">iPad</a></li>
        <li><a href="#iphone">iPhone</a></li>
        <li><a href="#watch">Watch</a></li>
        <li><a href="#casa">TV</a></li>
        <li><a href="#only-on-apple">Musica</a></li>
        <li><a href="#soporte">Soporte</a></li>
        <li><img src={search} alt="search" class="search-1" width={14} /></li>
        <li><img src={shop} alt="shopping-bag" class="bag-1" width={14} /></li>
      </ul>
    </div> 
    </nav>
  );
};

export default Navbar;
