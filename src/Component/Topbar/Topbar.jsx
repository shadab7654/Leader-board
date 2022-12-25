import React from 'react';
import "./topbar.css";
import { Notifications, Settings, Language } from '@mui/icons-material';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import SettingsIcon from '@mui/icons-material/Settings';
// import LanguageIcon from '@mui/icons-material/Language';


export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    <span className='logo'>Lamaadmin</span>
                </div>
                <div className="topbarRight">
                    <div className="topbarIconsContainer">
                        <Notifications />
                        <span className="topbarIconsBadges">
                            2
                        </span>

                    </div>

                    <div className="topbarIconsContainer">
                        <Language />
                        <span className="topbarIconsBadges">
                            2
                        </span>

                    </div>

                    <div className="topbarIconsContainer">
                        <Settings />
                    </div>
                    <img src="https://i.pinimg.com/736x/ff/2e/21/ff2e21ce1088b767844327d75bbf9030.jpg" alt='Avtar' className='topAvtar' />

                </div>

            </div>
        </div>
    )
}
