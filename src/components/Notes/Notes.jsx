import { useState,useEffect } from 'react'
import Note from '../Note/Note'
import AddNote from '../AddNote';
import Search from '../Search';
import './notes.css'


export default function Notes () {

    const [note, setNote] =useState('');
    const [notesList, setNotesList] = useState([]); // Tüm notları tutan dizi
    const [color, setColor] = useState('');
    const [searchTerm, setSearchTerm] = useState(''); // Arama terimini tutan state

    // Component mount olduğunda localStorage'dan notları yükle
    useEffect(() => {
          setNotesList(JSON.parse(localStorage.getItem('notes')) || []);
      }, []);

    const addNote = () => {
      if (note.trim()) {
        const newNoteList =[...notesList, { text: note, color }];
        setNotesList(newNoteList); // Notu ve rengi listeye ekliyoruz
        localStorage.setItem('notes', JSON.stringify(newNoteList));
        setNote(''); // Notu temizliyoruz
        setColor(''); // Rengi temizliyoruz
      }
  };

  const deleteNote = (index) => {
    // Yeni bir dizi oluşturuyoruz; yalnızca 'index' parametresindeki not hariç diğer notları içeriyor.
    const newNotesList = notesList.filter((_, i) => i !== index);
    
    // Yeni diziyi `notesList` olarak güncelliyoruz
    setNotesList(newNotesList);
    localStorage.setItem('notes', JSON.stringify(newNotesList)); // Güncellenmiş notları localStorage'a kaydet   
};

  const filteredNotes = notesList.filter(item =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase()) // Arama terimini içeriyor mu kontrol et
  );
    return (
        <>
        <Search onSearch={setSearchTerm} /> {/* Arama bileşenini ekle */}
        <AddNote note={note} setNote={setNote} addNote={addNote} color={color} setColor={setColor}/>
        <div className="notelist-container">

        

        {filteredNotes.map((item, index) => (
          <Note 
            key={index} 
            noteText={item.text} 
            color={item.color}
            onDelete={() => deleteNote(index)} /> // Her bir notu Note bileşeni ile gösteriyoruz
        ))}
        </div>
        </>
    )
};