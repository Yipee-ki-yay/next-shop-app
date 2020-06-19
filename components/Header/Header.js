import { makeStyles } from '@material-ui/core/styles';

// -----Components-----
import Link from 'next/link'
import { Box, OutlinedInput, InputAdornment, Button, Badge, Divider } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles({
  iconStyle: {
    fontSize: '18px',
    color: '#9E9E9E',
  },
  closeIcon: {
    fontSize: '24px',
  },
  cartIcon: {
    fontSize: '30px',
    transform: 'scale(1.2)',
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <header className="header-main">
      <div className="banner-dev text-center">Сайт в разработке показан не весь ассортимент</div>

      <div className="container">
        <Box className="header-main__top">
          <div className="text-accent grey">г.Запорожье, ул.Независимой Украины 47</div>
          <nav className="nav-main">
            <ul className="nav-main__list">
              <li className="nav-main__item">
                <Link href="/products">
                  <a className="nav-main__link text-accent bold">Контакты</a>
                </Link>
              </li>
              <li className="nav-main__item">
                <Link href="/products">
                  <a className="nav-main__link text-accent bold">Доставка</a>
                </Link>
              </li>
              <li className="nav-main__item">
                <Link href="/products">
                  <a className="nav-main__link text-accent bold">Возврат</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-accent grey">Режим работы: с 8:00 до 17:00</div>
        </Box>

        <Box mt={4} display="flex" justifyContent="space-between" alignItems="flex-end">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <div className="logo">
              <Link href="/">
                <a>
                  <img src="/img/logo.jpg" alt=""/>
                </a>
              </Link>
            </div>

            <section className="search-main">
              <button className="with-icon button-simple">
                <DriveEtaIcon />
                <span className="text-accent bold">Выбрать</span>
              </button>

              <Box mt={1}>
                <OutlinedInput
                  fullWidth
                  onChange={() => {}}
                  value=""
                  placeholder="Введите номер запчасти или VIN" 
                  endAdornment={
                    <InputAdornment position="start">
                      <SearchIcon className={classes.iconStyle} />
                    </InputAdornment>
                  }
                />
              </Box>
            </section>
          </Box>

          <Box display="flex" alignItems="center">
            <ul className="phones-list">
              <li className="phones-list__item"><a className="link-simple" href="tel:+380975953356">+38 (097) 595 33 56</a></li>
              <li className="phones-list__item"><a className="link-simple" href="tel:+380975953356">+38 (097) 595 33 56</a></li>
              <li className="phones-list__item"><a className="link-simple" href="tel:+380975953356">+38 (097) 595 33 56</a></li>
              <li className="phones-list__item"><a className="link-simple" href="tel:+380975953356">+38 (097) 595 33 56</a></li>
            </ul>

            <div className="button-callback-wrapper">
              <Button fullWidth type="button" variant="outlined">Перезвоните мне</Button>
            </div>

            <section className="cart-with-popup">
              <button className="button-simple">
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartIcon className={classes.cartIcon} />
                </Badge>
                <span className="cart-with-popup__text text-accent bold">В корзине</span>
              </button>
            </section>
          </Box>
        </Box>

        <Box mt={5}>
          <Divider variant="middle" />
        </Box>

        <Box className="header-main__bottom">
          <ul className="menu-groups">
            <li className="menu-groups__item">
              <span className="text-accent bold">Запчасти для ТО</span>
              <div className="menu-subgroups"></div>
            </li>
            <li className="menu-groups__item">
              <span className="text-accent bold">Тормозная система</span>
              <div className="menu-subgroups"></div>
            </li>
            <li className="menu-groups__item">
              <span className="text-accent bold">Двигатель и выхлопная</span>
              <div className="menu-subgroups"></div>
            </li>
            <li className="menu-groups__item">
              <span className="text-accent bold">Подвеска и рулевое</span>
              <div className="menu-subgroups"></div>
            </li>
            <li className="menu-groups__item">
              <span className="text-accent bold">Коробка передач</span>
              <div className="menu-subgroups"></div>
            </li>
            <li className="menu-groups__item">
              <span className="text-accent bold">Охлаждение и отопление</span>
              <div className="menu-subgroups"></div>
            </li>
            <li className="menu-groups__item">
              <span className="text-accent bold">Электрика и освещение</span>
              <div className="menu-subgroups"></div>
            </li>
            <li className="menu-groups__item">
              <span className="text-accent bold">Кузов и составляющие</span>
              <div className="menu-subgroups"></div>
            </li>
            <li className="menu-groups__item">
              <span className="text-accent bold">Масла, автохимия</span>
              <div className="menu-subgroups"></div>
            </li>
            <li className="menu-groups__item">
              <span className="text-accent bold">Аксессуары</span>
              <div className="menu-subgroups"></div>
            </li>
          </ul>
        </Box>
      </div>
    </header>
  );
};

export default Header;
