import { useState } from "react";

import { Panel, PanelType } from "@fluentui/react";

import { ContexMenu } from "../../components/ContexMenu/ContexMenu";

import { Outlet, NavLink, Link } from "react-router-dom";

import github from "../../assets/github.svg";

import styles from "./Layout.module.css";

import { useLogin } from "../../authConfig";

import { LoginButton } from "../../components/LoginButton";

const Layout = () => {
    const [isConfigPanelOpen, setIsConfigPanelOpen] = useState(false);

    const closePanel = () => {
        setIsConfigPanelOpen(false);
    };
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <ContexMenu className={styles.contexMenu} onClick={() => setIsConfigPanelOpen(!isConfigPanelOpen)} />
                    <Link to="/" className={styles.headerTitleContainer}>
                        <h3 className={styles.headerTitle}>Chat about symptoms of diseases</h3>
                    </Link>
                    <nav>
                        <ul className={styles.headerNavList}>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Chat
                                </NavLink>
                            </li>
                            <li className={styles.headerNavLeftMargin}>
                                <NavLink to="/qa" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Ask a question
                                </NavLink>
                            </li>
                            <li className={styles.headerNavLeftMargin}>
                                <a href="https://aka.ms/entgptsearch" target={"_blank"} title="Github repository link">
                                    <img
                                        src={github}
                                        alt="Github logo"
                                        aria-label="Link to github repository"
                                        width="20px"
                                        height="20px"
                                        className={styles.githubLogo}
                                    />
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <h4 className={styles.headerRightText}>Azure OpenAI + AI Search</h4>
                    {useLogin && <LoginButton />}
                </div>
            </header>

            <Outlet />

            <Panel isOpen={isConfigPanelOpen} onDismiss={closePanel} headerText="Configuración" closeButtonAriaLabel="Cerrar" type={PanelType.smallFixedNear}>
                <div className={styles.panelContent}>
                    {/* Sección de Login */}
                    <div>
                        <h4>Login</h4>
                        {/* Puedes agregar aquí tus componentes o contenido relacionado con el login */}
                    </div>

                    {/* Sección de Historial */}
                    <div>
                        <h4>Historial</h4>
                        {/* Puedes agregar aquí tus componentes o contenido relacionado con el historial */}
                    </div>
                </div>
            </Panel>
        </div>
    );
};

export default Layout;
