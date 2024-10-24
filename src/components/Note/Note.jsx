import './note.css';

export default function Note ({noteText}) {
    return (
        <>
        <div className="container">
            <div className="note-container">
                <div className="note">
                    <p>{noteText}</p>
                    <i class="fa-regular fa-trash-can"></i>
                </div>
            </div>
        </div>
        </>
    )
};