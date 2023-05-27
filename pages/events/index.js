import { getAllEvents } from '../../dummy_data';
import EventList from "../../components/event/event-list";
import EventsSearch from '../../components/event/events-search';
import { useRouter } from 'next/router';

function AllEventsPage() {

    const router = useRouter();
    const events = getAllEvents();

    function findEventsHandler(year,month){
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }

    return (
        <div>
            <EventsSearch onSearch={findEventsHandler}/>
            <EventList items={events} />
        </div>
    );
}

export default AllEventsPage;