const Footer = () => {
    return (
        <div>
            <div className='Footer-container'>
                <div className='Footer-column-one'>
                    <img src={require('../images/pixel-face-icon.png')} alt='Face icon' />
                </div>
                <div className='Footer-column-two'>
                    <p>
                        Hey, I'm Bob. I do things and stuff which require all sorts. I'm into this and that.
                        <br />
                        Let's do something cool!
                    </p>
                </div>
                <div className='Footer-column-three'>
                    <form>
                        <input type='text' placeholder='Name' required></input>
                        <input type='email' placeholder='Email' required></input>
                        <textarea type='text' placeholder='Message' required></textarea>
                        <button>Get in touch!</button>
                    </form>
                </div>
            </div>
            <div className='Footer-bottom'>
                <h4>Bob Jamieson 2022</h4>
            </div>
        </div>
    )
}

export default Footer