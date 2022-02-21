import { useEffect, useState } from 'react';
import './Splash.css';

const Splash: React.FC = () => {

    const [showSplash, setSplash] = useState({
        fade : 'splash',
    });

    useEffect(() => {
        setTimeout(() => {
            setSplash({
                fade : 'splash fadeout',
            });
        }, 3000);
    }, []);

    return (
        // create splash screen
        <div className={showSplash.fade}>
        </div>
    );
};

export default Splash;