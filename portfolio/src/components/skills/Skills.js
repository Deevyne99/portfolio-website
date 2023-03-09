import React from 'react'

import { data } from '../../data'

const Skills = () => {
  return (
    <section name='skills' className='w-full h-full bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>
            Skills
          </p>
          <p className='py-4'> These are the technologies I've worked with</p>
        </div>

        <article className='w-full flex flex-wrap gap-8 text-center py-8 justify-center items-center'>
          {data.map((item) => {
            const { id, img, text } = item
            return (
              <div
                key={id}
                className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 w-[250px] rounded-md'
              >
                <img className='w-20 mx-auto' src={img} alt={text} />
                <p className='my-4 uppercase'>{text}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default Skills
