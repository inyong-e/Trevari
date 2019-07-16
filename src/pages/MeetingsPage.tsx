import * as React from "react";
import {MeetingSearch} from '../components/Meeting/MeetingSearch';
import {MeetingCardField} from '../components/Meeting/MeetingCardField';
export default class MeetingsPage extends React.Component {

  render() {

    return (
      <div style={{ background: "white" ,padding:'25px 13%'}} >
        <div>
        <MeetingSearch />
        </div>
        <div>
        <MeetingCardField Cards={[{id:1},{id:2}]}/>

        </div>
      </div>
    );
  }
}
