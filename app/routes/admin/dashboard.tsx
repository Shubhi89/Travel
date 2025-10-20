import { Header, StatsCard, TripCard } from 'components';
import React from 'react'

const Dashboard = () => {
  const user = {name: 'Shubhi'};
  const dashboardStats = {
    totalUsers: 12450,
    usersJoined : {currentMonth : 218 , lastMonth :176},
    totalTrips : 3210,
    tripsCreated : {currMonth : 150 , lastMonth : 250},
    userRole : {total : 62 , currentMonth : 25 , lastMonth: 15},
  }

  const {totalUsers , usersJoined , totalTrips , tripsCreated , userRole} = dashboardStats;
  return(
  <main className='dashboard wrapper'>
    <Header title={`Welcome`}
    description={'Track activity , trends and popular destinations in real time'}/>

    <section className='flex flex-col gap-6'>
      <div className='grid grid-cols-1 md: grid-cols-3 gap-6 w-full'>

      </div>
    </section>
    <StatsCard
      headerTitle='total users'
      total={totalUsers}
      currentMonthCount={usersJoined.currentMonth}
      lastMonthCount={usersJoined.lastMonth}

    />
    <StatsCard
      headerTitle='total trips'
      total={totalTrips}
      currentMonthCount={tripsCreated.currMonth}
      lastMonthCount={tripsCreated.lastMonth}

    />
    <StatsCard
      headerTitle='users'
      total={userRole.total}
      currentMonthCount={userRole.currentMonth}
      lastMonthCount={userRole.lastMonth}

    />
    <TripCard/>
  </main>
  )
}

export default Dashboard;