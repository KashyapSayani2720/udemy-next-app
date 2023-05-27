import { useRouter } from "next/router";
import { getEventById } from "../../dummy_data";
import { Fragment } from "react";

import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";


function EventDetailsPage() {

    const router = useRouter();

    const eventId = router.query.eventId;

    const event = getEventById(eventId);

    if(!event){
        return <p>No Event Found !!!</p>
    }

    return (
        <Fragment>
            <EventSummary title={event.title} />
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    );
}

export default EventDetailsPage;