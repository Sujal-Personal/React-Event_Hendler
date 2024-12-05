import { useState } from "react"

const Home = () => {
    const [visible, setvisible] = useState(true)
    const [color, setColor] = useState('')

    const handleMulti = () => {
        setInterval(() => {            
            setColor((prevColor) => (prevColor === '' ? 'red' : ''));
        }, 200);
    }
    return (
        <>
            <div className="btn-group">
                <button style={{ marginLeft: '12px' }} onClick={() => setvisible(false)}>Hide</button>
                <button style={{ marginLeft: '12px' }} onClick={() => setvisible(true)}>Show</button>
                <button style={{ marginLeft: '12px' }} onClick={() => setvisible(visible => !visible)}>Toggle</button>
                <button style={{ marginLeft: '12px' }} onClick={() => setColor(red => !red)}>Color</button>
                <button style={{ marginLeft: '12px' }} onClick={handleMulti}>AutoColor</button>
            </div>
            <div className="text" id="text" style={{ textDecoration:'underline',textDecorationStyle:'double',marginTop:'20px', fontSize:'30px',fontWeight:'bold',display: visible ? 'block' : 'none', color: color?'red':'white' }}>
                RED & WHITE MULTIMEDIA EDUCATION
            </div>
        </>
    )
}

export default Home