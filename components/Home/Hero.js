import React from 'react'

export default function Hero () {
  return (
    <section className='container-fluid hero'>
      <div className='row'>
        <article className='col-lg-6'>
          <h1 className='hero__title'>Hey There, I’m Freddy</h1>
          <a href='' className='d-none d-lg-block hero__email'>fcode1509@gmail.com</a>
        </article>
        <article className='col-lg-6'>
          <p>I design beautifully simple things, And I love what i do</p>
        </article>
      </div>
    </section>
  )
}
