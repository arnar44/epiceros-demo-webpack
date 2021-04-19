import React, { Fragment } from 'react';

function SideBar(props) {
  const { teamList } = props;

  return (
    <Fragment>
      <title>Join the team</title>
      <div className='bg-cogs white pv4 ph5 h-100'>
        <h1 className='f1 flex flex-column'>
          <span>Join</span>
          <span>the</span>
          <span>team</span>
        </h1>
        <ul className='pl3 lh-copy'>
          {teamList.map( (employee, i) => {
            return <li key={i}>{employee}</li>
          })}
        </ul>
      </div>
    </Fragment>
  )
}

export default SideBar;