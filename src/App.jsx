import {useState} from 'react'
import {Header} from './components/Header'
import {Post} from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <Header/>

            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    <Post
                        author='Jordan Zanoni'
                        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem.'/>
                </main>

            </div>

        </div>
    )
}

export default App
