import Main from "./page";
import "../styles/globals.css";
import "../styles/fonts.css";

export const metadata = {
  title: "Lorry",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="ru">
      <body>
        <Main>{children}</Main>
      </body>
    </html>
  );
};

export default RootLayout;
