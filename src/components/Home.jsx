import React from 'react'
import Friendmain from "./firendsMainSec/FriendMain"
import Pymk from './peopleYouMayKnow/Pymk'
const Home = () => {
    return (
        <>
          <div className="container-fluid">
<div className="row">
    <div className="order-1 col-lg-8 col-md-7">
<Pymk/>
    </div>
    <div className="order-2 col-lg-4 col-md-5">
<Friendmain/>
    </div>
</div>               
          </div>

        </>
    )
}


export default Home;