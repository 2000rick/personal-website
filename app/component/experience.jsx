import React from 'react'

const Experience = ({data}) => {
  const {title, experiences} = data;
  return (
    <section>
        <h2 className='mb-4'> {title} </h2>
        <div className='flex flex-col gap-6'>
            {experiences.map(({ link, role, description, current }) => (
                <div key={role} className='flex flex-col rounded-lg'>
                    <span className={`h-2 ${current ? "bg-blue" : "bg-grey"}`} />
                    <div className='bg-grey-light p-6 drop-shadow-md'>
                        <a href={link} target='_blank'>
                            <h3 className="hover:text-blue"> {role} </h3>
                        </a>
                        {
                            description.split("\n").map((element, i) =>
                                <p key={i}> {element} </p>
                            )
                        }
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
};

export default Experience
