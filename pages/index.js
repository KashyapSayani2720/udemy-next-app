import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/event/event-list";

function HomePage(props) {

    if(!props.events){
        return <h3>No Data Found Yet !!!</h3>
    }

    return (
        <EventList items={props.events} />
    );
}

export async function getStaticProps(){

    const featuredEvents = await getFeaturedEvents();

    return {
        props : {
            events : featuredEvents
        }
    }
}

export default HomePage;