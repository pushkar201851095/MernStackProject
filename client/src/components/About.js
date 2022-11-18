import React from "react";

export const About = () => {
  return (
    <div className="container emp-profile">
      <form methon="">
        <div className="row">
          <div className="col-md-6">
       
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAMAAACZQ1hUAAAAMFBMVEXk5ueutLfn6eq3vL6rsbTc3+DIzM7X2tu6v8HO0tSnrrHFycvg4uSyuLrAxcfq7O32aSjRAAAC8UlEQVR4nO2a3VrDIAxAIUD5KaXv/7ZSplPnShNGmBecC73c+UIIkFSIyWQymUwmk8lkMpl8A/DeH4/G+sV7a6J4hwmATUqGoLXOf6RbzOiAgFl1kD/RYfMjgwExaS3/oKUfp+DlE4NiocygULjw3KBYLAMkIJ4F4VPCsUuAqQncJLgdLhUGROJagVsCNowDa2LCWk3HHxKWSwJMZVP+ZmNSEAK3EpyrAR65EkUi8jjgDbLDyhEIUhiyBIOCAEVRkNozBCKiN8UN1V8BFtJS5ECY/hKOpsCxGJGoIGXaezsY4lLkWtk9Dp6YkpneCYE+rr7RtrdDer/DTt0Wx8bo7ECsktOB0+E/5AN9X8jue5N2eyh0P7QsvU72Vmg4s1T3M0tQNwbD1Zp8YHQv1YKeEBzPHORb8x4Gjss98UIZGK6TeWeQHHje/6Ss5MjIA0KJ0K5/cShQMoIlG4oEtk4Fzg4hLhA6MSpgT08+A4FNCeaG8Y5467D3rK+WQ/MrZAlba1hrNWSIAfG8cR+WAQKF/WSAEVwcN8kB4bfHSY6Wjq07e2Zhk9T6JnL839bhQ7VDA4xfk1POpcWK/T1jToD9znCDEvRjvLqm5HIY0rqUOasYNFyEPS9Bcpsu49WvfLwNWtWARYE92nU7fu20RIUgk49c2QkQvZPPZquPHjkgLJNnAOvqQ8UHD9d78gxikdQ3r9apYzDAPB1vIyxUp8oJIhEW4VGjywA835yaDYpFejUv6pcFnER4qYGfl+FVg2LxwoKA2XoolI8zGiUw11csoe3F0dINPEdvDVcscD0VDsgS/RXo7w4GBaIERxQkrU3WMDhCSqADAQ19YRz4pgCt+UWTQBYrpmT4BPVdRMuUAA+uWQZcyXAjIK41bHviC4XICGYFRCDInznQuQ4ErTvfwuXHGZY9DJdThZ07Iw8uKjZxUNLGxWIgPo/s4FAv2Kw18u5QPbkG7MyD6u7se489Rdcd1AjqGwPGUFOYTCaTyX/kAxZ2InstwclTAAAAAElFTkSuQmCC"></img>
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h5>Xavier</h5>
              <h6>Developer</h6>
              <p className="profile-rating mt-3 mb-5">
                Rankings: <span>1/10</span>
              </p>
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                  >
                    Timeline
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <input
              type="submit"
              className="profile-edit-btn"
              name="btnAddMore"
              value="Edit Profile"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 ">
            <div className="profile-work ">
              <p>Work Link</p>
              <a href="https://github.com/pushkar201851095" target="_push">
                Github
              </a>
              <br />
              <a href="https://github.com/pushkar201851095" target="_push">
                LinkedIn
              </a>
              <br />
              <a href="https://github.com/pushkar201851095" target="_push">
                Github
              </a>
              <br />
              <a href="https://github.com/pushkar201851095" target="_push">
                Github
              </a>

            </div>
          </div>
          <div className="">
          <div className="col-md-8 pl-5  about-info ">
            <div className="tab-content profile-tab " id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                area-lebelled-by="home-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label >User Id</label>
                  </div>
                  <div className="col-md-6">
                    <label > 234125123Id</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label >Name</label>
                  </div>
                  <div className="col-md-6">
                    <label > Xavier</label>
                  </div>
                </div>

              </div>
            </div>
          </div>
          </div>
        </div>
      </form>
    </div>
  );
};
