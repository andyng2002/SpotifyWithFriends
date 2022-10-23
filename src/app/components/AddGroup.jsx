import { useState } from 'react'

export const AddGroup = () => {
    const [title, setTitle] = useState('')
    const [members, setMembers] = useState('')

    const handleSubmit = (event)=>{
        e.preventDefault()
        
        if (!title) {
            alert('Please add a task')
            return
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Group:</label>
            <input
                type='text'
                value={title}
                placeholder='Enter your group name'
                onChange={(e)=>setTitle(e.target.value)}
            />
            <label>Members:</label>
            <input
                type='text'
                value={members}
                placeholder='Enter group member names'
                onChange={(e)=>setMembers(e.target.value)}
            />
            <input type='submit'/>
        </form>
    )
}