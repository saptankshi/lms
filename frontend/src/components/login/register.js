import { useState, forwardRef } from 'react';
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,
} from '@mui/material';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const RegisterDialog = ({ open, handleClose, handleSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/v1/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            if (!response.ok) {
                throw new Error('Registration failed');
            }

            const data = await response.json();
            console.log('Registration successful:', data);
            handleClose(); // Close the dialog after successful registration
        } catch (error) {
            console.error('Registration failed:', error);
            // Handle error (show error message, etc.)
        }
    };

    return (
        <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose}>
            <DialogTitle>Register</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    margin="dense"
                    id="email"
                    label="Email"
                    type="email"
                    fullWidth
                    variant="standard"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    Register
                </Button>
            </DialogActions>
        </Dialog>
    );
};
