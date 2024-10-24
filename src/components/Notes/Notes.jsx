import { useState } from 'react'
import Note from '../Note/Note'
import AddNote from '../AddNote';
import './notes.css'


export default function Notes () {

    const [note, setNote] =useState('');
    const [notesList, setNotesList] = useState([]); // Tüm notları tutan dizi

    const addNote = () => {
        if (note.trim()) {
          setNotesList([...notesList, note]); // Notu listeye ekliyoruz
        }
      };

    return (
        <>
        <AddNote note={note} setNote={setNote} addNote={addNote} />
        <div className="notelist-container">

        

        {notesList.map((item, index) => (
          <Note key={index} noteText={item} /> // Her bir notu Note bileşeni ile gösteriyoruz
        ))}
        </div>
        </>
    )
};