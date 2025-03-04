import { Button, ButtonGroup } from 'react-bootstrap';
import './header.css';

interface HeaderProps {
  title: string;
  menuItems: string[];
  menuClick: (page: string) => void;
  selected: string;
}

const Header = ({ title, menuItems, menuClick, selected }: HeaderProps) => {
  const handlePageChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const page: string = e.currentTarget.innerText;
    menuClick(page);
  };

  return (
    <header className='header'>
      <h1>{title}</h1>
      <nav>
        <ButtonGroup>
          {menuItems.map((item, index) => (
            <Button key={index} onClick={handlePageChange} variant={selected===item?'primary':'secondary'}>{item}</Button>
          ))}
        </ButtonGroup>
      </nav>
    </header>
  );
};

export default Header