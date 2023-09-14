import {MovieCard,Navbar,FreeToWatch,SearchBanner,Trending,WhatsPopular,JoinToday,Footer, Shimmer} from './components'

const App = () => {
  return (
    <main className="">

<Navbar/>
<SearchBanner/>

<MovieCard/>
<JoinToday/>

<Trending/>
<WhatsPopular/>
<FreeToWatch/>


<Footer/>


    </main>
  )
}
export default App