import InputGroup from './InputGroup';
import '../assets/css/style.css'
import '../assets/css/fontawesome.css';

const Main = () => {
    return (
        <div>
            <div className='focus-header'>
                <div className='logo'>
                    <img src="https://www.cardmaker.net/uploads/monthly_2022_03/logo.png.afdb7ef0c2d6369875ab024b293218e4.png" alt="Yugioh Card Maker Forum" />
                </div>
                <div className='focus-user'>
                    {/* Sign In, Sign Up */}
                </div>
            </div>
            <div className='focus-navbar'>
                <nav>
                    <div className='current-nav-item'>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        Yugioh Card Maker
                    </div>
                    <div className='nav-item'>
                        <span className="material-symbols-outlined">
                            description
                        </span>
                        Other Makers
                        <i className="fa-solid fa-caret-down"></i>
                    </div>
                    <div className='nav-item'>
                        <i className="fa-solid fa-comments"></i>
                        Forums
                    </div>
                    <div className='nav-item'>
                        <i className="fa-solid fa-trophy"></i>
                        Leaderboard
                    </div>
                    <div className='nav-item'>
                        <i className="fa-solid fa-bullhorn"></i>
                        Activity
                        <i className="fa-solid fa-caret-down"></i>
                    </div>
                </nav>
                <div>
                    {/* Ini untuk search box */}
                </div>
            </div>
            <div className='body-content'>
                <div className='focus-content'>
                    <div className='focus-precontent'>
                        <div className='left-precontent'>
                            <div className='precontent-home'>
                                Home
                                <div className='arrow-border-container'>
                                    <div className='box bottom-box'></div>
                                    <div className='box top-box'></div>
                                </div>
                            </div>
                            <div className='precontent-currentpage'>Yugioh Card Maker</div>
                        </div>
                        <div className='right-precontent'>
                            <span className="material-symbols-outlined">
                                backup_table
                            </span>
                            All Activity
                        </div>
                    </div>
                    <div className='top-add'></div>
                    <div className='cardmaker-container'>
                        <InputGroup />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;