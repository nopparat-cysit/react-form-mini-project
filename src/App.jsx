import './App.css';
import { Form } from './components/form.jsx';
function App() {
  return (
    <>
    <div className="w-[460px] min-h-[100px] bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-7 flex items-center">
      <span className="mr-3 text-white">
        {/* Movie film icon (SVG) */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-film h-6 w-6"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>
      </span>
      <h1 className="text-white text-2xl sm:text-2xl font-bold">Movie Survey</h1>
    </div>
    <div className='bg-white'>
      <Form />
    </div>
    </>
  )
}

export default App;
