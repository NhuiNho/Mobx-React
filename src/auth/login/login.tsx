import { Link } from "react-router-dom"
import "./login.css"

const Login: React.FC = () => {


     return (
          <div className="body__login">
               <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"></link>
               <div className="container_login">
                    <h1 className="title_login">Login to your Account</h1>

                    <p className="note_login">Enter to continue and explore within your grasp</p>

                    <div className="input__box_login">
                         <svg className="icon_login" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.5" d="M7.79087 0.977173C5.49511 0.977173 3.62737 2.84492 3.62737 5.14067C3.62737 7.43642 5.49511 9.30417 7.79087 9.30417C10.0866 9.30417 11.9544 7.43642 11.9544 5.14067C11.9544 2.84492 10.0866 0.977173 7.79087 0.977173ZM7.79087 7.63877C6.41358 7.63877 5.29277 6.51796 5.29277 5.14067C5.29277 3.76339 6.41358 2.64257 7.79087 2.64257C9.16815 2.64257 10.289 3.76339 10.289 5.14067C10.289 6.51796 9.16815 7.63877 7.79087 7.63877ZM15.2852 16.7985V15.9658C15.2852 12.7524 12.6697 10.1369 9.45627 10.1369H6.12547C2.91125 10.1369 0.29657 12.7524 0.29657 15.9658V16.7985H1.96197V15.9658C1.96197 13.67 3.82971 11.8023 6.12547 11.8023H9.45627C11.752 11.8023 13.6198 13.67 13.6198 15.9658V16.7985H15.2852Z" fill="#03014C" />
                         </svg>
                         <input className="input_login" type="text" placeholder="Enter email or phone" />
                    </div>

                    <div className="input__box_login">
                         <svg className="icon_login" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.5" d="M6.79087 0.410645C4.49512 0.410645 2.62737 2.27839 2.62737 4.57414V6.23954H1.79467C0.876204 6.23954 0.129272 6.98647 0.129272 7.90494V15.3992C0.129272 16.3177 0.876204 17.0646 1.79467 17.0646H11.7871C12.7055 17.0646 13.4525 16.3177 13.4525 15.3992V7.90494C13.4525 6.98647 12.7055 6.23954 11.7871 6.23954H10.9544V4.57414C10.9544 2.27839 9.08662 0.410645 6.79087 0.410645ZM4.29277 4.57414C4.29277 3.19686 5.41358 2.07604 6.79087 2.07604C8.16815 2.07604 9.28897 3.19686 9.28897 4.57414V6.23954H4.29277V4.57414ZM11.7887 15.3992H7.62357V13.5023C8.11903 13.2134 8.45627 12.6821 8.45627 12.0684C8.45627 11.15 7.70934 10.403 6.79087 10.403C5.8724 10.403 5.12547 11.15 5.12547 12.0684C5.12547 12.6813 5.46271 13.2134 5.95817 13.5023V15.3992H1.79467V7.90494H11.7871L11.7887 15.3992Z" fill="#03014C" />
                         </svg>
                         <input className="input_login" type="password" placeholder="Password" />
                         <button className="btn__showpw_login">
                              <svg className="icon_showpw_login" width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <g opacity="0.4">
                                        <path d="M14.0048 7.40314C14.0048 8.23131 13.6758 9.02556 13.0902 9.61117C12.5046 10.1968 11.7103 10.5258 10.8821 10.5258C10.054 10.5258 9.25972 10.1968 8.67412 9.61117C8.08851 9.02556 7.75952 8.23131 7.75952 7.40314C7.75952 6.57497 8.08851 5.78072 8.67412 5.19511C9.25972 4.60951 10.054 4.28052 10.8821 4.28052C11.7103 4.28052 12.5046 4.60951 13.0902 5.19511C13.6758 5.78072 14.0048 6.57497 14.0048 7.40314Z" fill="#03014C" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.889771 7.4031C0.889771 7.4031 4.63692 0.533325 10.8822 0.533325C17.1274 0.533325 20.8746 7.4031 20.8746 7.4031C20.8746 7.4031 17.1274 14.2729 10.8822 14.2729C4.63692 14.2729 0.889771 7.4031 0.889771 7.4031ZM10.8822 11.7748C12.0416 11.7748 13.1536 11.3142 13.9734 10.4943C14.7933 9.67449 15.2538 8.56254 15.2538 7.4031C15.2538 6.24366 14.7933 5.13171 13.9734 4.31186C13.1536 3.49201 12.0416 3.03142 10.8822 3.03142C9.72273 3.03142 8.61077 3.49201 7.79093 4.31186C6.97108 5.13171 6.51049 6.24366 6.51049 7.4031C6.51049 8.56254 6.97108 9.67449 7.79093 10.4943C8.61077 11.3142 9.72273 11.7748 10.8822 11.7748Z" fill="#03014C" />
                                   </g>
                              </svg>
                         </button>
                    </div>

                    <div className="remember__forgot_login">
                         <label className="label__remember_login">
                              <input type="radio" className="remember_me__radio_login" />
                              <span className="remember_me_login">Remember me</span>
                         </label>
                         <a href="#" className="forgot__pw_login">Forgot password?</a>
                    </div>

                    <button type="button" className="btn_login">Login to Continue</button>

                    <div className="register__link_login">
                         <p>
                              Don't have an account ? <Link to={"/register"}>Sign up</Link>
                         </p>
                    </div>
               </div>
          </div>
     )
}

export default Login