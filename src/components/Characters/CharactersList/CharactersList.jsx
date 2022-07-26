import styles from './CharactersList.module.css';

const CharactersList = ({ characters }) => {
  return (
      <ul className={styles.list__container}>
      {characters.map(({ id, name, img }) =>
        <li className={styles.list__item} key={id}>
          <a href="#">
          <img className={styles.character__photo} src={img} alt={name} />
          <p>{name}</p>
          </a>
        </li>
      )}
    </ul>
  )
}

export default CharactersList;