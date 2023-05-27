import { useRouter } from "next/router";
import { getFilteredEvents } from '../../dummy_data';
import EventList from '../../components/event/event-list';
import ResultsTitle from "../../components/event/result-title";
import Button from "../../components/ui/button";

function FilteredEventsPage() {

    const router = useRouter();

    const filterData = router.query.slug;


    if (!filterData) {
        return <p>Loading...</p>
    }

    const numYear = +filterData[0]
    const numMonth = +filterData[1]

    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
        return (
            <div className="center">
            <p>Invalid Filter. Please Adjust Your Values !</p>
            <Button link='/events'>Show All Events</Button>
        </div>
        )
    }

    const dateFilter = {
        year: numYear,
        month: numMonth
    }

    console.log(dateFilter);


    const filteredEvents = getFilteredEvents(dateFilter);

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <div className="center">
                <p>No Events Found for the Chosen Filter !</p>
                <Button link='/events'>Show All Events</Button>
            </div>
        )
    }

    const date = new Date(numYear, numMonth - 1);

    return (
        <>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </>
    );
}

export default FilteredEventsPage;