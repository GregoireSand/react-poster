import { useState } from 'react';
import styles from "./NewPost.module.css";

function NewPost({ onCancel, onAddPost }) {

  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(e) {
    setEnteredBody(e.target.value);
  }

  function authorChangedHandler(e) {
    setEnteredAuthor(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault(); 
    const postData = {
      body: enteredBody,
      author: enteredAuthor
    };
    onAddPost(postData);
    onCancel();
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangedHandler} />
      </p>
      <p className={styles.actions}>
        <button type='button'onClick={onCancel}>Cancel</button>
        <button type='submit'>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
