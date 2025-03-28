"use client";

import { useState } from "react";

export default function Home() {

  const [locationHours, setLocationHours] = useState<any>([]);

  async function getOpenStatus() {
    const res = await fetch('https://api.dineoncampus.com/v1/locations/status?site_id=5ae72b5df3eeb60b57d3b76e&platform=0');
    const data = await res.json();
    setLocationHours(data.locations);
  }

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-6">
        <button onClick={getOpenStatus} type="button" className="rounded-md bg-red-600 p-4 text-xl font-bold hover:cursor-pointer">Get Locations</button>
        {locationHours.length > 0 ? (
          <div>
            <ul>
              {locationHours.map((location: any) => (
                <li key={location.id}>
                  <strong>{location.name}</strong>:{" "}
                  <span>{location.status.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (<p></p>)}
      </div>
    </div>
  );
}
