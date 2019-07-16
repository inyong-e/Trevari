import * as React from "react";
import {MeetingSearch} from '../components/Meeting/MeetingSearch';

export default class MeetingsPage extends React.Component {

  render() {

    return (
      <div style={{ background: "white" ,padding:'25px 13%'}} >
        <MeetingSearch />
        
      </div>
    );
  }
}
