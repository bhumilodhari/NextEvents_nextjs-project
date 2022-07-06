import React, { Fragment } from 'react'
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../dummy-data'
import { useRouter } from "next/router"

function AllEventsPage() {
    const router = useRouter();
    const events = getAllEvents();


    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;
        return router.push(fullPath);
    }

    return (
        <Fragment>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={events} />
        </Fragment>
    )
}

export default AllEventsPage