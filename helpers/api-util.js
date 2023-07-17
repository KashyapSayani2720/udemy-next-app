function modifyEvents(data){
    const events = [];

    for(const key in data){
        events.push({
            id : key,
            ...data[key]
        });
    }

    return events;
}

export async function getAllEvents() {
    const response = await fetch("https://nextjs-event-project-9b9ee-default-rtdb.firebaseio.com/events.json");
    const data = await response.json();

    return modifyEvents(data);
}

export async function getFeaturedEvents() {
    const response = await fetch("https://nextjs-event-project-9b9ee-default-rtdb.firebaseio.com/events.json?orderBy=%22isFeatured%22&equalTo=true");
    const data = await response.json();

    return modifyEvents(data);
}