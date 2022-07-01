import data from './data'
import { useEffect, useState } from 'react'
import './slider.css'

function Slider() {
  const [people, setPeople] = useState(data)
  const [currentIndex, setIndex] = useState(0)

  // !=== making sure that the index does not go beyond the length of the array
  useEffect(() => {
    const lastIndex = people.length - 1
    if (currentIndex > lastIndex) setIndex(0)
    else if (currentIndex < 0) setIndex(lastIndex)
  }, [currentIndex, people])


  // ! === making the slider move automatically to the next person every 5 seconds

  useEffect(() => {
    let interval = setInterval(() => setIndex(currentIndex + 1), 5000)
    return () => clearInterval(interval)
  }, [currentIndex])


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
            } else if (index === currentIndex - 1 ||
              (currentIndex === 0 && index === people.length - 1)) {
              className += ' previous'
            } else if (index === currentIndex + 1 ||
              (currentIndex === people.length - 1 && index === 0)) {
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
        <button onClick={() => setIndex(currentIndex - 1)} className='previous-btn'>
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button onClick={() => setIndex(currentIndex + 1)} className='next-btn'>
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </main>
  );
}

export default Slider;
