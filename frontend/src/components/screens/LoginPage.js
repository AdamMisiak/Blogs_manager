// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import ClipLoader from "react-spinners/ClipLoader";

// import { getBlogs } from '../../actions/Blogs';
// import Blog from '../common/Blog';
// import Showcase from '../layout/Showcase';

// const override = "display: block; margin: 0 auto;";

// function LoginPage({}) {
//     useEffect(() => {
//         getBlogs()
//     }, [])

//     return (
//         <div id="register" class="bg-light py-5">
//         <div class="container">
//             <div class="row">
//                 <div class="col-md-6 mx-auto">
//                     <div class="card-login">
//                         <div class="card-header bg-primary text-white">
//                             <h4>
//                                 <i class="fas fa-sign-in-alt"></i> Login</h4>
//                         </div>
//                         <div class="card-body">
    
                        
                            
//                             <form action="{% url 'login' %}" method="POST">
//                                 {% csrf_token %}
//                                 <div class="form-group">
//                                     <label for="username">Username</label>
//                                     <input type="text" name="username" class="form-control" required>
//                                 </div>
//                                 <div class="form-group">
//                                     <label for="password2">Password</label>
//                                     <input type="password" name="password" class="form-control" required>
//                                 </div>
//                                 <input type="submit" value="Login" class="btn btn-secondary btn-block">
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//             );
// }

// const mapStateToProps = state => ({
//     blogs: state.blogs
// });

// const mapDispatchToProps = dispatch => {
//     return {
//         getBlogs: () => dispatch(getBlogs())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
