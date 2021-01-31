import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import styles from "./App.module.css";
import { auth } from "./firebase";

const header = (props: any) => {
    return (
        <div>
            <AppBar position='static'>
                <Toolbar variant='dense' className={styles.toolbar}>
                    <Typography variant='h4' color='inherit'>
                        Todo-list /React.js + Typescript
                    </Typography>
                    <button
                        className={styles.app__logout}
                        onClick={async () => {
                            try {
                                await auth.signOut();
                                props.history.push("login");
                            } catch (error) {
                                /*alert(error.message);*/
                            }
                        }}
                    >
                        {" "}
                        <ExitToAppIcon />
                    </button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default header;
