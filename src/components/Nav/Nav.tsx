import Link from "next/link";
import n from "./Nav.module.css";

export default function Nav() {
    return <nav className={n.nav}>
        <Link href="/">Додому</Link>
        <Link href="/services">Послуги</Link>
        <Link href="/prices">Прайс</Link>
        <Link href="/selections">Підбори</Link>
        <Link href="/order">Замовити</Link>
    </nav>
}