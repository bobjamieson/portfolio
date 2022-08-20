import WorkItem from './WorkItem'

const SectionWork = () => {
    return (
        <div>
            <div className='Work-title'>
                <h2>Work</h2>
            </div>

            {/* 
                TEMPLATE:
                <WorkItem 
                    title='Title'
                    languages='HTML CSS JavaScript ReactJS'
                    description='Description.' 
                    imgSrc={require('../images/image.png')}
                    imgAlt='Image alt'
                />
            */}
            
            <WorkItem 
                title='Killik Handcrafted Rum' 
                languages='HTML • CSS • Wordpress • Elementor'
                description='This project is a simple calculator that takes a numerical value and does other things with more values.' 
                imgSrc={require('../images/work-images/killik-work-screen.jpg')}
                imgAlt='Work example #1'
            />
            <WorkItem 
                title='GinFinity' 
                languages='HTML • CSS • Wordpress • Elementor'
                description='This project is a simple calculator that takes a numerical value and does other things with more values.'
                imgSrc={require('../images/work-images/ginfinity-work-screen.jpg')}
                imgAlt='Work example #2'
            />
        </div>
    )
}

export default SectionWork