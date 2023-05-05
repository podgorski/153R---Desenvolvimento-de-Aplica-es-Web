import { Link } from 'react-router-dom'
import './style.css'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/user'

import firebaseApp from '../../services/firebase'

import { getFirestore, addDoc, collection, getDocs, onSnapshot, query } from 'firebase/firestore'

const Dashboard = () => {

    const { signOut, user } = useContext(UserContext)

    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState<any>([])

    useEffect(() => {

        const q = query(collection(db, "messages"))

        onSnapshot(q, (querySnapshot) => {
            const aux: any = []
            querySnapshot.forEach((doc: any) => {
                console.log(doc.id, doc.data())
                aux.push({
                    id: doc.id,
                    ...doc.data()
                })

            })
            setMessages([...aux])
        })


        // const getMessagesDB = async () => {
        //     const docs = await getDocs(collection(db, "messages"))
        //     const aux: any = []
        //     docs.forEach((doc: any) => {
        //         console.log(doc.id, doc.data())
        //         aux.push({
        //             id: doc.id,
        //             ...doc.data()
        //         })
        //     })
        //     setMessages([...aux])
        // }

        // getMessagesDB()
    }, [])

    const db = getFirestore(firebaseApp)

    const handleAdd = async function () {

        const message_json = {
            message,
            email: user.email
        }

        const docref = await addDoc(collection(db, "messages"), message_json)
        // console.log('docref', docref.id)

        // setMessages([...messages, message_json])
        setMessage("")
    }

    return (
        <>
            <input type="text" value={message} onChange={(e) => { setMessage(e.target.value) }} />
            <button onClick={() => { handleAdd() }}>Enviar</button>

            {messages.map((m: any) => (
                <>
                    <div>{m.email}</div>
                    <div>{m.message}</div>
                </>
            ))}

            <h1>Dashboard</h1>
            <Link to="/game">JOGAR!</Link>
            <div onClick={() => signOut()}>Deslogar</div>
        </>
    )
}

export default Dashboard