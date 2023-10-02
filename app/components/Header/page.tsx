import Link from 'next/link'
import header from './header.module.sass'
export default function Header() {
	return (
		<header className={header.header}>
			<h2>Fernando Souto</h2>
			<ul>
				<Link href={'/'}><li>Home</li></Link>
				<Link href={'sobre'}><li>Sobre</li></Link>
				<Link href="#"><li>Contato</li></Link>
			</ul>
		</header>
	)
}