import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    const inputRef = useRef();

    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor='addItem'>Add to List</label>
            <input
                autoFocus
                ref={inputRef}
                id='addItem'
                type='text'
                placeholder='Add to List'
                required
                autoComplete='off'
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                type='submit'
                title='Add to List'
                aria-label='Add to List'
                onClick={() => inputRef.current.focus()}
            >
                <FaPlus/>
            </button>
        </form>
    )
}

export default AddItem
