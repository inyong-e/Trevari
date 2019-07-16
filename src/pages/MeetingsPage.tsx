import * as React from "react";
import {MeetingSearch} from '../components/Meeting/MeetingSearch';
import {MeetingCardField} from '../components/Meeting/MeetingCardField';
export default class MeetingsPage extends React.Component {

  render() {

    return (
      <div style={{ background: "white" ,padding:'25px 13% 0 13%'}} >
        <MeetingSearch />
      <div>
        <MeetingCardField Cards={[{id:1},{id:2},{id:3},{id:4}]}/>

        </div>
      </div>
    );
  }
}
