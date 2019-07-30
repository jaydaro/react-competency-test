import React, { useState, useEffect } from 'react'

const Modal = () => {
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch(`https://private-5bdb3-friendmock.apiary-mock.com/friends/id`)
        .then(res => res.json())
        .then(res => setDetails(res))
    }, [details]);

  return (
    <>
      <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal">
        Select
      </button>


      <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div key={details.id} className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{details.first_name + ' ' + details.last_name}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {details.bio}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal;