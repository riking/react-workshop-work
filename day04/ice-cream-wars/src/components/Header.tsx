import './Header.css'

const Header = ({name}: {name: string}) => {
  return (
    <header className='Header'>
        <h1>Ice Cream Wars</h1>
        <div className='name'>Welcome <span>{name}</span></div>
    </header>
  )
};

export default Header;
