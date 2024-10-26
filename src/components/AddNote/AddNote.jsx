import './addnote.css';

export default function AddNote({ note, setNote ,addNote, color, setColor}) {

    const handleChange = (e) => {
        setNote(e.target.value);  // Üst bileşendeki setNote fonksiyonu çağrılıyor
      };

    const handleAdd = () => {
        addNote(); // Notu üst bileşendeki listeye ekliyoruz
        setNote(''); // Textarea'yı temizliyoruz
        };

        const handleColorChange = (selectedColor, event) => {
            setColor(selectedColor);
    
            // Tüm butonları bul
            const buttonsI = document.querySelectorAll('.fa-check');
    
            // Her butona bak
            buttonsI.forEach(buttonI => {
                // Eğer tıklanan butonun içindeki icon ile eşleşmiyorsa gizle
                if (buttonI !== event.target.querySelector('.fa-check')) {
                    buttonI.style.visibility = 'hidden'; // Gizle
                } else {
                    buttonI.style.visibility = 'visible'; // Tıklanan buton için göster
                }
            });
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
                        <button className='color-btn pink' onClick={(e) => handleColorChange('var(--note-color-1)', e)}><i className="fa-solid fa-check"></i></button>
                        <button className='color-btn purple' onClick={(e) => handleColorChange('var(--note-color-2)', e)}><i className="fa-solid fa-check"></i></button>
                        <button className='color-btn yellow' onClick={(e) => handleColorChange('var(--note-color-3)', e)}><i className="fa-solid fa-check"></i></button>
                        <button className='color-btn green' onClick={(e) => handleColorChange('var(--note-color-4)', e)}><i className="fa-solid fa-check"></i></button>
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