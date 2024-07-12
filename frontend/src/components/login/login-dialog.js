import { useState, forwardRef } from "react"
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,
} from "@mui/material"
import { RegisterDialog } from "./register"; // Adjust the import path as necessary

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

export const LoginDialog = ({ open, handleClose, handleSubmit }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault()
        handleSubmit(username, password)
    }

    const handleEnterKeyDown = (event) => {
        if (event.key === "Enter") {
            onSubmit(event)
        }
    }

    const handleRegisterSubmit = (name, email, password) => {
        // Handle registration logic here
        console.log("Register:", { name, email, password });
        setIsRegisterOpen(false);
    };


    return (
        <>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            onKeyDown={handleEnterKeyDown}
        >
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="username"
                    label="Username"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    margin="dense"
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="standard"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button variant="text" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="contained" type="submit" onClick={onSubmit}>
                    Submit
                </Button>
            </DialogActions>
            <DialogActions>
                    <Button variant="text" onClick={() => setIsRegisterOpen(true)}>
                        Register
                    </Button>
                </DialogActions>

        </Dialog>
                    <RegisterDialog
                    open={isRegisterOpen}
                    handleClose={() => setIsRegisterOpen(false)}
                    handleSubmit={handleRegisterSubmit}
                />
</>    
    )
}
