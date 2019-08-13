import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/UpdatesStyles.css';
import LogoBootstrap from '../../images/b2.png';
import LogoReact from '../../images/react.png';
import LogoNodejs from '../../images/nodeJs.png';
//import Example from './Example';
class Updates extends React.Component{
    render(){
        return(
            <div>
               <div className="container cta-100 ml-5">
                <div className="container">
          <         div className="row blog">
                        <div className="col-md-12">
             
                
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-4" >
                        <div className="item-box-blog">
                          <div className="item-box-blog-image">
                            
                            <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">Augu 14</span> </div>
                           
                            <figure> <img alt="" src={LogoBootstrap}/> </figure>
                          </div>
                          <div className="item-box-blog-body">
                            
                            <div className="item-box-blog-heading">
                              <a href="a" tabindex="0">
                                <h5>Boostrap magazine</h5>
                              </a>
                            </div>
                            
                            <div className="item-box-blog-data padding: px 15px;">
                              <p><i className="fa fa-user-o"></i> Admin, <i className="fa fa-comments-o"></i> Comments(3)</p>
                            </div>
                           
                            <div className="item-box-blog-text">
                              <p>Since Bootstrap is developed to be mobile first, we use.. a handful of media queries to create sensible breakpoints for our layouts and interfaces. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.</p>
                            </div>
                            <div className="mt btn bg-blue-ui white read">read more</div>
                           
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4" >
                        <div className="item-box-blog">
                          <div className="item-box-blog-image">
                            
                            <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">Augu 21</span> </div>
                            
                            <figure> <img alt="" src={LogoReact}/> </figure>
                          </div>
                          <div className="item-box-blog-body">
                           
                            <div className="item-box-blog-heading">
                              <a href="a" tabindex="0">
                                <h5>New updates for React Native</h5>
                              </a>
                            </div>
                           
                            <div className="item-box-blog-data padding: px 15px;">
                              <p><i className="fa fa-user-o"></i> Admin, <i className="fa fa-comments-o"></i> Comments(3)</p>
                            </div>
                            
                            <div className="item-box-blog-text">
                              <p>Install the Expo client app on your iOS or Android phone and connect to the same wireless network as your computer. On Android, use the Expo app to scan the QR code from your terminal to open your project. On iOS, follow on-screen instructions to get a link.</p>
                            </div>
                            <div className="mt btn bg-blue-ui white read">read more </div>
                           
                          </div>
                        </div>
                      </div>
                      <div className="col" >
                        <div className="item-box-blog">
                          <div className="item-box-blog-image">
                            
                            <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">Sep 06</span> </div>
                            
                            <figure> <img alt="" src={LogoNodejs}/> </figure>
                          </div>
                          <div className="item-box-blog-body">
                            
                            <div className="item-box-blog-heading">
                              <a href="a" tabindex="0">
                                <h5>Build nodeJs App with VS code</h5>
                              </a>
                            </div>
                           
                            <div className="item-box-blog-data">
                              <p><i className="fa fa-user-o"></i> Admin, <i className="fa fa-comments-o"></i> Comments(3)</p>
                            </div>
                            
                            <div className="item-box-blog-text">
                              <p>Node.js files must be initiated in the "Command Line Interface" program of your computer.

How to open the command line interface on your computer depends on the operating system. For Windows users, press the start button and look for "Command Prompt", or simply write "cmd" in the search field.</p>
                            </div>
                            <div className="mt"> <a href="a" tabindex="0" className="btn bg-blue-ui white read">read more</a>

                             </div>
                            <br/>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  </div>
                  </div>
          </div>
          </div>
          </div>
        </div>
        
        
        
      
        );
    }
}
export default Updates;