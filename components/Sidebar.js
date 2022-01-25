import {useRouter} from 'next/router'

export default function Sidebar({children}) {
  const router = useRouter();
 

  return (
    <div>
      <script defer src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"></script>
      <section class="h-screen w-screen bg-gray-200 flex flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden">
  <aside class="sm:h-full sm:w-16 w-full h-12 bg-gray-800 text-gray-200">
    <ul class="text-center flex flex-row sm:flex-col w-full">
      
      <li class="h-14 border-b border-gray-900 hidden sm:block">
        <a id="page-icon" class="h-full w-full hover:bg-gray-700 block p-3">
          <img class="object-contain h-full w-full" src="https://avatars1.githubusercontent.com/u/6157842?v=4"
            alt="open-source" />
        </a>
      </li>
      
      <li class="sm:border-b border-gray-900 flex-1 sm:w-full" title="Home">
        <a id="page-icon" onClick={() => router.push('/')}  class="h-full w-full hover:bg-gray-700 block p-3">
          <i class="fas fa-home fill-current text-white"> </i>
        </a>
      </li>
      <li class="sm:border-b border-gray-900 flex-1 sm:w-full" title="Articles">
        <a id="page-icon" onClick={() => router.push('/Articles')}  class="h-full w-full hover:bg-gray-700 block p-3">
          <i class="fas fa-book-open fill-current text-white"> </i>
        </a>
      </li>
      <li class="sm:border-b border-gray-900 flex-1 sm:w-full" title="Add new article">
        <a id="page-icon" onClick={() => router.push('/AddArticle')}  class="h-full  w-full hover:bg-gray-700 block p-3">
          <i class="fas fa-folder-plus fill-current text-white"> </i>
        </a>
      </li>
      <li class="sm:border-b border-gray-900 flex-1 sm:w-full" title="profile">
        <a id="page-icon" onClick={() => router.push('/Profile')}  class="h-full  w-full hover:bg-gray-700 block p-3">
          <i className="fas fa-user-alt text-white"> </i>
        </a>
      </li>
    </ul>
  </aside>
  <main class="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 overflow-auto">
    <nav class="border-b bg-white px-6 py-2 flex items-center min-w-0 h-14">
      <h1 class="font-semibold text-lg"></h1>
      <span class="flex-1"></span>
      <span class="mr-2">
        <input type="text" placeholder="Search"
          class="w-full text-teal-400  border-teal-400  rounded-2xl border-2 px-2 py-1  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-300 focus:bg-gray-100" />
      </span>
      <span class="mr-2  drop-shadow-lg text-teal-400 border-teal-400 border-2 rounded-2xl pr-2 pl-2">
       Register
      </span>
      <span class="mr-2 bg-teal-400 text-white rounded-2xl pr-2 pl-2">
       log in
      </span>
      <button
        class="ml-auto border rounded-full ml-2 w-10 h-10 text-center leading-none text-gray-200 bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
        <i class="fas fa-user fill-current"></i>
      </button>
    </nav>
   
    {children}
    <footer class="px-6 py-3 border-t flex w-full items-end">
      <p class="text-gray-600">Made by @codingsafari</p>
      <div class="flex-1"></div>
    
    </footer>
  </main>
</section>

    </div>
  );
}