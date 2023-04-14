import './index.css'
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'

function getGreet(time){
    const { t } = useTranslation();

    return time >= 0 && time < 4 ? t('4') :
        time >= 4 && time < 12 ? t('1')  :
        time >= 12 && time < 16 ? t('2')  :
        time >= 16 && time < 20 ? t('3')  :
        t('4');
}

function Suki() {

    const [date, setDate] = useState(new Date());
    const [text, setText] = useState(getGreet(date.getHours()));

    useEffect(() => {
        const upd = setInterval(() => {
            setDate(new Date());
            setText(getGreet(date.getHours()));
        }, 30000);
        return () => {
            clearInterval(upd);
        }
    }, []);

    const time = date.getHours() + ':' + (date.getMinutes()<10?'0':'') + date.getMinutes();

    return (
        <div className="xwm291h8j5f22jxm6hfe">
        <h2 id="time" className="k911tagyicu0jo713nee">{time}</h2>
        <h3 className="k911tagyicu0jo713nee">{text}</h3>
        </div>
    )
}

export default Suki
