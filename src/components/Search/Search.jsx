import './search.css';

export default function Search ({ onSearch }) {
    const handleChange = (e) => {
        onSearch(e.target.value); // Kullanıcı girişi üst bileşene gönder
    };
    
    return (
        <>
        <div className="container">
            <div className="search-container">
                <input className='search-input' type="text" placeholder='Search..' 
                onChange={handleChange} 
                />
            </div>
        </div>
        </>
    )
}