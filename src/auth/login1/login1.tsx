import { Link } from "react-router-dom"
import "./login1.css"

const Login1: React.FC = () => {


     return (
          <div className="body__login1">
               <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"></link>
               <div className="page__wrapper_login1">
                    <div className="page_login1">
                         <div className="container_login1">
                              <h1 className="title_login1">Log in</h1>

                              <p className="note_login1">enter to continue and explore within your grasp.</p>

                              <div className="input__box_login1">
                                   <label className="label_login1">Email address</label>
                                   <div className="input__container_login1">
                                        <input type="text" placeholder="Youraddress@email.com" className="input_login1" />
                                   </div>
                              </div>

                              <div className="input__box_login1">
                                   <label className="label_login1">Password</label>
                                   <div className="input__container_login1">
                                        <input type="password" placeholder="Enter your password" className="input_login1" />
                                        <button className="btn__showpw_login1">
                                             <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path opacity="0.3" d="M13.5683 16.1619C14.5 16.1619 15.3935 15.7887 16.0523 15.1243C16.7111 14.46 17.0812 13.559 17.0812 12.6195C17.0812 12.5157 17.0765 12.4129 17.0677 12.3114L13.2628 16.1483C13.3635 16.1571 13.4651 16.1619 13.5683 16.1619ZM25.196 1.66193L23.8561 0.312013C23.8091 0.264596 23.7453 0.237961 23.6787 0.237961C23.6122 0.237961 23.5484 0.264596 23.5014 0.312013L20.0725 3.77063C18.181 2.79583 16.0547 2.30843 13.6938 2.30843C7.66535 2.30843 3.16756 5.47448 0.200407 11.8066C0.0811415 12.0613 0.0192871 12.3394 0.0192871 12.621C0.0192871 12.9027 0.0811415 13.1808 0.200407 13.4355C1.38601 15.9538 2.81366 17.9722 4.48334 19.4908L1.1652 22.8356C1.11818 22.883 1.09177 22.9474 1.09177 23.0145C1.09177 23.0815 1.11818 23.1459 1.1652 23.1933L2.50419 24.5435C2.55124 24.591 2.61504 24.6176 2.68156 24.6176C2.74808 24.6176 2.81188 24.591 2.85893 24.5435L25.196 2.01997C25.2194 1.99647 25.2379 1.96857 25.2505 1.93785C25.2631 1.90713 25.2696 1.87421 25.2696 1.84095C25.2696 1.8077 25.2631 1.77478 25.2505 1.74406C25.2379 1.71334 25.2194 1.68543 25.196 1.66193ZM8.048 12.6195C8.04792 11.658 8.2948 10.7128 8.7646 9.87614C9.2344 9.03945 9.9111 8.33974 10.7288 7.84516C11.5464 7.35058 12.4772 7.07801 13.4304 7.054C14.3836 7.02998 15.3267 7.25534 16.1679 7.70812L14.6429 9.24591C14.0279 9.04733 13.3705 9.02342 12.7429 9.17679C12.1153 9.33016 11.5417 9.6549 11.0851 10.1154C10.6284 10.5758 10.3064 11.1542 10.1543 11.7871C10.0022 12.42 10.0259 13.0829 10.2229 13.7031L8.69789 15.2409C8.26995 14.4346 8.04667 13.534 8.048 12.6195Z" fill="#03014C" />
                                                  <path opacity="0.3" d="M27.6967 11.9601C26.5693 9.65979 25.2273 7.78407 23.6709 6.33292L19.0541 10.8058C19.4433 11.7914 19.5296 12.865 19.3025 13.897C19.0754 14.929 18.5448 15.8752 17.7746 16.6214C17.0044 17.3675 16.0276 17.8816 14.9624 18.1016C13.8971 18.3216 12.7889 18.238 11.7715 17.861L7.85559 21.6546C9.67232 22.469 11.693 22.8763 13.9175 22.8763C20.0737 22.8763 24.6667 19.7702 27.6967 13.5581C27.8185 13.3083 27.8817 13.0354 27.8817 12.7591C27.8817 12.4828 27.8185 12.2099 27.6967 11.9601Z" fill="#03014C" />
                                             </svg>
                                        </button>
                                   </div>
                              </div>

                              <button type="button" className="btn_login1">Login to Continue</button>

                              <div className="register__link_login1">
                                   <p>
                                        Don't have an account ? <Link to={"/register"}>Sign up</Link>
                                   </p>
                              </div>
                         </div>
                         <div className="image__here_login1">
                              <svg className="image_login1" width={485} height={595} viewBox="0 0 485 595" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <rect x="0.292847" y="181.327" width="77.3812" height="77.3812" transform="rotate(-90 0.292847 181.327)" fill="#15DFBB" />
                                   <mask id="mask0_4_80" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x={2} y={106} width={188} height={188}>
                                        <rect x="2.4422" y="293.1" width="187.005" height="187.005" transform="rotate(-90 2.4422 293.1)" fill="#FFBB9C" />
                                   </mask>
                                   <g mask="url(#mask0_4_80)">
                                        <rect x="-24.4263" y="250.889" width="8.49632" height="87.0538" transform="rotate(-45 -24.4263 250.889)" fill="#3048C1" />
                                        <rect x="-38.3979" y="259.486" width="8.49632" height="87.0538" transform="rotate(-45 -38.3979 259.486)" fill="#3048C1" />
                                        <rect x="-28.0803" y="223.591" width="8.49632" height="146.026" transform="rotate(-45 -28.0803 223.591)" fill="#3048C1" />
                                        <rect x="-19.0527" y="209.19" width="8.49632" height="146.026" transform="rotate(-45 -19.0527 209.19)" fill="#3048C1" />
                                        <rect x="-30.7972" y="174.876" width="8.49632" height="212.682" transform="rotate(-45 -30.7972 174.876)" fill="#3048C1" />
                                        <rect x="-19.0527" y="162.057" width="8.49632" height="212.682" transform="rotate(-45 -19.0527 162.057)" fill="#3048C1" />
                                        <rect x="-25.54" y="131.925" width="8.49632" height="267.509" transform="rotate(-45 -25.54 131.925)" fill="#3048C1" />
                                        <rect x="-19.8729" y="112.796" width="8.49632" height="279.308" transform="rotate(-45 -19.8729 112.796)" fill="#3048C1" />
                                        <rect x="-7.23059" y="102.048" width="8.49632" height="279.308" transform="rotate(-45 -7.23059 102.048)" fill="#3048C1" />
                                        <rect x="2.44202" y="88.076" width="8.49632" height="279.308" transform="rotate(-45 2.44202 88.076)" fill="#3048C1" />
                                        <rect x="8.89038" y="70.88" width="8.49632" height="279.308" transform="rotate(-45 8.89038 70.88)" fill="#3048C1" />
                                        <rect x="19.6378" y="55.8337" width="8.49632" height="279.308" transform="rotate(-45 19.6378 55.8337)" fill="#3048C1" />
                                        <rect x="29.3104" y="42.9369" width="8.49632" height="279.308" transform="rotate(-45 29.3104 42.9369)" fill="#3048C1" />
                                        <rect x="43.2819" y="32.1895" width="8.49632" height="279.308" transform="rotate(-45 43.2819 32.1895)" fill="#3048C1" />
                                        <rect x="59.403" y="22.5171" width="8.49632" height="279.308" transform="rotate(-45 59.403 22.5171)" fill="#3048C1" />
                                        <rect x="72.2999" y="10.695" width="8.49632" height="279.308" transform="rotate(-45 72.2999 10.695)" fill="#3048C1" />
                                   </g>
                                   <mask id="mask1_4_80" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x={222} y={367} width={189} height={188}>
                                        <rect x="222.996" y="554.757" width="187.005" height="187.005" transform="rotate(-90 222.996 554.757)" fill="#FFBB9C" />
                                   </mask>
                                   <g mask="url(#mask1_4_80)">
                                        <rect x="196.128" y="512.546" width="8.49632" height="87.0538" transform="rotate(-45 196.128 512.546)" fill="#3048C1" />
                                        <rect x="182.156" y="521.143" width="8.49632" height="87.0538" transform="rotate(-45 182.156 521.143)" fill="#3048C1" />
                                        <rect x="192.474" y="485.248" width="8.49632" height="146.026" transform="rotate(-45 192.474 485.248)" fill="#3048C1" />
                                        <rect x="201.501" y="470.847" width="8.49632" height="146.026" transform="rotate(-45 201.501 470.847)" fill="#3048C1" />
                                        <rect x="189.757" y="436.533" width="8.49632" height="212.682" transform="rotate(-45 189.757 436.533)" fill="#3048C1" />
                                        <rect x="201.501" y="423.714" width="8.49632" height="212.682" transform="rotate(-45 201.501 423.714)" fill="#3048C1" />
                                        <rect x="195.014" y="393.582" width="8.49632" height="267.509" transform="rotate(-45 195.014 393.582)" fill="#3048C1" />
                                        <rect x="200.681" y="374.453" width="8.49632" height="279.308" transform="rotate(-45 200.681 374.453)" fill="#3048C1" />
                                        <rect x="213.323" y="363.705" width="8.49632" height="279.308" transform="rotate(-45 213.323 363.705)" fill="#3048C1" />
                                        <rect x="222.996" y="349.733" width="8.49632" height="279.308" transform="rotate(-45 222.996 349.733)" fill="#3048C1" />
                                        <rect x="229.444" y="332.537" width="8.49632" height="279.308" transform="rotate(-45 229.444 332.537)" fill="#3048C1" />
                                        <rect x="240.192" y="317.491" width="8.49632" height="279.308" transform="rotate(-45 240.192 317.491)" fill="#3048C1" />
                                        <rect x="249.864" y="304.594" width="8.49632" height="279.308" transform="rotate(-45 249.864 304.594)" fill="#3048C1" />
                                        <rect x="263.836" y="293.847" width="8.49632" height="279.308" transform="rotate(-45 263.836 293.847)" fill="#3048C1" />
                                        <rect x="279.957" y="284.174" width="8.49632" height="279.308" transform="rotate(-45 279.957 284.174)" fill="#3048C1" />
                                        <rect x="292.854" y="272.352" width="8.49632" height="279.308" transform="rotate(-45 292.854 272.352)" fill="#3048C1" />
                                   </g>
                                   <rect x="184.073" y="443.564" width="150.463" height="150.463" transform="rotate(-90 184.073 443.564)" fill="#2B374D" />
                                   <rect x="334.537" y="301.698" width="150.463" height="150.463" transform="rotate(-90 334.537 301.698)" fill="#FDD231" />
                                   <rect x="189.447" y="151.235" width="150.463" height="150.463" transform="rotate(-90 189.447 151.235)" fill="#FDD231" />
                                   <rect x="38.9833" y="594.027" width="150.463" height="150.463" transform="rotate(-90 38.9833 594.027)" fill="#15DFBB" />
                                   <circle cx="264.678" cy="76.0026" r="24.719" transform="rotate(-90 264.678 76.0026)" fill="white" />
                                   <circle cx="389.885" cy="60.419" r="9.13528" transform="rotate(-90 389.885 60.419)" fill="#79FFF7" />
                                   <circle cx="389.885" cy="9.90607" r="9.13528" transform="rotate(-90 389.885 9.90607)" fill="#79FFF7" />
                                   <circle opacity="0.5" cx="330.238" cy="293.1" r="50.5127" transform="rotate(-90 330.238 293.1)" fill="white" />
                              </svg>

                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Login1