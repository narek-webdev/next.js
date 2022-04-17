import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();
    
    const changeLanguage = e => router.push(router.asPath, router.asPath, { locale: e.target.value })
    
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <select onChange={changeLanguage}>
                            <option value="en"> EN </option>
                            <option value="ru"> RU </option>
                        </select>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;