import React from 'react'

function Tour(props) {
    const [isVisible, setIsVisible] = React.useState(false);
  
    return (
        <section className='tour'>
            <article className='tour--container'>
                <img className='tour--image' src={props.image} alt={props.name} />
                <footer className='tour--footer'>
                    <div className='tour--header'>
                        <h4>{props.name}</h4>
                        <h4>${props.price}</h4>
                    </div>
                    <p>{
                        isVisible ? `${props.info} ` : `${props.info.slice(0, 200)}... `
                    }
                        <span className='change--isVisible' onClick={() => setIsVisible(!isVisible)}>{isVisible ? "Show Less" : "Read More"}</span>
                    </p>
                    <div className="button">
                    <button onClick={() => props.deleteTour(props.id)} className='btn--delete'>Not Interested</button>
                    </div>
                </footer>
            </article>
        </section>
    );
}

export default Tour