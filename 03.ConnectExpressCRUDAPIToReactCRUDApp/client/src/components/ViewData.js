import React from 'react';
import ViewStoreData from './ViewStoreData';

export const ViewData = ({ loading, error, view, update, delet }) => {
  return (
    <div className="container">
      <h1>View Data</h1>
      {loading ? ( // Display loading state
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <p>Loading data, please wait...</p>
        </div>
      ) : error ? ( // Display error message if any
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        // Display fetched data
        <div className="table-responsive"> {/* Make table responsive */}
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {view?.map((data, index) => (
                <ViewStoreData
                  key={index}
                  index={index}
                  fname={data.fname}
                  lname={data.lname}
                  email={data.email}
                  update={() => update(data)}
                  delet={() => delet(data._id)}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};