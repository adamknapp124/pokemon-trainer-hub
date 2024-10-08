import './globals.css';

import { featureLinks } from '@/app/constants/navLinks';

import Navbar from '@/app/components/navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Navbar links={featureLinks} />

				{children}
			</body>
		</html>
	);
}
