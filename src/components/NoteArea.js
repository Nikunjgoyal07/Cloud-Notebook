import React, { useState } from 'react'

export default function NoteArea() {
    const [noteName, setNoteName] = useState('');
    const [noteContent, setNoteContent] = useState('');

    function sendNoteToBackend() {
        // Send noteName and noteContent to your backend using fetch or axios
        fetch('https://noteapibackend.onrender.com/api/notes', {
            method: 'POST',
            body: JSON.stringify({ name: noteName, content: noteContent }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to send note to backend');
            }
            else{
                console.log("sent to backend")
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
        <div className="container">
            <div class="mb-3 my-5">
                <label for="noteNameInput" class="form-label">WRITE A NOTE</label>
                <input type="text" class="form-control my-4" id="noteNameInput" placeholder="Enter the Name of the Note" value={noteName} onChange={handleNoteNameChange} />
                <textarea class="form-control my-4" id="noteContentInput" rows="8" placeholder='Enter the Notes you wish' value={noteContent} onChange={handleNoteContentChange}></textarea>
                <button type="button" class="btn btn-primary" onClick={sendNoteToBackend}>Save Note</button>
            </div>
        </div>
    )
}