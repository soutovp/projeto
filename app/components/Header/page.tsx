import header from './header.module.sass'
export default function Header() {
	return (
		<header className={header.header}>
			<h2>Fernando Souto</h2>
			<ul>
				<a href="#"><li>Home</li></a>
				<a href="#"><li>Sobre</li></a>
				<a href="#"><li>Contato</li></a>
			</ul>
		</header>
	)
}