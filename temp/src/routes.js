import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import RecLAPage from './components/rec/RecLAPage';
import RecSBPage from './components/rec/RecSBPage';
import RecSFPage from './components/rec/RecSFPage';
import RecSDPage from './components/rec/RecSDPage';
import HouseLAPage from './components/house/HouseLAPage';
import HouseSBPage from './components/house/HouseSBPage';
import HouseSFPage from './components/house/HouseSFPage';
import HouseSDPage from './components/house/HouseSDPage';
import SignUpPage from './components/signup/SignUpPage';
import SignInPage from './components/signin/SignInPage';
import CalendarPage from './components/calendar/CalendarPage';
import GroupPage from './components/group/GroupPage';
import FriendChat from './components/friendchat/FriendChat';
import HousingChat from './components/housingchat/HousingChat';
import RecommenderChat from './components/recommenderchat/RecomenderChat';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="recsd" component={RecSDPage} />
    <Route path="recsb" component={RecSBPage} />
    <Route path="recla" component={RecLAPage} />
    <Route path="recsf" component={RecSFPage} />
    <Route path="housesd" component={HouseSDPage} />
    <Route path="housesb" component={HouseSBPage} />
    <Route path="housela" component={HouseLAPage} />
    <Route path="housesf" component={HouseSFPage} />
    <Route path="signup" component={SignUpPage} />
    <Route path="signin" component={SignInPage}/>
    <Route path="calendar" component={CalendarPage}/>
    <Route path="group" component={GroupPage}/>
    <Route path="friendchat" component={FriendChat} />
    <Route path="housingchat" component={HousingChat} />
    <Route path="recommenderchat" component={RecommenderChat} />
  </Route>
);
