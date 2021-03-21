import React from 'react';
import { connect } from 'react-redux';


function RegisterPage() {

    return (
        <section id="register" className="bg-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card-register">
                            <div className="card-header bg-primary text-white">
                                <h4>
                                <i className="fas fa-user-plus"></i> Register</h4>
                            </div>
                            <div className="card-body">
                                {/* <form action="" method="POST">
                                    <div className="form-group">
                                        <label for="first_name">First Name</label>
                                        <input type="text" name="first_name" className="form-control" required>
                                    </div>
                                    <div className="form-group">
                                        <label for="last_name">Last Name</label>
                                        <input type="text" name="last_name" className="form-control" required>
                                    </div>
                                    <div className="form-group">
                                        <label for="username">Username</label>
                                        <input type="text" name="username" className="form-control" required>
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Email</label>
                                        <input type="email" name="email" className="form-control" required>
                                    </div>
                                    <div className="form-group">
                                        <label for="password2">Password</label>
                                        <input type="password" name="password" className="form-control" required>
                                    </div>
                                    <div className="form-group">
                                        <label for="password">Confirm Password</label>
                                        <input type="password" name="password2" className="form-control" required>
                                    </div>
                                    <input type="submit" value="Register" className="btn btn-secondary btn-block">
                                </form> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const mapStateToProps = state => ({
    // blogs: state.blogs
});

const mapDispatchToProps = dispatch => {
    return {
        // getBlogs: ({page}) => dispatch(getBlogs(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
