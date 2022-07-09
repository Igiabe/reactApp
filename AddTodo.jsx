import { useState } from 'react'
const AddTodo = (onAdd) => {
    const [text, setText] = useState('')
    const [Time, setTime] = useState('')
    const [Reminder, setReminder] = useState(false)
    const [Status, setStatus] = useState('')
    const [Value, setValue] = useState('')
    const onSubmit = e => {
        e.preventDefault();
        if (!text) {
            alert('please create Todo')
            return
        }
        onAdd({ text, Time, Reminder, Status, Value })

        setText('')
        setTime('')
        setStatus('')
        setValue('')
        setReminder(false)
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="mb-3"><label htmlFor="Text">Text</label>
                    <input id='Text' value={text}
                        onChange={(e) => setText(e.target.value)}
                        type="text" className="form-control" /></div>
                <div className="form-group"><label htmlFor="Time">Day and Time</label>
                    <input id='Time'
                        value={Time}
                        onChange={(e) => setTime(e.target.value)} type="text" className="form-control" /></div>

                <div className="form-group"><label htmlFor="status">status</label>
                    <input id='status'
                        value={Status}
                        onChange={(e) => setStatus(e.target.value)} type="text"
                        className="form-control" /></div>
                <div className="form-group"><label htmlFor="value">Value</label>
                    <input id='value'
                        value={Value}
                        onChange={(e) => setValue(e.target.value)}
                        type="text" className="form-control" /></div>
                <div className="form-group"><label
                    htmlFor="CheckReminder">check completed</label>
                    <input id='CheckReminder'
                        value={Reminder}
                        onChange={(e) => setReminder(e.currentTarget.checked)}
                        type="checkbox" className="mb-3" /></div>
                <input type='submit' value='add Todo'
                    className='btn btn-success' />




            </form>

        </div>
    )
}

export default AddTodo
