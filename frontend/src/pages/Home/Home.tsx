import { h } from "preact";
import { Switch, Route } from 'react-router-dom'
import PageID from '../PageID/PageID';
import Banner from '../Banner/Banner';



const Home = () => (
  
    <Switch>
      <Route exact path='/' component={Banner}/>
      <Route  path='/:pageId' component={PageID}/>
    </Switch>

  )

  
export default Home;