import { Header, StatsCard, TripCard } from "components";
import React from "react";
import { dashboardStats, user, allTrips } from "~/constants";

const { totalUsers, usersJoined, totalTrips, tripsCreated, userRole } = dashboardStats;

const Dashboard = () => {
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome , ${user.name}`}
        description={
          "Track activity , trends and popular destinations in real time"
        }
      />

      <section className="flex flex-col gap-6">
        <div className="lg:grid grid-cols-3 md: grid-cols-1 gap-6 w-full">
          <StatsCard
            headerTitle="Total Users"
            total={totalUsers}
            currentMonthCount={usersJoined.currentMonth}
            lastMonthCount={usersJoined.lastMonth}
          />
          <StatsCard
            headerTitle="Total Trips"
            total={totalTrips}
            currentMonthCount={tripsCreated.currMonth}
            lastMonthCount={tripsCreated.lastMonth}
          />
          <StatsCard
            headerTitle="Active Users"
            total={userRole.total}
            currentMonthCount={userRole.currentMonth}
            lastMonthCount={userRole.lastMonth}
          />
        </div>
      </section>
      <section className="container">
        <h1 className="text-xl font-semibold text-dark-100">
          Created Trips
        </h1>
        <div className="trip-grid">
          {allTrips.slice(0,4).map(({id , name , imageUrls , itinerary, tags , estimatedPrice})=> (
            <TripCard key={id}
            id={id.toString()}
            name={name}
            imageUrl={imageUrls[0]}
            location={itinerary?.[0]?.location ?? ''}
            tags={tags}
            price={estimatedPrice}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
