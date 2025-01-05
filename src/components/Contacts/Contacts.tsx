import n from "./Contacts.module.css";

export default function Contacts() {
    return <div className={n.contactsBar}>
    <div className={n.leftContainer}>
        <div>
            <p>Пн - Пт : 10:00 до 19:00</p>
        </div>
        <div>
            <p>dexymiron@gmail.com</p>
        </div>
        <div>
            <p>Telegram</p>
        </div>
    </div>
    <div className={n.rightContainer}>
        <div>
            logo1
        </div>
        <div>
            logo2
        </div>
    </div>
    </div>
}