import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__paragrath">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__container">
                <p className="footer__label">© 2022</p>
                <div className="footer__links">
                    <a className="footer_link" href="https://practicum.yandex.ru/profile/web/">Яндекс.Практикум</a>
                    <a className="footer_link" href="https://github.com/SleepyDoo">Github</a>
                    <a className="footer_link" href="https://t.me/sleepydoo">Telegram</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;