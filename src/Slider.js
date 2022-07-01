import data from './data'
import { useState, useEffect } from 'react'
import './slider.css'

function Slider() {
  const [people, setPeople] = useState(data)
  const [currentIndex, setIndex] = useState(0)


  function nextIndex() {
    return currentIndex === people.length - 1 ? 0 : currentIndex + 1
  }
  function previousIndex() {
    return currentIndex === 0 ? people.length - 1 : currentIndex - 1
  }

  // !make the slider slide automatically every 4 seconds

  return (
    <main className='main'>
      <h1 className="title">
        <span>/</span> Reviews
      </h1>
      <div className="reviews">
        {
          people.map((person, index) => {
            const { name, image, id, title, quote } = person;
            // !targetting what is current review and what is the next and the previous
            let className = 'review'
            if (index === currentIndex) {
              className += ' current'
            } else if (index === previousIndex()) {
              className += ' previous'
            }
            else if (index === nextIndex()) {
              className += ' next'
            }
            return (
              <div className={className} key={id}>
                <img src={image} alt={title} className='review-image' />
                <h4 className="review-name">
                  {name}
                </h4>
                <p className="review-title">
                  {title}
                </p>
                <p className="review-quote">{quote}</p>
                <i class="review-icon fa-solid fa-quote-right"></i>
              </div>
            )
          })
        }
        <button onClick={() => setIndex(previousIndex)} className='previous-btn'>
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button onClick={() => setIndex(nextIndex)} className='next-btn'>
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </main>
  );
}

export default Slider;
