import './App.css'
import me from './assets/img_1.png'
import richmond from './assets/richmond_crest.svg'
import swinburne from './assets/swinburne_crest.svg'

function App() {
  return (
    <>
      <div class="flex h-screen">
        <div class="w-fit flex-auto absolute -z-10">
          <h1 class="tracking-[-0.06em] text-[28vh] leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-black rotate-90 origin-left absolute top-[-13vh] left-[6vh]">
            YASIRU
          </h1>
        </div>

        <div class="flex-0 flex-shrink-0 overflow-y-auto snap-y snap-mandatory h-screen w-full">

          <div class="flex flex-col justify-center items-center w-full h-screen snap-center bg-black bg-opacity-70 md:bg-transparent">
            <div class="hidden w-[75%] sm:flex flex-col items-center text-center">
              <img src={me} alt="Profile" class="max-w-screen-sm translate-y-10 w-[70%]" />
              <div class="block text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-black -translate-y-10">
                <h1 class="text-[7rem] font-black tracking-[-0.04em]">Welcome!</h1>
              </div>
              <div>
                <p class="text-white text-sm leading-relaxed max-w-3xl font-light -translate-y-3 md:-translate-y-20 ">
                  <span class="font-bold">Yasiru Lokesha</span> is a Computer Science student with expertise in full-stack and mobile app
                  development, software development. Skilled in ReactJS, Vue, and C/C#, he has built projects ranging from
                  interactive dashboards to Android applications with animations and graphics. Yasiru is proficient in Power BI, DAX, and Azure,
                  and is expanding his skills in lifecycle management, advanced APIs, and dynamic data handling with Firebase, AWS, and Azure.
                </p>
              </div>
            </div>

            <div class="sm:hidden flex flex-col justify-center items-center w-full h-screen">
              <img src={me} alt="Profile" class="max-w-screen-sm translate-y-10 w-[70%]" />
              <h1 class="z-10 font-black tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-black translate-y-10">Welcome</h1>
              <p></p>
            </div>
          </div>

          <div class="flex justify-center items-center h-fit md:h-screen z-10 snap-center scroll-pt-10 bg-black bg-opacity-70 md:bg-transparent">
            <div class=" text-white p-8">
              <section class="text-center mb-16">
                <h1 class="text-4xl md:text-6xl font-bold text-blue-400 mb-6">
                  About me
                </h1>
                <p class="text-base md:text-md leading-relaxed max-w-4xl mx-auto font-light">
                  Yasiru Lokesha is an undergraduate Computer Science student with a versatile skill set in full-stack development, mobile app design, and animations. Proficient in front-end technologies like ReactJS and Vue, he has worked on diverse projects, including data-driven dashboards, interactive tourist applications, and Android apps with rich animations and graphics. Yasiru is experienced in C/C# for Windows application development and has a strong interest in data visualization using Power BI, DAX, and Azure. He continuously expands his knowledge, focusing on areas like lifecycle management in Android and advanced API integrations for dynamic data handling, including Firebase and Azure.
                </p>
              </section>

              <section class="flex flex-col md:flex-row justify-between items-start gap-16">
                <div class="w-full md:w-1/2">
                  <h2 class="text-3xl md:text-5xl font-bold text-blue-400 mb-6 sm:text-end">
                    Education
                  </h2>
                  <div class="space-y-12">
                    <div class="flex sm:flex-row-reverse items-center gap-6 sm:text-end text-start">
                      <img src={richmond} alt="Richmond College" class="w-20 h-20 object-contain" />
                      <div>
                        <h3 class="text-xl font-bold">Richmond College</h3>
                        <p class="text-sm font-light">
                          Studied since 2008 and passed O/L and A/L with outstanding results.
                        </p>
                        <p class="text-sm font-light">2008 - 2022</p>
                      </div>
                    </div>

                    <div class="flex sm:flex-row-reverse items-center gap-6 sm:text-end text-start">
                      <img src={swinburne} alt="Swinburne University" class="w-20 h-20 object-contain" />
                      <div>
                        <h3 class="text-xl font-bold">Swinburne University of Technology</h3>
                        <p class="text-sm font-light">
                          Studied since 2008 and passed O/L and A/L with outstanding results.
                        </p>
                        <p class="text-sm font-light">2022</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="w-full md:w-1/2">
                  <h2 class="text-3xl md:text-5xl font-bold text-blue-400 mb-6">
                    Skills
                  </h2>

                  <fieldset class="h-64">
                    <input id="web" class="hidden peer/web " type="radio" name="skill_sector" checked />
                    <label for="web" class="peer-checked/web:text-sky-500 text-white text-lg font-bold ">Web</label>

                    <input id="mobile" class="hidden peer/mobile " type="radio" name="skill_sector" />
                    <label for="mobile" class="peer-checked/mobile:text-sky-500 text-white text-lg font-bold  m-8">Mobile</label>

                    <input id="desktop" class="hidden peer/software" type="radio" name="skill_sector" />
                    <label for="desktop" class="peer-checked/software:text-sky-500 text-white text-lg font-bold m-0">Desktop</label>

                    <div class="hidden peer-checked/web:flex flex-col justify-between gap-4 max-w-sm mt-8">
                      <div className="skill">
                        - <svg width="35" height="35" viewBox="-10.5 -9.45 21 18.9" fill="blue" xmlns="http://www.w3.org/2000/svg" class="text-blue-500"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" stroke-width="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg> ReactJS
                      </div>

                      <div className="skill">
                        - <svg width="30" height="18" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 0c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.141.285 1.957 1.113 2.86 2.03C17.08 7.271 18.782 9 22.5 9c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.141-.285-1.957-1.113-2.86-2.03C20.42 1.728 18.718 0 15 0ZM7.5 9C3.5 9 1 11 0 15c1.5-2 3.25-2.75 5.25-2.25 1.141.285 1.957 1.113 2.86 2.03C9.58 16.271 11.282 18 15 18c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.141-.285-1.957-1.113-2.86-2.03C12.92 10.729 11.218 9 7.5 9Z" fill="#38BDF8"></path></svg>
                        Tailwind
                      </div>

                      <div className="skill">
                        - <svg class="logo" viewBox="0 0 128 128" width="35" height="35" data-v-2b313a12=""><path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z" data-v-2b313a12=""></path><path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" data-v-2b313a12=""></path></svg>
                        Vue JS
                      </div>

                      <div className="skill">
                        - <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 16 16" fill="none">
                          <path fill="#FFF" d="M4.51 7.687c0 .197.02.357.058.475.042.117.096.245.17.384a.233.233 0 01.037.123c0 .053-.032.107-.1.16l-.336.224a.255.255 0 01-.138.048c-.054 0-.107-.026-.16-.074a1.652 1.652 0 01-.192-.251 4.137 4.137 0 01-.165-.315c-.415.491-.936.737-1.564.737-.447 0-.804-.129-1.064-.385-.261-.256-.394-.598-.394-1.025 0-.454.16-.822.484-1.1.325-.278.756-.416 1.304-.416.18 0 .367.016.564.042.197.027.4.07.612.118v-.39c0-.406-.085-.689-.25-.854-.17-.166-.458-.246-.868-.246-.186 0-.377.022-.574.07a4.23 4.23 0 00-.575.181 1.525 1.525 0 01-.186.07.326.326 0 01-.085.016c-.075 0-.112-.054-.112-.166v-.262c0-.085.01-.15.037-.186a.399.399 0 01.15-.113c.185-.096.409-.176.67-.24.26-.07.537-.101.83-.101.633 0 1.096.144 1.394.432.293.288.442.726.442 1.314v1.73h.01zm-2.161.811c.175 0 .356-.032.548-.096.191-.064.362-.182.505-.342a.848.848 0 00.181-.341c.032-.129.054-.283.054-.465V7.03a4.43 4.43 0 00-.49-.09 3.996 3.996 0 00-.5-.033c-.357 0-.618.07-.793.214-.176.144-.26.347-.26.614 0 .25.063.437.196.566.128.133.314.197.559.197zm4.273.577c-.096 0-.16-.016-.202-.054-.043-.032-.08-.106-.112-.208l-1.25-4.127a.938.938 0 01-.049-.214c0-.085.043-.133.128-.133h.522c.1 0 .17.016.207.053.043.032.075.107.107.208l.894 3.535.83-3.535c.026-.106.058-.176.1-.208a.365.365 0 01.214-.053h.425c.102 0 .17.016.213.053.043.032.08.107.101.208l.841 3.578.92-3.578a.458.458 0 01.107-.208.346.346 0 01.208-.053h.495c.085 0 .133.043.133.133 0 .027-.006.054-.01.086a.76.76 0 01-.038.133l-1.283 4.127c-.032.107-.069.177-.111.209a.34.34 0 01-.203.053h-.457c-.101 0-.17-.016-.213-.053-.043-.038-.08-.107-.101-.214L8.213 5.37l-.82 3.439c-.026.107-.058.176-.1.213-.043.038-.118.054-.213.054h-.458zm6.838.144a3.51 3.51 0 01-.82-.096c-.266-.064-.473-.134-.612-.214-.085-.048-.143-.101-.165-.15a.378.378 0 01-.031-.149v-.272c0-.112.042-.166.122-.166a.3.3 0 01.096.016c.032.011.08.032.133.054.18.08.378.144.585.187.213.042.42.064.633.064.336 0 .596-.059.777-.176a.575.575 0 00.277-.508.52.52 0 00-.144-.373c-.095-.102-.276-.193-.537-.278l-.772-.24c-.388-.123-.676-.305-.851-.545a1.275 1.275 0 01-.266-.774c0-.224.048-.422.143-.593.096-.17.224-.32.384-.438.16-.122.34-.213.553-.277.213-.064.436-.091.67-.091.118 0 .24.005.357.021.122.016.234.038.346.06.106.026.208.052.303.085.096.032.17.064.224.096a.46.46 0 01.16.133.289.289 0 01.047.176v.251c0 .112-.042.171-.122.171a.552.552 0 01-.202-.064 2.427 2.427 0 00-1.022-.208c-.303 0-.543.048-.708.15-.165.1-.25.256-.25.475 0 .149.053.277.16.379.106.101.303.202.585.293l.756.24c.383.123.66.294.825.513.165.219.244.47.244.748 0 .23-.047.437-.138.619a1.436 1.436 0 01-.388.47c-.165.133-.362.23-.591.299-.24.075-.49.112-.761.112z" />
                          <g fill="#F90" fill-rule="evenodd" clip-rule="evenodd">
                            <path d="M14.465 11.813c-1.75 1.297-4.294 1.986-6.481 1.986-3.065 0-5.827-1.137-7.913-3.027-.165-.15-.016-.353.18-.235 2.257 1.313 5.04 2.109 7.92 2.109 1.941 0 4.075-.406 6.039-1.239.293-.133.543.192.255.406z" />
                            <path d="M15.194 10.98c-.223-.287-1.479-.138-2.048-.069-.17.022-.197-.128-.043-.24 1-.705 2.645-.502 2.836-.267.192.24-.053 1.89-.99 2.68-.143.123-.281.06-.218-.1.213-.53.687-1.72.463-2.003z" />
                          </g>
                        </svg>
                        AWS
                      </div>

                    </div>
                    <div class="hidden peer-checked/mobile:flex flex-col justify-between gap-4 mt-8">
                      <div className="skill">
                        - <svg fill="none" height="35" viewBox="0 0 73 91" width="35" xmlns="http://www.w3.org/2000/svg" >
                          <path d="M22.5752 87.933C26.3634 89.4568 30.4722 90.3615 34.7873 90.5132C40.6261 90.717 46.1816 89.5089 51.1455 87.2147C45.1923 84.8757 39.8009 81.4554 35.1974 77.2024C32.2171 81.9798 27.805 85.7506 22.5752 87.933Z" fill="#FF9100">
                          </path>
                          <path d="M35.1996 77.2049C24.6952 67.4909 18.3219 53.4295 18.8613 38.0059C18.8787 37.5063 18.906 37.0042 18.9359 36.5046C17.0542 36.0174 15.0905 35.7216 13.0697 35.6495C10.1764 35.5476 7.37501 35.908 4.73026 36.6512C1.92643 41.5629 0.233686 47.1979 0.0224039 53.2356C-0.521958 68.8158 8.90619 82.4273 22.5749 87.9331C27.8047 85.7532 32.2168 81.9849 35.1996 77.2049Z" fill="#FFC400">
                          </path>
                          <path d="M35.1998 77.2047C37.6433 73.2973 39.1222 68.7137 39.2962 63.7772C39.7486 50.792 31.019 39.6214 18.9361 36.5044C18.9063 37.004 18.8789 37.5061 18.8615 38.0057C18.3246 53.4268 24.6954 67.4883 35.1998 77.2047Z" fill="#FF9100">
                          </path>
                          <path d="M37.9435 0C31.0632 5.51321 25.6271 12.7813 22.341 21.1555C20.4594 25.9529 19.2762 31.1032 18.9307 36.5045C31.0135 39.6216 39.7432 50.7922 39.2883 63.7798C39.1168 68.7163 37.6304 73.2949 35.1919 77.2074C39.7929 81.4653 45.1868 84.8806 51.14 87.2196C63.0911 81.6965 71.5697 69.81 72.0594 55.7511C72.3775 46.6411 68.8777 38.5229 63.9337 31.6699C58.7113 24.4242 37.9435 0 37.9435 0Z" fill="#DD2C00">
                          </path>
                        </svg> Firebase
                      </div>

                      <div className="skill">
                        - <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="35" height="35" viewBox="-3 0 48 48" version="1.1">
                          <title>Android-color</title>
                          <desc>Created with Sketch.</desc>
                          <defs>
                          </defs>
                          <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Color-" transform="translate(-304.000000, -560.000000)" fill="#95CF00">
                              <path d="M330.727009,569.600905 C329.935377,569.600905 329.294532,568.977195 329.294532,568.206729 C329.294532,567.436264 329.935377,566.815376 330.727009,566.815376 C331.518641,566.815376 332.159486,567.436264 332.159486,568.206729 C332.159486,568.977195 331.518641,569.600905 330.727009,569.600905 L330.727009,569.600905 Z M319.272991,569.600905 C318.481359,569.600905 317.840514,568.977195 317.840514,568.206729 C317.840514,567.436264 318.481359,566.815376 319.272991,566.815376 C320.064623,566.815376 320.705468,567.436264 320.705468,568.206729 C320.705468,568.977195 320.064623,569.600905 319.272991,569.600905 L319.272991,569.600905 Z M331.573737,564.018558 L332.107291,563.233981 L332.640845,562.460694 L333.829743,560.722208 C333.97763,560.507719 333.916736,560.219853 333.696355,560.078742 C333.478873,559.934809 333.180199,559.994075 333.038111,560.208564 L331.222867,562.852982 L330.677713,563.648847 C328.952361,562.996915 327.029826,562.632849 325,562.632849 C322.973074,562.632849 321.047639,562.996915 319.322287,563.648847 L318.780033,562.852982 L318.243579,562.071228 L316.967688,560.208564 C316.819801,559.994075 316.524027,559.937631 316.303645,560.078742 C316.086164,560.219853 316.025269,560.507719 316.170257,560.722208 L317.359155,562.460694 L317.892709,563.233981 L318.429163,564.018558 C314.37821,565.855822 311.637945,569.335616 311.637945,573.317766 L338.362055,573.317766 C338.362055,569.335616 335.62179,565.855822 331.573737,564.018558 Z M311.843828,575.174785 L311.637945,575.174785 L311.637945,595.613286 C311.637945,597.236061 312.992129,598.556859 314.662386,598.556859 L316.842999,598.556859 C316.767606,598.802392 316.727009,599.059214 316.727009,599.330147 L316.727009,605.214471 C316.727009,606.75258 318.011599,608 319.591964,608 C321.172328,608 322.456918,606.75258 322.456918,605.214471 L322.456918,599.330147 C322.456918,599.059214 322.413422,598.802392 322.340928,598.556859 L327.659072,598.556859 C327.586578,598.802392 327.545982,599.059214 327.545982,599.330147 L327.545982,605.214471 C327.545982,606.75258 328.827672,608 330.408036,608 C331.991301,608 333.275891,606.75258 333.275891,605.214471 L333.275891,599.330147 C333.275891,599.059214 333.232394,598.802392 333.157001,598.556859 L335.340514,598.556859 C337.010771,598.556859 338.362055,597.236061 338.362055,595.613286 L338.362055,575.174785 L311.843828,575.174785 Z M306.864954,575.174785 C305.28169,575.174785 304,576.422205 304,577.960314 L304,589.884184 C304,591.422293 305.28169,592.669713 306.864954,592.669713 C308.445319,592.669713 309.727009,591.422293 309.727009,589.884184 L309.727009,577.960314 C309.727009,576.422205 308.445319,575.174785 306.864954,575.174785 Z M343.137945,575.174785 C341.554681,575.174785 340.272991,576.422205 340.272991,577.960314 L340.272991,589.884184 C340.272991,591.422293 341.554681,592.669713 343.137945,592.669713 C344.71831,592.669713 346,591.422293 346,589.884184 L346,577.960314 C346,576.422205 344.71831,575.174785 343.137945,575.174785 Z" id="Android">
                              </path>
                            </g>
                          </g>
                        </svg>
                        Android Studio
                      </div>

                      <div className="skill">
                        - <svg width="35" height="35" viewBox="-10.5 -9.45 21 18.9" fill="blue" xmlns="http://www.w3.org/2000/svg" class="text-blue-500"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" stroke-width="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
                        React Native
                      </div>

                    </div>
                    <div class="hidden peer-checked/software:flex flex-col justify-between gap-4 mt-8">
                      <div className="skill">
                        - <svg xmlns="http://www.w3.org/2000/svg" viewBox="32.18585611720149 20.47 223.6851360941233 247.05999999999997" width="35" height="35"><path d="M252.71 93.61a21.67 21.67 0 0 0-2.65-10.87 20.74 20.74 0 0 0-7.87-7.67Q198.77 50 155.32 25c-7.8-4.51-15.36-4.35-23.11.23C120.69 32 63 65.09 45.81 75.06c-7.08 4.1-10.52 10.38-10.52 18.54v100.8a21.77 21.77 0 0 0 2.55 10.66 20.63 20.63 0 0 0 8 7.88c17.19 10 74.89 43.05 86.41 49.85 7.75 4.58 15.31 4.74 23.12.23q43.41-25.08 86.87-50.09a20.63 20.63 0 0 0 8-7.88 21.77 21.77 0 0 0 2.55-10.66V93.61z" fill="#004482" /><path d="M252.73 194.4a21.72 21.72 0 0 1-2.55 10.66 18.58 18.58 0 0 1-1.45 2.24L144 144l98.19-68.93a20.72 20.72 0 0 1 7.86 7.67 21.57 21.57 0 0 1 2.66 10.87c.02 33.6.02 100.79.02 100.79z" fill="#00599c" /><path d="M250.05 82.74L37.81 205.06a21.75 21.75 0 0 1-2.53-10.65V93.6c0-8.16 3.45-14.44 10.52-18.54C63 65.09 120.69 32 132.22 25.21c7.73-4.58 15.3-4.74 23.1-.23q43.41 25.08 86.87 50.09a20.72 20.72 0 0 1 7.86 7.67z" fill="#659ad2" /><path d="M148.2 184.72a39.91 39.91 0 0 1-35-20.63q-.53-.94-1-1.92A39.94 39.94 0 0 1 179 119.4c.53.64 1 1.31 1.53 2 .24.33.48.66.7 1l35.07-20.2q-1.28-2.06-2.68-4c-.49-.69-1-1.35-1.48-2A79.9 79.9 0 0 0 78 181.92c.34.64.69 1.27 1 1.9a79.91 79.91 0 0 0 136.86 3.62l-34.29-20.73a39.88 39.88 0 0 1-33.37 18.01z" fill="#fff" /></svg>
                        C/C++
                      </div>
                      <div className="skill">
                        - <svg xmlns="http://www.w3.org/2000/svg" height="35" preserveAspectRatio="xMidYMid" viewBox="0 -1.428 255.582 290.108" width="35" ><path d="m255.569 84.452c-.002-4.83-1.035-9.098-3.124-12.76-2.052-3.603-5.125-6.622-9.247-9.009-34.025-19.619-68.083-39.178-102.097-58.817-9.17-5.294-18.061-5.1-27.163.27-13.543 7.986-81.348 46.833-101.553 58.536-8.321 4.818-12.37 12.19-12.372 21.771-.013 39.455 0 78.91-.013 118.365 0 4.724.991 8.91 2.988 12.517 2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.27 34.015-19.64 68.075-39.199 102.105-58.818 4.217-2.44 7.333-5.544 9.386-9.252 1.994-3.608 2.987-7.793 2.987-12.518 0 0 0-78.889-.013-118.345" fill="#a179dc" /><path d="m128.182 143.241-125.194 72.084c2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.27 34.015-19.64 68.075-39.199 102.105-58.818 4.217-2.44 7.333-5.544 9.386-9.252z" fill="#280068" /><path d="m255.569 84.452c-.002-4.83-1.035-9.098-3.124-12.76l-124.263 71.55 124.413 72.073c1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345" fill="#390091" /><g fill="#fff"><path d="m201.892 116.294v13.474h13.474v-13.474h6.737v13.474h13.474v6.737h-13.474v13.473h13.474v6.737h-13.474v13.474h-6.737v-13.474h-13.474v13.474h-6.737v-13.474h-13.473v-6.737h13.473v-13.473h-13.473v-6.737h13.473v-13.474zm13.474 20.21h-13.474v13.474h13.474z" /><path d="m128.457 48.626c35.144 0 65.827 19.086 82.262 47.456l-.16-.273-41.35 23.808c-8.146-13.793-23.08-23.102-40.213-23.294l-.54-.003c-26.125 0-47.305 21.18-47.305 47.305a47.08 47.08 0 0 0 6.239 23.47c8.154 14.235 23.483 23.836 41.067 23.836 17.693 0 33.109-9.723 41.221-24.11l-.197.345 41.287 23.918c-16.255 28.13-46.518 47.157-81.253 47.536l-1.058.006c-35.255 0-66.025-19.204-82.419-47.724-8.003-13.923-12.582-30.064-12.582-47.277 0-52.466 42.532-95 95-95z" /></g></svg>
                        C#
                      </div>
                      <div className="skill">
                        - <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 255" preserveAspectRatio="xMinYMin meet"><defs><linearGradient x1="12.959%" y1="12.039%" x2="79.639%" y2="78.201%" id="a"><stop stop-color="#387EB8" offset="0%" /><stop stop-color="#366994" offset="100%" /></linearGradient><linearGradient x1="19.128%" y1="20.579%" x2="90.742%" y2="88.429%" id="b"><stop stop-color="#FFE052" offset="0%" /><stop stop-color="#FFC331" offset="100%" /></linearGradient></defs><path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z" fill="url(#a)" /><path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z" fill="url(#b)" /></svg>
                        Python
                      </div>

                    </div>
                  </fieldset>

                  <div class="mt-8">
                    <a href="https://github.com/yasirulokesha" target="_blank" class="flex items-center gap-2 text-blue-400 text-lg font-bold hover:text-sky-300">

                      Explore my projects
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="size-5" style={{ translate: '-5px' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="min-h-screen flex flex-col items-center justify-center  text-white snap-center">
            <h1 class="text-4xl md:text-6xl font-bold text-blue-400 mb-6">
              About me
            </h1>
            <div className="text-center mb-6">
              <p className="text-xl mb-2">Phone</p>
              <p className="font-semibold text-2xl">(+61) 41 200 4138</p>
              <p className="text-xl mt-4 mb-2">E-mail</p>
              <p className="font-semibold text-2xl">yasirulokesha01@gmail.com</p>
              <p className="text-xl mt-4 mb-2">Studying at</p>
              <p className="font-semibold text-2xl">Swinburne University of Technology</p>
              <p className="text-xl mt-4 mb-2">Location</p>
              <p className="font-semibold flex justify-center items-center text-2xl">
                Australia <span className="ml-2">🇦🇺</span>
              </p>
            </div>
            <form className='w-1/4'>
              <h3 class="text-lg md:text-3xl font-bold text-blue-400 mb-6">
                Message me
              </h3>
              <div className="mb-4 text-white">
                <label htmlFor="name" className="block text-sm font-lg mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 text-white rounded-2xl border border-gray-700 focus:ring focus:ring-blue-400 focus:outline-none bg-transparent"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-lg mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-6 py-4 text-white rounded-2xl border border-gray-700 focus:ring focus:ring-blue-400 focus:outline-none bg-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-10 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400 float-end"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>


    </>
  )
}

export default App