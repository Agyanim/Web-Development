import React from 'react'

const UserCard = ({getData, name,picture,email}) => {
    // const {name,email,picture}=user
    // console.log(name);
    
  return (
    <div>
        <h1>Name: {`${name?.first} ${name?.last}`}</h1>
			<img src={picture?.large} alt='img' />
			<p>Email: {email}</p>
			<button onClick={getData}>Click</button>
    </div>
  )
}

export default UserCard