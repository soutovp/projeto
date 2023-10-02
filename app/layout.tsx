import Header from "@components/Header/page"
import './styles/style.sass'
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-br">
			<body>
				<Header />
				<main>
					{children}
				</main>
			</body>
		</html>
	)
}