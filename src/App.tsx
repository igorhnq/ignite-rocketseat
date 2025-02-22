import { Header } from "./components/Header"
import { Post, PostType } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'

const posts: PostType[] = [
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/ericopieri.png',
            name: 'Erico Pieri',
            role: 'Software Engineer Student'
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa'},
            { type: 'paragraph', content: 'Acabei de subir mais um porjeto no meu portifa. É um projeto que eu fiz no NLW Return, evento da Rocketseat'},
            { type: 'link', content: 'jane.design/doctorcare'}
        ],
        publishedAt: new Date('2025-02-01 20:00:00')
    },
]

export function App() {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map(post => {
                        return (
                            <Post 
                                key={post.id}
                                post={post}
                            />
                        )
                    })}
                </main>
            </div>
        </div>
    )
}

 