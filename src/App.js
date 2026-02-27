import React, {Component} from "react";
import EventList from "./components/EventList";
import Loader from "./components/Loader";
import ErrorView from "./components/ErrorView";
import "./App.css";

class App extends Component {

  state = {
    events: [],
    loading: true,
    error: false
  }

  componentDidMount() {
    this.fetchEvents();
  }

  fetchEvents = async () => {
    try {
      const response =
        await fetch("https://eonet.gsfc.nasa.gov/api/v3/events");

      if (!response.ok) {
        throw new Error("API Error");
      }

      const data = await response.json();

      this.setState({
        events: data.events,
        loading: false
      });

    } catch {
      this.setState({
        error: true,
        loading: false
      });
    }
  }

  renderContent = () => {
    const {loading, error, events} = this.state;

    if (loading) return <Loader />;
    if (error) return <ErrorView />;

    return <EventList events={events} />;
  }

  render() {
    return (
      <div className="app-container">
        <h1>🌍 Earth Events Monitor</h1>
        {this.renderContent()}
      </div>
    );
  }
}

export default App;