import './note.css';

export default function Note ({noteText,color,onDelete}) {

    return (
        <>
                <div className="note" style={{ backgroundColor: color }}>   
                    <p>{noteText}</p>
                    <i class="fa-regular fa-trash-can" onClick={onDelete}></i>
                </div>
        </>
    )
};