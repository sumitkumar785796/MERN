import React from 'react'

const ViewStoreData = ({index,fname,lname,email,update,delet}) => {
  return (
    <>
    <tr>
    <th scope="row">{index+1}</th>
    <td>{fname}</td>
    <td>{lname}</td>
    <td>{email}</td>
    <td>
    <button className="btn btn-warning" onClick={update}>Update</button>
    </td>
    <td>
    <button className="btn btn-danger ml-2" onClick={delet}>Delete</button>
    </td>
  </tr>
    </>
  )
}

export default ViewStoreData