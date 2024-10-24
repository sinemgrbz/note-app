import './addnote.css'
export default function AddNote({ note, setNote ,addNote}) {

    const handleChange = (e) => {
        setNote(e.target.value);  // Üst bileşendeki setNote fonksiyonu çağrılıyor
      };

    const handleAdd = () => {
        addNote(); // Notu üst bileşendeki listeye ekliyoruz
        setNote(''); // Textarea'yı temizliyoruz
        };

    return (
        <>
        <div className="container">
            <div className="note-input">
                <textarea 
                    className='note-container' 
                    type="textarea" 
                    placeholder='Enter your note here..'
                    value={note} //üst component ta dolucak
                    onChange={handleChange} /> 

                <div className="btn-container">
                    <div className="color-btn-group">
                        <button className='color-btn pink'><i class="fa-solid fa-check"></i></button>
                        <button className='color-btn purple'><i class="fa-solid fa-check"></i></button>
                        <button className='color-btn yellow'><i class="fa-solid fa-check"></i></button>
                        <button className='color-btn green'><i class="fa-solid fa-check"></i></button>
                    </div>
                    <div className="add-btn">
                        <button className='add' onClick={handleAdd}>Add</button>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
};