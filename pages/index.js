import { getFeaturedEvents } from '../dummy-data';
import React, { Fragment } from 'react'
import EventList from '../components/events/EventList'
import EventsSearch from '../components/events/events-search';


function HomePage() {
    const featuredEvents = getFeaturedEvents();
    return (
        <Fragment>
            <EventList items={featuredEvents} />
        </Fragment>
    )
}

export default HomePage