import { useState } from 'react'

const createGroup = () => {
    const [title, setTitle] = useState('')
    const [members, setMembers] = useState('')

    return (
        <form className='add-form'>
            <Box className='form-control'>
                <label>Title</label>
                <input type='text' placeholder='Create Group Name'/>
            </Box>
            <Box className='form-control'>
                <label>Members</label>
                <input type='text' placeholder='Add Group Member' className='btn btn-block'/>
            </Box>

            <input type='submit' value='Save Group'/>
        </form>
    )
    }