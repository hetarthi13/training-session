import logo from './logo.svg';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
    
      <header class="header navbar-area">
        <div class="container">
          <div class="row ">
            
              <nav className="navbar navbar-expand-sm p-5 justify-content-center ">
                <div className="container-fluid">
                  <ul class="navbar-nav"> 
                    <div className="col-4">
                      <img src="https://demo.graygrids.com/themes/space/assets/img/logo/logo.svg" alt="logo"/>              
                    </div>
                      <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                      </li> 
                      <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                      </li>             
                      <li class="nav-item">
                        <a class="nav-link" href="#">Service</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Pages</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Blog</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                      </li>
                      <div className=" offset-md-4">
                        <input type="text" placeholder="search" />
                      </div>
                      
                  </ul>
                </div>
              </nav>
            
          </div>
        </div> 
      </header>

      <div className="container-fluid  bg-light ">
        <div className="row justify-content-between">
          <div className="col-6">
            <h2 className="text-primary p-5">Bootstrap</h2>
            <h2 className="">Multipurpose<br/> Bootstrap Templates</h2>
            <p className="p-2">At vero eos et accusamus et iusto odio<br /> dignissimos ducimus quiblanditiis praesentium</p>
          </div>
          <div className="col-6">
          
            <img className="photo" src="https://demo.graygrids.com/themes/space/assets/img/hero/hero-img.png" alt="image"/>
          </div>
        </div>
      </div> 
      
      <div className="container p-5">
        <div className="row">
          <div className="col-3">
            <img src="https://demo.graygrids.com/themes/space/assets/img/client-logo/uideck-logo.svg" alt="logo" />
          </div>
          <div className="col-3">
            <img src="https://demo.graygrids.com/themes/space/assets/img/client-logo/graygrids-logo.svg" alt="logo" />
          </div>
          <div className="col-3">
            <img src="https://demo.graygrids.com/themes/space/assets/img/client-logo/pagebulb-logo.svg" alt="logo" />
          </div>
          <div className="col-3">
            <img src="https://demo.graygrids.com/themes/space/assets/img/client-logo/lineicons-logo.svg" alt="logo" />
          </div>
        </div>
      </div>

       <div className="container ">
        <div className="row">
          <div className="col">
            <h3 className="text-primary">
              Feature
            </h3>
            <h1>
                Why Chose Us?
            </h1>
            <p>
            At vero eos et accusamus et iusto odio dignissimos<br /> ducimus quiblanditiis praesentium
            </p>
          </div>
        </div>
      </div>

       <div className="container ">
        <div className="row">
          <div className="col-4">
            <div className="card">
                <div className="body p-5">
                  <h4>Responsive Design</h4><br />
                  Lorem ipsum dolor sit amet<br/> adipscing elitr, sed diam nonumy<br/> eirmod tempor ividunt labor dolore<br/> magna.
                </div>
            </div>
          </div>
          <div className="col-4 ">
            <div className="card">
              <div className="body p-5">
                <h4>Web devlopment</h4><br />
                Lorem ipsum dolor sit amet<br/> adipscing elitr, sed diam nonumy<br/> eirmod tempor ividunt labor dolore<br/> magna.
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="body p-5">
                <h4>Bussiness analysis</h4><br />
                  Lorem ipsum dolor sit amet<br/> adipscing elitr, sed diam nonumy<br/> eirmod tempor ividunt labor dolore<br/> magna.
              </div>
            </div>
          </div>
        </div>    
      </div>
     
      <div className="container-fluid p-5 bg-light  ">
        <div className="row justify-content-between">
          <div className="col-6 about-image-wrapper">
            <img className="photo" src="https://demo.graygrids.com/themes/space/assets/img/about/about-img.png" alt="image2"/>
          </div>
          <div className="col-sm-5 offset-md-1 text-left  p-5">
            <h1 className="text-primary"> 
              About us
            </h1>
            <h4 className="text p-3"><b>
            Built-With Boostrap 5,<br /> a New Experiance</b>
            </h4>
            <p className="p-3">
             We Crafted an awesome design library that is robust and intuitive touse. No matter you're building a business presentation websit or a complex web application our design
            </p>
          </div>
        </div>
      </div>

      
      <div className="container ">
        <div className="row p-5">
          <div className=" text-primary">
            <h1 classNam="text-primary "><b>
              Services</b>
            </h1>
          </div>
          <div className=" text-black">
            <h3 classNam="text1"><b>
             Our best Services</b>
            </h3>
          </div>
          <div className=" text-black">
            <p classNam="text1">
            At vero eos et accusamus et iusto odio dignissimos ducimus<br /> quiblanditiis praesentium
            </p>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <div className="">
                <i className="lni lni-capsule" />
                </div>
                <div className="card-title">
                  <h2>Refreshing Design</h2><br />
                  <p>
                  Lorem ipsum dolor sit amet,<br /> adipscing elitr, sed diam nonumy<br /> eirmod tempor ividunt labor dolore<br /> magna
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h1>Solid Bootstrap 5</h1><br />
                  <p>
                  Lorem ipsum dolor sit amet,<br /> adipscing elitr, sed diam nonumy<br /> eirmod tempor ividunt labor dolore<br /> magna
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h1>100+ comments</h1><br />
                  <p>
                  Lorem ipsum dolor sit amet,<br /> adipscing elitr, sed diam nonumy<br /> eirmod tempor ividunt labor dolore<br /> magna
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button type="button" data-controls="prev" tabindex="-1" aria-controls="tns2"><i class="lni lni-arrow-left"></i> click me!</button>
      <div className="container ">
        <div className="row">
          <div className="col">
          </div>
        </div>
      </div>

        
    </div>
  );
}

export default App;

