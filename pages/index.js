import { getFeaturedEvents } from "../dummy_data";
import EventList from "../components/event/event-list";

function HomePage() {

    const featuredEvents = getFeaturedEvents();

    return (
        <EventList items={featuredEvents} />
    );
}

export default HomePage;