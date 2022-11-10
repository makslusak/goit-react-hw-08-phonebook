import css from './UserMenu.module.css';

export const UserMenu = () => {
  return (
    <aside className={css.sidebar}>
      <div className={css.wrapper}>
        <p>mango@mail.com</p>
        <button type="button">Logout</button>
      </div>
    </aside>
  );
};
