import './note.css'
export default function Note() {

    return (
        <>
        <div className="container">
            <div className="note-input">
                <textarea className='note-container' type="textarea" placeholder='Enter your note here..' />

                <div className="btn-container">
                    <div className="color-btn-group">
                        <button className='color-btn pink' onClick={() => changeColor('#f4aeba')}><i class="fa-solid fa-check"></i></button>
                        <button className='color-btn purple'><i class="fa-solid fa-check"></i></button>
                        <button className='color-btn yellow'><i class="fa-solid fa-check"></i></button>
                        <button className='color-btn green'><i class="fa-solid fa-check"></i></button>
                    </div>
                    <div className="add-btn">
                        <button className='add'>Add</button>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
};