import { Container } from 'components/Container/Container';
import { Navigation } from 'components/Navigation/Navigation';
import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};
