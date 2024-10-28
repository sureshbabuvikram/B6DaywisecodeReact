import React from 'react';

const TailwindLandingPage = () => {
    return (
        <div>
               {/* <!-- header, main ,features --> */}
 <div class="container mx-auto">
    <header class="flex justify-between items-center px-8 py-5 bg-white shadow-sm ">
        <div class="text-xl font-semibold text-black" >Brainwave.io</div>
        <nav class="flex space-x-8 text-gray-600">
            <a href="#" class="hover:text-gray-900">Demos</a>
            <a href="#" class="hover:text-gray-900">Pages</a>
            <a href="#" class="hover:text-gray-900">Support</a>
            <a href="#" class="hover:text-gray-900">Contact</a>
        </nav>

        <button class="bg-blue-600 text-white px-4 py-2 rounded" >Get Stared Free</button>
    </header>

    <main class="text-center mt-12">
        <h1 class="text-4xl font-bold text-black">Get things done by awesome remote team</h1>
        <p class="text-gray-500 mt-4">We share common trends and strategies for improving your rental income and making sure you stay in high demand.</p>
        <div class="flex justify-center mt-5 space-x-6 ">
            <button class="bg-blue-600 text-white px-6 py-3 rounded">Get Started for free</button>
            <button class="bg-transparent border border-gray-500 px-6 py-3 rounded" >Learn More</button>
        </div>

        <div class="mt-12 flex justify-center">
            <img src="./assests/firstimage.png" alt="first" class="w-2/4 rounded shadow-lg"/>
        </div>
    </main>

    <section class="mt-12 grid grid-cols-3 gap-6 text-center">
        <div>
            <h1 class="text-xl font-semibold mt-6">Project management</h1>
            <p class="text-sm mt-3 text-gray-700" >With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
        </div>
        <div>
            <h1 class="text-xl font-semibold mt-6">Time tracking</h1>
            <p class="text-sm mt-3 text-gray-700" >With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
        </div>
        <div>
            <h1 class="text-xl font-semibold mt-6">Beautiful mobile app</h1>
            <p class="text-sm mt-3 text-gray-700" >With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
        </div>

    </section>
    

 </div>

 {/* <!-- body content --> */}
 <div class="container mx-auto mt-12 bg-gray-100">
    <section class="flex justify-center items-center py-10">
        <div class="w-1/2 text-left px-10" >
            <h2 class="text-3xl font-bold text-black">Getting started with Albino is easier than ever</h2>
            <p class=" mt-5 text-sm text-gray-600" >With lots of unique blocks, you can easily build a page without coding. Build your next landing page so quickly with Albino.</p>
            <button class="mt-5 bg-blue-600 text-white px-6 py-3 rounded text-sm" >Get Started for free</button>
        </div>
        <div class="w-1/2 flex justify-center">
            <img src="./assests/secondimage.png" alt="second" class="shadow-sm rounded"/>
        </div>
    </section>

    <section class=" bg-white ">
        <div class="flex justify-around text-center ">
            <div class="mt-12 mb-12">
                <h2 class="text-2xl font-bold " >1M+</h2>
                <p class="text-cxl text-gray-500 mt-3">Customers visit Albino every month</p>
            </div>  
            <div class="mt-12 mb-12">
                <h2 class="text-2xl font-bold " >93%</h2>
                <p class="text-cxl text-gray-500 mt-3">Satisfaction rate from our customers</p>
            </div> 
            <div class="mt-12 mb-12">
                <h2 class="text-2xl font-bold " >4.9</h2>
                <p class="text-cxl text-gray-500 mt-3">Average customer ratings out of 5.0!</p>
            </div>  
             
        </div>
    </section>
    
 </div>

 {/* <!-- Hero section --> */}
  <div class="container mx-auto mt-10 ">
    <section class="bg-gray-100 py-16">
        <div  class="text-center mb-10">
            <h1 class="text-4xl font-bold text-black mb-4">Manage your projects fast</h1>
            <p class="text-gray-600">With lots of unique blocks, 
                you can easily build a page 
                without coding. Build your next landing page.</p>
        </div>
        <div class="flex justify-center items-center gap-16" >
                <div class="flex justify-center items-center w-96 " >
                    <img src="./assests/thirdimage.png" alt="third" class="shadow-lg rounded "/>
                </div>

                <div class="space-y-8">
                    <div class="flex items-start space-x-4">
                        <div class="bg-blue-600 text-white w-8 h-8 rounded-full text-sm flex flex-shrink-0 items-center justify-center ">1</div>
                        <div class="-mt-1">
                            <h3 class="text-2xl font-semibold text-black">Create a project</h3>
                            <p class="text-sm text-gray-600 mt-2">With lots of unique blocks,
                                 you can easily build a page without coding.</p>
                        </div>
                    </div>

                    <div class="flex items-start space-x-4">
                        <div class="bg-blue-600 text-white w-8 h-8 rounded-full text-sm flex flex-shrink-0 items-center justify-center ">2</div>
                        <div class="-mt-1">
                            <h3 class="text-2xl font-semibold text-black">Assign related people</h3>
                            <p class="text-sm text-gray-600 mt-2">With lots of unique blocks,
                                 you can easily build a page without coding.</p>
                        </div>
                    </div>

                    <div class="flex items-start space-x-4">
                        <div class="bg-blue-600 text-white w-8 h-8 rounded-full text-sm flex flex-shrink-0 items-center justify-center ">3</div>
                        <div class="-mt-1">
                            <h3 class="text-2xl font-semibold text-black">Make it done on-time</h3>
                            <p class="text-sm text-gray-600 mt-2">With lots of unique blocks,
                                 you can easily build a page without coding.</p>
                        </div>
                    </div>
                </div>
        </div>

    </section>

  </div>
 
  {/* <!-- Testimonial section --> */}
   <div class="container mx-auto mt-20">
        <div class="flex justify-evenly items-center">
            {/* <!-- testinomial-1 --> */}
             <div class="flex flex-col justify-center items-center " >
                <img src="./assests/fourthimage.png" alt="forth" class="rounded-full w-16 h-16"/>
                <h1 class="text-xl font-semibold text-black mt-4     ">"You made it so simple"</h1>
                <p class="text-sm text-gray-600 w-56 text-center mt-3" >My new site is so much faster and easier to work with than my old site.</p>
                <p class="text-xl text-black mt-8 font-semibold">Corey Valdez</p>
                <p class="">Founder at Zenix</p>
             </div>

              {/* <!-- testinomial-2 --> */}
              <div class="flex flex-col justify-center items-center " >
                <img src="./assests/fifthimage.png" alt="forth" class="rounded-full w-16 h-16"/>
                <h1 class="text-xl font-semibold text-black mt-4     ">"You made it so simple"</h1>
                <p class="text-sm text-gray-600 w-56 text-center mt-3" >My new site is so much faster and easier to work with than my old site.</p>
                <p class="text-xl text-black mt-8 font-semibold">Corey Valdez</p>
                <p class="">Founder at Zenix</p>
             </div>

        </div>

   </div>

   {/* <!-- Pricing & plan --> */}
    <div class="container mx-auto mt-10 ">
        <section class="bg-gray-900 text-white py-16">
            <div class="max-w-6xl mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-4">Pricing & Plans</h2>
                <p class="text-sm text-gray-400 text-center mb-10">With lots of unique blocks, you can easily 
                    build a page without coding. 
                    Build your next landing page.</p>
            </div>

            <div class="flex justify-center space-x-6 m-8 mb-15">
                {/* <!-- basic plan --> */}
                 <div class="bg-white text-gray-900 rounded-lg p-8 flex flex-col items-center">
                        <span class="text-indigo-700 font-semibold mb-4">BASIC</span>
                        <h2 class="text-4xl font-bold mb-3" >$29</h2>
                        <p class="text-gray-600 mb-6">One time purchase</p>
                        <p class="text-gray-600 mb-8 text-center" >With lots of unique blocks, you can easily
                             build a page without coding.
                              Build your next landing page.</p>
                        <button  class="bg-indigo-600 text-white px-6 py-3 
                        rounded-full " >Get Started for free</button>
                 </div>

                    {/* <!-- standard plan -->                 */}
                    <div class="bg-white text-gray-900 rounded-lg p-8 flex flex-col items-center">
                        <span class="text-indigo-700 font-semibold mb-4">STANDARD</span>
                        <h2 class="text-4xl font-bold mb-3" >$29</h2>
                        <p class="text-gray-600 mb-6">One time purchase</p>
                        <p class="text-gray-600 mb-8 text-center" >With lots of unique blocks, you can easily
                             build a page without coding.
                              Build your next landing page.</p>
                        <button  class="bg-indigo-600 text-white px-6 py-3 
                        rounded-full " >Get Started for free</button>
                 </div>

                {/* <!-- premium plan --> */}
                <div class="bg-white text-gray-900 rounded-lg p-8 flex flex-col items-center">
                    <span class="text-indigo-700 font-semibold mb-4">PREMIUM</span>
                    <h2 class="text-4xl font-bold mb-3" >$29</h2>
                    <p class="text-gray-600 mb-6">One time purchase</p>
                    <p class="text-gray-600 mb-8 text-center" >With lots of unique blocks, you can easily
                         build a page without coding.
                          Build your next landing page.</p>
                    <button  class="bg-indigo-600 text-white px-6 py-3 
                    rounded-full " >Get Started for free</button>
             </div>

            </div>

            <div>
                <div class="grid grid-cols-2 gap-8">
                    <div class="flex items-start space-x-4">
                      <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full"></div>
                      <div>
                        <h4 class="font-semibold mb-2">Can I use Albino for my clients?</h4>
                        <p class="text-gray-400">With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Intuitive timeline sagittis interdum halkanastra.</p>
                        <a href="#" class="text-indigo-400 mt-2 inline-block">Click to learn more ›</a>
                      </div>
                    </div>
                    <div class="flex items-start space-x-4">
                      <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full"></div>
                      <div>
                        <h4 class="font-semibold mb-2">Does it work with WordPress?</h4>
                        <p class="text-gray-400">With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Intuitive timeline sagittis interdum halkanastra.</p>
                        <a href="#" class="text-indigo-400 mt-2 inline-block">Click to learn more ›</a>
                      </div>
                    </div>
                    <div class="flex items-start space-x-4">
                      <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full"></div>
                      <div>
                        <h4 class="font-semibold mb-2">Do I get free updates?</h4>
                        <p class="text-gray-400">With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Intuitive timeline sagittis interdum halkanastra.</p>
                        <a href="#" class="text-indigo-400 mt-2 inline-block">Click to learn more ›</a>
                      </div>
                    </div>
                    <div class="flex items-start space-x-4">
                      <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full"></div>
                      <div>
                        <h4 class="font-semibold mb-2">Will you provide support?</h4>
                        <p class="text-gray-400">With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Intuitive timeline sagittis interdum halkanastra.</p>
                        <a href="#" class="text-indigo-400 mt-2 inline-block">Click to learn more ›</a>
                      </div>
                    </div>
                  </div>
                  
                  <p class="text-center mt-12 text-gray-400">
                    Haven't got your answer? <a href="#" class="text-indigo-400">Contact our support now</a>
                  </p>
            </div> 
        </section>
    </div>

      {/* <!-- Blocks Section --> */}
   <div class="flex justify-center space-x-6 bg-white py-16">   
    <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-black  mr-20">Build better landing page fast</h2>
        <p class="text-gray-600 mt-2 text-wrap text-left ml-34 ">With lots of unique blocks, you can easily build a page without coding. <br></br> Build your next landing page.</p>
    </div>
    <div class="flex justify-evenly space-x-6 mt-8 ">
        <button class="w-25 h-10 px-2 bg-blue-100 text-blue-700 rounded ml-16">Learn more    </button>
        <button class="w-25 h-10 px-2 bg-blue-600 text-white  rounded">Get it now    </button>
    </div>   
</div>

{/* <!-- Footer Section --> */}
<footer class="bg-gray-50 py-16">
    <div class="max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-5 gap-8">
            <div>
                <h3 class="text-2xl font-bold text-black">Brainwave.io</h3>
                <p class="text-gray-600 mt-4">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                <div class="flex space-x-4 mt-4">
                    <a href="#" class="text-gray-600 hover:text-gray-800"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="text-gray-600 hover:text-gray-800"><i class="fab fa-facebook"></i></a>
                    <a href="#" class="text-gray-600 hover:text-gray-800"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="text-gray-600 hover:text-gray-800"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
            <div>
                <h4 class="font-semibold text-gray-900 mb-4">Company</h4>
                <ul class="space-y-2">
                    <li><a href="#" class="text-gray-600 hover:text-gray-900">About us</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Contact us</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Careers</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Press</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-semibold text-gray-900 mb-4">Product</h4>
                <ul class="space-y-2">
                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Features</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Pricing</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-gray-900">News</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Help desk</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Support</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-semibold text-gray-900 mb-4">Services</h4>
                <ul class="space-y-2">
                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Digital Marketing</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Content Writing</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-gray-900">SEO for Business</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-gray-900">UI Design</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-semibold text-gray-900 mb-4">Legal</h4>
                <ul class="space-y-2">
                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Terms & Conditions</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Return Policy</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer> 
        </div>
    );
};

export default TailwindLandingPage;