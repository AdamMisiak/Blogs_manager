import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../../styles/ReportBlog.css";


function ReportBlogPage() {
    const [name, setName] = useState("")
    const [url, setUrl] = useState("")

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        // dispatch(login(username, password));
        setName("")
        setUrl("")
    };

    const inputNameHandler = e => setName(e.target.value);
    const inputUrlHandler = e => setUrl(e.target.value);

    return (
      <div className="report-blog">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="card-report-blog">
                <div className="card-header bg-primary text-white">
                    <h5>
                    <i className="fas fa-user-plus"></i> Report Blog</h5>
                </div>
                <div className="card-body">
                <p>Send us you favourite blogs to be able to follow them!</p>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        onChange={inputNameHandler}
                        value={name}
                      />
                    </div>
                    <div className="form-group">
                      <label>URL</label>
                      <input
                        type="text"
                        className="form-control"
                        name="url"
                        onChange={inputUrlHandler}
                        value={url}
                      />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ReportBlogPage;
