import React, {Component} from "react";
import EventCard from "./EventCard";

class EventList extends Component {
  render() {
    const {events} = this.props;

    return (
      <div className="events-container">
        {events.map(event => (
          <EventCard key={event.id} event={event}/>
        ))}
      </div>
    );
  }
}

export default EventList;