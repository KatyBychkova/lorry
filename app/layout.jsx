import "../styles/globals.css";
import "../styles/fonts.css";

export const metadata = {
  title: "Lorry",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="ru">
      <body>
        <div></div>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
