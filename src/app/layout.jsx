import Main from './page.jsx';

import '@/styles/globals.css';
import '@/styles/fonts.css';

export const metadata = {
    title: 'Lorry',
};

function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body>
                <Main>{children}</Main>
            </body>
        </html>
    );
}

export default RootLayout;
