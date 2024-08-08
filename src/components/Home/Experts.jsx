import './Experts.css'
import ExpertCard from './ExpertCard'


const Experts = () => {
  return (
    <section className='experts-wrapper'>
      <h2 className='experts-title'>
        Meet Our Tour Experts
      </h2>
      <div className="experts-article">
        <ExpertCard
          photo={'/images/experts/expert-1.jpg'}
          name={'Sienna Clarke'}
          location={'Los Angeles, CA'}
          linkedin={'https://www.linkedin.com'}
          instagram={'https://wwww.instagram.com'}
        />
                <ExpertCard
          photo={'/images/experts/expert-2.jpg'}
          name={'Ethan Rivers'}
          location={'New York City, NY'}
          linkedin={'https://www.linkedin.com'}
          instagram={'https://wwww.instagram.com'}
        />
                <ExpertCard
          photo={'/images/experts/expert-3.jpg'}
          name={'Amelia Brooks'}
          location={'Chicago, IL'}
          linkedin={'https://www.linkedin.com'}
          instagram={'https://wwww.instagram.com'}
        />
                <ExpertCard
          photo={'/images/experts/expert-4.jpg'}
          name={'Isabella Summers'}
          location={'Houston, TX'}
          linkedin={'https://www.linkedin.com'}
          instagram={'https://wwww.instagram.com'}
        />
                <ExpertCard
          photo={'/images/experts/expert-5.jpg'}
          name={'Julian Hayes'}
          location={'Miami, FL'}
          linkedin={'https://www.linkedin.com'}
          instagram={'https://wwww.instagram.com'}
        />
                <ExpertCard
          photo={'/images/experts/expert-6.jpg'}
          name={'Liam Bennett'}
          location={'Seattle, WA'}
          linkedin={'https://www.linkedin.com'}
          instagram={'https://wwww.instagram.com'}
        />
        <ExpertCard
          photo={'/images/experts/expert-7.jpg'}
          name={'Sarah Wong'}
          location={'Los Angeles, CA'}
          linkedin={'https://www.linkedin.com'}
          instagram={'https://wwww.instagram.com'}
        />
        <ExpertCard
          photo={'/images/experts/expert-8.jpg'}
          name={'Nayim Barkat'}
          location={'Los Angeles, CA'}
          linkedin={'https://www.linkedin.com'}
          instagram={'https://wwww.instagram.com'}
        />
        <ExpertCard
          photo={'/images/experts/expert-9.jpg'}
          name={'Sandra Erikson'}
          location={'Los Angeles, CA'}
          linkedin={'https://www.linkedin.com'}
          instagram={'https://wwww.instagram.com'}
        />
      </div>
    </section>
  )
}

export default Experts