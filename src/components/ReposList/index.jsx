import { useState, useEffect } from "react";

import styles from './ReposList.module.css'
const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJSON => {
            setRepos(resJSON);
        })
    }, [nomeUsuario])
    return (
        <div className="container">
            <ul className={styles.list}>
            {repos.map(({id, name, language, html_url }) => (
                <li key={id} className={styles.listItem}>
                    <div className={styles.listItemName}>
                        <b>Nome: </b> {name}
                    </div>
                    <div className={styles.listLanguage}>
                        <b>Linguagem: </b> {language}
                    </div>
                    <a className={styles.listItemLink} target="_blank" href={html_url}>Visitar no github</a>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default ReposList;