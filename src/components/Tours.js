import React from 'react'
import Tour from './Tour';

function Tours(props) {

  return (
    <main className='tours'>
      {props.tours.map(tour => {
        console.log(tour);
        return (
          <Tour key={tour.id} {...tour} deleteTour={props.deleteTour} />
        );
      })
      }
    </main>
  )
}

export default Tours