import React, {useId} from 'react'

const AboutMe = ({data}) => {
  const {title, body} = data;
  const id = useId();
  return ( 
    <section>
        <h2 className='mb-4'> {title} </h2>
        {body?.map((element, i) => 
            <p key={`${id}_${i}`} className='mb-5'> 
                {element}
            </p> 
        )}
    </section>
  )
}

export default AboutMe