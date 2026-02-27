import React, {Component} from "react";

class EventCard extends Component {

  render() {
    const {event} = this.props;

    return (
      <div className="card">
        <h3>{event.title}</h3>
        <p>Category:
          {event.categories[0].title}
        </p>
        <p>
          Source:
          {event.sources[0].id}
        </p>
      </div>
    );
  }
}

export default EventCard;