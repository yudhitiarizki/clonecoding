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

                <div>
                    <div className='bottom-link'><i class="fa-solid fa-angle-left"></i>Go to card makers</div>
                    <br />
                    <br />
                    <div className='recentlybrowsing-box'>
                        Recently Browsing
                        <span>3 members</span>
                    </div>
                    <div className='username-list'>
                        <span>Hallohallo,</span>
                        <span>Emir Dumancas,</span>
                        <span>TermsW</span>
                    </div>
                    <div className='focus-precontent bottom-navbar'>
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
                    <div className='footer-container'>
                        <div className='left-ipslayout'>
                            <div><span className='span1'>IPS Theme</span> by <span className='span1'>IPSFocus</span></div>
                            <div className='bottom-left-ips'>
                                <span className='span2'>Theme <i className="fa-solid fa-caret-down"></i></span>
                                <span>Privacy Policy</span>
                            </div>
                        </div>
                        <div className='powered'>Powered by Invision Community</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;