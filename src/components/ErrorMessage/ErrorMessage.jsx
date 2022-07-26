import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <>
      <p className={styles.text}>
        Sorry, cannot display data now. <br />
        I know, it`s sucks. <br />
        So come later, when we fix it.
      </p>
    </>
  )
}

export default ErrorMessage;