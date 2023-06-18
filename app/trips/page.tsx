import React from 'react'
import getCurrentUser from '../actions/getCurrentUser'
import ClientOnly from '../components/ClientOnly';
import EmptyState from '../components/EmptyState';
import getReservations from '../actions/getReservations';
import TripsClient from './TripsClient';

const page = async() => {
    const currentUser = await getCurrentUser();
    
    if(!currentUser) {
        return (
            <ClientOnly>
                <EmptyState 
                    title='Unauthorized'
                    subtitle='Please login.'
                />
            </ClientOnly>
        )
    }


    const reservations = await getReservations({userId:currentUser.id})
    if(reservations.length === 0) {
        return (
            <ClientOnly>
                <EmptyState 
                    title='No trips till now.'
                    subtitle= "Look like you haven't reserved any trips."
                />
            </ClientOnly>
        )
    }

    return (
    <ClientOnly>
        <TripsClient 
        currentUser={currentUser}
        reservations={reservations}
        />
    </ClientOnly>
  )
}

export default page