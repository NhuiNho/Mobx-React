import { Link } from "react-router-dom"
import "./register1.css"

const Register1: React.FC = () => {


     return (
          <div className="body_register1">
               <div className="page__wrapper_register1">
                    <div className="page_register1">
                         <div className="image__here_register1">
                         </div>

                         <div className="container_register1">
                              <p className="login__link_register1">
                                   Do you have account? <Link className="link__login_register1" to={"/login"}>Sign in</Link>
                              </p>

                              <h1 className="title_register1">Create Account</h1>
                              <p className="note_register1">Follow the instructions to make it easier to register and you will be able to explore inside.</p>

                              <div className="input__box_register1">
                                   <svg className="icon__input_register1" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" d="M16.9009 15.4111C16.4809 14.4161 15.8713 13.5123 15.1062 12.7501C14.3434 11.9857 13.4398 11.3762 12.4452 10.9554C12.4363 10.9509 12.4274 10.9487 12.4185 10.9442C13.8058 9.94219 14.7076 8.30999 14.7076 6.46848C14.7076 3.41785 12.2359 0.946167 9.18528 0.946167C6.13465 0.946167 3.66297 3.41785 3.66297 6.46848C3.66297 8.30999 4.56479 9.94219 5.95205 10.9465C5.94315 10.9509 5.93424 10.9531 5.92533 10.9576C4.92775 11.3784 4.0326 11.9819 3.26438 12.7523C2.49996 13.5151 1.89049 14.4188 1.46963 15.4133C1.05617 16.3869 0.833185 17.4308 0.812739 18.4884C0.812144 18.5122 0.816313 18.5358 0.824999 18.558C0.833685 18.5801 0.846712 18.6003 0.863313 18.6173C0.879915 18.6343 0.899754 18.6478 0.921662 18.657C0.943571 18.6663 0.967105 18.671 0.990878 18.671H2.32692C2.4249 18.671 2.50283 18.5931 2.50506 18.4973C2.5496 16.7783 3.23988 15.1684 4.46014 13.9481C5.7227 12.6855 7.39943 11.9908 9.18528 11.9908C10.9711 11.9908 12.6479 12.6855 13.9104 13.9481C15.1307 15.1684 15.821 16.7783 15.8655 18.4973C15.8677 18.5953 15.9457 18.671 16.0436 18.671H17.3797C17.4035 18.671 17.427 18.6663 17.4489 18.657C17.4708 18.6478 17.4906 18.6343 17.5072 18.6173C17.5238 18.6003 17.5369 18.5801 17.5456 18.558C17.5542 18.5358 17.5584 18.5122 17.5578 18.4884C17.5356 17.424 17.3151 16.3886 16.9009 15.4111ZM9.18528 10.2985C8.16321 10.2985 7.20125 9.89989 6.47756 9.1762C5.75387 8.45251 5.35529 7.49055 5.35529 6.46848C5.35529 5.44641 5.75387 4.48446 6.47756 3.76077C7.20125 3.03708 8.16321 2.63849 9.18528 2.63849C10.2074 2.63849 11.1693 3.03708 11.893 3.76077C12.6167 4.48446 13.0153 5.44641 13.0153 6.46848C13.0153 7.49055 12.6167 8.45251 11.893 9.1762C11.1693 9.89989 10.2074 10.2985 9.18528 10.2985Z" fill="#03014C" />
                                   </svg>
                                   <input className="input_register1" type="text" placeholder="Username" />
                              </div>

                              <div className="input__box_register1">
                                   <svg className="icon__input_register1" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.5">
                                             <path d="M1.68964 6.74588C1.68987 6.5958 1.72862 6.44829 1.80217 6.31746C1.87572 6.18664 1.98161 6.07688 2.10972 5.99868L9.58257 1.4313L17.0554 5.99868C17.1835 6.07688 17.2894 6.18664 17.363 6.31746C17.4365 6.44829 17.4753 6.5958 17.4755 6.74588V15.4632C17.4755 15.6958 17.3831 15.9188 17.2186 16.0833C17.0542 16.2478 16.8311 16.3402 16.5985 16.3402H2.56663C2.33404 16.3402 2.11097 16.2478 1.9465 16.0833C1.78203 15.9188 1.68964 15.6958 1.68964 15.4632V6.74588Z" stroke="#03014C" strokeWidth="1.75399" />
                                             <path d="M1.68958 7.1318L9.58251 11.9553L17.4754 7.1318" stroke="#03014C" strokeWidth="1.75399" strokeLinecap="round" />
                                        </g>
                                   </svg>
                                   <input className="input_register1" type="email" placeholder="Email" />
                              </div>

                              <div className="input__box_register1">
                                   <svg className="icon__input_register1" width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" d="M7.58259 14.9324C8.54728 14.9324 9.33658 14.1431 9.33658 13.1784C9.33658 12.2137 8.54728 11.4244 7.58259 11.4244C6.6179 11.4244 5.82861 12.2137 5.82861 13.1784C5.82861 14.1431 6.6179 14.9324 7.58259 14.9324ZM12.8445 7.03946H11.9676V5.28548C11.9676 2.86498 10.0031 0.900513 7.58259 0.900513C5.16209 0.900513 3.19763 2.86498 3.19763 5.28548H4.86391C4.86391 3.78582 6.08293 2.5668 7.58259 2.5668C9.08225 2.5668 10.3013 3.78582 10.3013 5.28548V7.03946H2.32064C1.35594 7.03946 0.56665 7.82875 0.56665 8.79345V17.5634C0.56665 18.5281 1.35594 19.3174 2.32064 19.3174H12.8445C13.8092 19.3174 14.5985 18.5281 14.5985 17.5634V8.79345C14.5985 7.82875 13.8092 7.03946 12.8445 7.03946ZM12.8445 17.5634H2.32064V8.79345H12.8445V17.5634Z" fill="#03014C" />
                                   </svg>
                                   <input className="input_register1" type="password" placeholder="Password" />
                              </div>

                              <button className="button__create_register1">Create Account</button>

                              <div className="container__btn_create_link_register1">
                                   <button className="btn__create_link_register1">
                                        <div className="content__btn_create_link_register1">
                                             <img className="icon_btn_create_link_register1" src="./icon/icon_google.png" alt="" />
                                             <span className="text__btn_create_link_register1">Google</span>
                                        </div>
                                   </button>

                                   <button className="btn__create_link_register1">
                                        <div className="content__btn_create_link_register1">
                                             <img className="icon_btn_create_link_register1" src="./icon/icon_facebook.png" alt="" />
                                             <span className="text__btn_create_link_register1">Facebook</span>
                                        </div>
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Register1