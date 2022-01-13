import React from 'react';
import Cards from './Components/Cards';
import data from './Components/Data';
function App() {
  return (
    <>
      <h1 className='heading-style'> Welcome </h1>
      {
        data.map((val) =>
          <Cards
            key={val.id}
            imgsrc={val.imgsrc}
            link={val.link}
            sname={val.sub_title}
            title={val.title}
          />
        )}
    </>
  )
}

export default App