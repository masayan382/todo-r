import { FormControl, List, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import styles from './App.module.css';
import { db } from "./firebase";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos"
import TaskItem from "./TaskItem"
import { makeStyles } from "@material-ui/styles"
import { auth } from "./firebase"
import Header from './Header'
import Footer from './Footer'

const useStyles = makeStyles({
  field: {
    marginTop: 30,
    marginBottom: 20,
  },
  list: {
    margin: "auto",
    width: "40%",
  },
});

const App: React.FC = (props: any) => {
  const [tasks, setTasks] = useState([{ id: "", title: "" }]);
  const [input, setInput] = useState("");
  const classes = useStyles();

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((user) => {
      !user && props.history.push("login")
    });
    return () => unSub();
  })

  useEffect(() => {
    const unSub = db.collection("tasks").onSnapshot((snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({ id: doc.id, title: doc.data().title }))
      );
    });
    return () => unSub();
  }, []);

  const newTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    db.collection("tasks").add({ title: input });
    setInput("");
  }

  return (
    <div className={styles.app__root }>
      <Header />
      <FormControl>
        <TextField
          className={classes.field}
          InputLabelProps={{
            shrink: true,
          }}
          label="New task ?"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          />
      </FormControl>
      <button className={styles.app__icon } disabled={!input} onClick={newTask}>
        <AddToPhotosIcon />
      </button>
      <hr></hr>
      <List className={classes.list}>
      {tasks.map((task) => (
        <TaskItem key={task.id} id={task.id} title={task.title}/>
      ))}
      </List>
      <Footer />
    </div>
  );
};

export default App;