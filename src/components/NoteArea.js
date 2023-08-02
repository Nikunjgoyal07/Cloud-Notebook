import React, { useState, useEffect } from 'react';
import LoadingModal from './LoadingModal';
import ContentModal from '../modelAndWarningComponents/ContentModal';
import Add from './Add';

export default function NoteArea() {
    const [noteName, setNoteName] = useState('');
    const [noteContent, setNoteContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [emailAdress, setEmailAdress] = useState('');
    const [password, setPassword] = useState('');
    const loadingModal = loading ? <LoadingModal /> : null;
    useEffect(() => {
        // Check if there is a cookie
        if (!document.cookie) {
            setShowModal(true);
        }
        else {
            const cookiecheck = document.cookie.split(';');
            const cookiedictionary = {};
            cookiecheck.forEach(element => {
                const key = element.split('=')[0].trim();
                const value = element.split('=')[1].trim();
                cookiedictionary[key] = value;
            });
            setEmailAdress(cookiedictionary.email);
            setPassword(cookiedictionary.password);
            console.log(emailAdress);
            console.log(password);
            console.log(cookiedictionary);
        }
    }, []);

    function sendNoteToBackend() {
        setLoading(true);
        // Send noteName and noteContent to your backend using fetch or axios
        fetch('https://noteapibackend.onrender.com/api/notes', {
            method: 'POST',
            body: JSON.stringify({ name: noteName, content: noteContent , email: emailAdress, password: password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to send note to backend');
                }
                else {
                    console.log("sent to backend")
                    alert("Note Saved")
                    setLoading(false);
                    setNoteContent('');
                    setNoteName('');
                }
                // Handle successful response
            })
            .catch(error => {
                console.error(error);
                // Handle error
            });
    }

    function handleNoteNameChange(event) {
        setNoteName(event.target.value);
    }

    function handleNoteContentChange(event) {
        setNoteContent(event.target.value);
    }

    return (
        <>
            {showModal ? (
                <ContentModal />
            ) : (
                <>
                <div className="container">
                    <div className="mb-3 my-5">
                        <label htmlFor="noteNameInput" className="form-label">WRITE A NOTE</label>
                        <input type="text" className="form-control my-4" id="noteNameInput" placeholder="Enter the Name of the Note" value={noteName} onChange={handleNoteNameChange} />
                        <textarea className="form-control my-4" id="noteContentInput" rows="8" placeholder="Enter the Notes you wish" value={noteContent} onChange={handleNoteContentChange}></textarea>
                        <button type="button" className="btn btn-primary" onClick={sendNoteToBackend}>Save Note</button>
                    </div>
                </div>
                <Add />
                </>
            )}
            {loadingModal}
        </>

    )
}